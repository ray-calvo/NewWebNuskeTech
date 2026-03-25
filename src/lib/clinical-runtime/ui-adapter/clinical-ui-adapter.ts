import type {
  ActiveUrgencySignal,
  ClinicalCtaIntensity,
  ClinicalPageRoute,
  ClinicalUxState,
} from "@/lib/clinical-runtime/domain";
import type {
  ClinicalCtaAction,
  ClinicalCtaDecisionResult,
} from "@/lib/clinical-runtime/engine";
import type {
  ClinicalUiAdapterInput,
  ClinicalUiAdapterOutput,
  PageClinicalUiModel,
  SuggestedTransition,
  VisibleClinicalSignal,
  VisibleCta,
  VisualPriorityHint,
} from "@/lib/clinical-runtime/ui-adapter/clinical-ui-adapter-types";
import {
  getSemanticLabelKeyForActionKind,
  getSemanticLabelKeyForTransition,
} from "@/lib/clinical-runtime/ui-adapter/clinical-ui-adapter-types";

function resolveVisualPriority(
  intensity: ClinicalCtaIntensity,
): VisualPriorityHint {
  switch (intensity) {
    case "emergency":
      return "maximum";
    case "medical-decision":
      return "high";
    case "clinical-follow-up":
      return "medium";
    case "safe-orientation":
    default:
      return "calm";
  }
}

function getCtaEmphasis(
  slot: ClinicalCtaAction["slot"],
  priorityLevel: ClinicalCtaAction["priorityLevel"],
): VisibleCta["emphasis"] {
  if (slot === "dominant" || priorityLevel === "priority-4") {
    return "strong";
  }

  if (slot === "secondary") {
    return "supporting";
  }

  return "quiet";
}

function shouldPersistCta(
  action: ClinicalCtaAction,
  intensity: ClinicalCtaIntensity,
): boolean {
  return (
    intensity === "emergency" &&
    (action.slot === "dominant" || action.kind === "call-now")
  );
}

function adaptVisibleCta(
  action: ClinicalCtaAction,
  resolvedIntensity: ClinicalCtaIntensity,
): VisibleCta {
  return {
    actionKind: action.kind,
    slot: action.slot,
    priorityLevel: action.priorityLevel,
    targetRoute: action.targetRoute,
    emphasis: getCtaEmphasis(action.slot, action.priorityLevel),
    shouldRender: true,
    shouldPersist: shouldPersistCta(action, resolvedIntensity),
    shouldDegradeWhenUrgent:
      action.kind === "followup-request" ||
      action.kind === "schedule-valuation" ||
      action.kind === "orientation-request" ||
      action.kind === "route-transition",
    semanticLabelKey: getSemanticLabelKeyForActionKind(action.kind),
    reason: action.reason,
  };
}

function getUrgencySignals(
  urgencySignals: readonly ActiveUrgencySignal[],
): readonly VisibleClinicalSignal[] {
  return urgencySignals
    .filter((signal) => signal.active)
    .map((signal) => ({
      kind: "urgent-risk" as const,
      severity: signal.severity === "high" ? "high" : "medium",
      source: signal.source === "triage" ? "triage" : "runtime",
      reason: signal.reason,
    }));
}

function getStateSignal(
  state: ClinicalUxState,
): VisibleClinicalSignal | null {
  switch (state) {
    case "clinical-uncertainty":
      return {
        kind: "clinical-uncertainty",
        severity: "medium",
        source: "runtime",
        reason: "The user still needs clarification before the route is fully clear.",
      };
    case "recognized-complexity":
      return {
        kind: "recognized-complexity",
        severity: "medium",
        source: "runtime",
        reason: "The case should be treated as clinically complex rather than generic.",
      };
    case "stability-followup":
      return {
        kind: "follow-up-stability",
        severity: "low",
        source: "runtime",
        reason: "The current route supports stable follow-up without dramatization.",
      };
    default:
      return null;
  }
}

function getTriageSignal(
  input: ClinicalUiAdapterInput["triageBridge"],
): VisibleClinicalSignal | null {
  if (!input) {
    return null;
  }

  return {
    kind: "triage-guided",
    severity:
      input.normalizedSeverity === "critical-emergency"
        ? "high"
        : input.normalizedSeverity === "stable-followup"
          ? "low"
          : "medium",
    source: "triage",
    reason: input.bridgeReason,
  };
}

function getSuggestedTransitions(
  decision: ClinicalCtaDecisionResult,
  triageRoute: ClinicalPageRoute | null,
): readonly SuggestedTransition[] {
  const transitions = new Map<ClinicalPageRoute, SuggestedTransition>();

  if (
    triageRoute &&
    triageRoute !== decision.pageContext.route &&
    triageRoute !== decision.dominantCta.targetRoute
  ) {
    transitions.set(triageRoute, {
      targetRoute: triageRoute,
      semanticLabelKey: getSemanticLabelKeyForTransition(triageRoute),
      source: "triage",
      reason: "Triage suggests an alternative clinical route.",
    });
  }

  for (const action of decision.tertiaryCtas) {
    if (!action.targetRoute) {
      continue;
    }

    transitions.set(action.targetRoute, {
      targetRoute: action.targetRoute,
      semanticLabelKey: getSemanticLabelKeyForTransition(action.targetRoute),
      source: "page-context",
      reason: action.reason,
    });
  }

  return Array.from(transitions.values());
}

function resolveAdapterUrgencySignals(
  input: ClinicalUiAdapterInput,
  urgencyOverride: ClinicalUiAdapterInput["urgencyOverride"],
): readonly ActiveUrgencySignal[] {
  if (input.activeUrgencySignals) {
    return input.activeUrgencySignals;
  }

  if (
    urgencyOverride?.hasActiveUrgencySignal &&
    urgencyOverride.source &&
    urgencyOverride.reason
  ) {
    return [
      {
        active: true,
        source: urgencyOverride.source,
        severity: "high",
        reason: urgencyOverride.reason,
      },
    ];
  }

  return [];
}

function buildUiModel(input: ClinicalUiAdapterInput): PageClinicalUiModel {
  const urgencyOverride = input.urgencyOverride ?? input.ctaDecision.urgencyOverride;
  const activeUrgencySignals = resolveAdapterUrgencySignals(
    input,
    urgencyOverride,
  );

  const triageRecommendedRoute = input.triageBridge?.recommendedRoute ?? null;
  const dominantCta = adaptVisibleCta(
    input.ctaDecision.dominantCta,
    input.ctaDecision.resolvedIntensity,
  );
  const secondaryCtas = input.ctaDecision.secondaryCtas
    .filter((action) => !input.ctaDecision.prohibitedCtaKinds.includes(action.kind))
    .map((action) => adaptVisibleCta(action, input.ctaDecision.resolvedIntensity));
  const fallbackCta = adaptVisibleCta(
    input.ctaDecision.fallbackCta,
    input.ctaDecision.resolvedIntensity,
  );

  const signals = [
    ...getUrgencySignals(activeUrgencySignals),
    getStateSignal(input.ctaDecision.resolvedState),
    getTriageSignal(input.triageBridge ?? null),
  ].filter((signal): signal is VisibleClinicalSignal => signal !== null);

  const visualPriority = resolveVisualPriority(input.ctaDecision.resolvedIntensity);

  return {
    route: input.pageContext.route,
    routeKey: input.pageContext.routeKey,
    resolvedState: input.ctaDecision.resolvedState,
    visualPriority,
    dominantCta,
    secondaryCtas,
    fallbackCta,
    hiddenCtaKinds: input.ctaDecision.prohibitedCtaKinds,
    visibleSignals: signals,
    suggestedTransitions: getSuggestedTransitions(
      input.ctaDecision,
      triageRecommendedRoute,
    ),
    showPersistentPrimaryCta: dominantCta.shouldPersist,
    showRiskSignal:
      signals.some((signal) => signal.kind === "urgent-risk") ||
      urgencyOverride.shouldOverridePageBehavior,
    shouldSimplifyReading:
      input.ctaDecision.resolvedIntensity === "emergency" ||
      urgencyOverride.shouldOverridePageBehavior,
    shouldDeEmphasizeSoftActions:
      input.ctaDecision.resolvedIntensity === "emergency",
    shouldShowSafeFallback:
      input.ctaDecision.fallbackCta.targetRoute !== null &&
      (input.ctaDecision.urgencyOverride.preserveSafeFallback ||
        input.ctaDecision.resolvedState !== "urgency-perceived"),
  };
}

export function adaptClinicalRuntimeToUiModel(
  input: ClinicalUiAdapterInput,
): ClinicalUiAdapterOutput {
  const uiModel = buildUiModel(input);
  const adapterSource = input.ctaDecision.urgencyOverride.shouldOverridePageBehavior
    ? "urgency-override"
    : input.triageBridge
      ? "triage-bridge"
      : "cta-engine";

  return {
    uiModel,
    adapterReason:
      input.triageBridge?.bridgeReason ?? input.ctaDecision.decisionReason,
    adapterSource,
    triageSeverity: input.triageBridge?.normalizedSeverity ?? null,
  };
}
