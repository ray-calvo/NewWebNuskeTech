import {
  getClinicalPageContextOrThrow,
  getClinicalTransitionsForState,
  resolveUrgencyOverride,
  type ClinicalCtaIntensity,
  type ClinicalPageContext,
  type ClinicalPageRoute,
  type ClinicalUxState,
} from "@/lib/clinical-runtime/domain";
import type {
  ClinicalCtaAction,
  ClinicalCtaActionKind,
  ClinicalCtaDecisionInput,
  ClinicalCtaDecisionResult,
  ClinicalCtaDecisionSource,
  ClinicalCtaPriorityLevel,
  ClinicalCtaSlot,
} from "@/lib/clinical-runtime/engine/cta-engine-types";

function getPriorityLevelFromIntensity(
  intensity: ClinicalCtaIntensity,
): ClinicalCtaPriorityLevel {
  switch (intensity) {
    case "emergency":
      return "priority-4";
    case "medical-decision":
      return "priority-3";
    case "clinical-follow-up":
      return "priority-2";
    case "safe-orientation":
    default:
      return "priority-1";
  }
}

function createAction({
  kind,
  slot,
  intensity,
  targetRoute = null,
  reason,
  source,
}: {
  kind: ClinicalCtaActionKind;
  slot: ClinicalCtaSlot;
  intensity: ClinicalCtaIntensity;
  targetRoute?: ClinicalPageRoute | null;
  reason: string;
  source: ClinicalCtaDecisionSource;
}): ClinicalCtaAction {
  return {
    kind,
    slot,
    priorityLevel: getPriorityLevelFromIntensity(intensity),
    targetRoute,
    reason,
    source,
  };
}

function createFallbackAction(
  pageContext: ClinicalPageContext,
  reason: string,
): ClinicalCtaAction {
  if (pageContext.defaultFallbackRoute === "/urgencias") {
    return createAction({
      kind: "emergency-route",
      slot: "fallback",
      intensity: "emergency",
      targetRoute: "/urgencias",
      reason,
      source: "safe-fallback",
    });
  }

  return createAction({
    kind: "route-transition",
    slot: "fallback",
    intensity: "safe-orientation",
    targetRoute: pageContext.defaultFallbackRoute,
    reason,
    source: "safe-fallback",
  });
}

function getTransitionTarget(
  pageContext: ClinicalPageContext,
  state: ClinicalUxState,
): ClinicalPageRoute | null {
  const transitions = getClinicalTransitionsForState(pageContext.route, state);

  return transitions[0]?.to ?? pageContext.primaryTransitions[0] ?? null;
}

function resolveUncertaintyDominantAction(
  pageContext: ClinicalPageContext,
): ClinicalCtaAction {
  const transitionTarget = getTransitionTarget(pageContext, "clinical-uncertainty");

  switch (pageContext.route) {
    case "/servicios":
    case "/triage":
      return createAction({
        kind: "orientation-request",
        slot: "dominant",
        intensity: "safe-orientation",
        targetRoute: transitionTarget ?? "/diagnostico",
        reason: "Uncertainty should prioritize route orientation before a deeper escalation.",
        source: "page-context",
      });
    case "/cirugia":
      return createAction({
        kind: "specialized-valuation-request",
        slot: "dominant",
        intensity: "medical-decision",
        targetRoute: "/cirugia",
        reason: "Surgery should convert uncertainty into a specialized clinical decision.",
        source: "page-context",
      });
    case "/endoscopia":
      return createAction({
        kind: "specialized-valuation-request",
        slot: "dominant",
        intensity: "medical-decision",
        targetRoute: "/endoscopia",
        reason: "Endoscopy should evaluate whether a minimally invasive route makes sense.",
        source: "page-context",
      });
    case "/medicina-interna":
      return createAction({
        kind: "valuation-request",
        slot: "dominant",
        intensity: "medical-decision",
        targetRoute: "/medicina-interna",
        reason: "Internal medicine should integrate unclear or evolving cases.",
        source: "page-context",
      });
    case "/diagnostico":
    default:
      return createAction({
        kind: "valuation-request",
        slot: "dominant",
        intensity: "medical-decision",
        targetRoute: pageContext.route,
        reason: "Uncertainty should default to clinical clarification through valuation.",
        source: "state-default",
      });
  }
}

function resolveComplexityDominantAction(
  pageContext: ClinicalPageContext,
): ClinicalCtaAction {
  switch (pageContext.route) {
    case "/oncologia":
    case "/exoticos":
    case "/medicina-interna":
    case "/endoscopia":
      return createAction({
        kind: "specialized-valuation-request",
        slot: "dominant",
        intensity: "medical-decision",
        targetRoute: pageContext.route,
        reason: "Recognized complexity should lead to specialized valuation in the current route.",
        source: "page-context",
      });
    case "/servicios":
      return createAction({
        kind: "orientation-request",
        slot: "dominant",
        intensity: "safe-orientation",
        targetRoute: getTransitionTarget(pageContext, "recognized-complexity"),
        reason: "The hub should orient complex cases without pretending to resolve them locally.",
        source: "page-context",
      });
    default:
      return createAction({
        kind: "valuation-request",
        slot: "dominant",
        intensity: "medical-decision",
        targetRoute: pageContext.route,
        reason: "Complex cases should prioritize a structured valuation path.",
        source: "state-default",
      });
  }
}

function resolveFollowupDominantAction(
  pageContext: ClinicalPageContext,
): ClinicalCtaAction {
  switch (pageContext.route) {
    case "/prevencion":
      return createAction({
        kind: "followup-request",
        slot: "dominant",
        intensity: "clinical-follow-up",
        targetRoute: "/prevencion",
        reason: "Prevention should sustain continuity and scheduled medical follow-up.",
        source: "page-context",
      });
    case "/oncologia":
    case "/medicina-interna":
      return createAction({
        kind: "followup-request",
        slot: "dominant",
        intensity: "clinical-follow-up",
        targetRoute: pageContext.route,
        reason: "Complex follow-up should remain visible and clinically active.",
        source: "page-context",
      });
    default:
      return createAction({
        kind: "schedule-valuation",
        slot: "dominant",
        intensity: "clinical-follow-up",
        targetRoute: pageContext.route,
        reason: "Stable cases should retain a clear follow-up or scheduled valuation path.",
        source: "state-default",
      });
  }
}

function resolveBaseDominantAction(
  pageContext: ClinicalPageContext,
  state: ClinicalUxState,
): ClinicalCtaAction {
  switch (state) {
    case "urgency-perceived":
      return createAction({
        kind: "emergency-route",
        slot: "dominant",
        intensity: "emergency",
        targetRoute: "/urgencias",
        reason: "Perceived urgency should immediately prioritize the emergency route.",
        source: "state-default",
      });
    case "clinical-uncertainty":
      return resolveUncertaintyDominantAction(pageContext);
    case "recognized-complexity":
      return resolveComplexityDominantAction(pageContext);
    case "stability-followup":
      return resolveFollowupDominantAction(pageContext);
    default:
      return createAction({
        kind: "orientation-request",
        slot: "dominant",
        intensity: "safe-orientation",
        targetRoute: pageContext.defaultFallbackRoute,
        reason: "The system should still provide a safe route even without a stronger match.",
        source: "safe-fallback",
      });
  }
}

function resolveSecondaryActions(
  pageContext: ClinicalPageContext,
  state: ClinicalUxState,
): readonly ClinicalCtaAction[] {
  if (state === "urgency-perceived") {
    return [
      createAction({
        kind: "call-now",
        slot: "secondary",
        intensity: "emergency",
        reason: "Urgent cases should surface immediate hospital contact.",
        source: "state-default",
      }),
      createAction({
        kind: "open-whatsapp",
        slot: "secondary",
        intensity: "emergency",
        reason: "Urgent cases may need direct messaging without extra navigation.",
        source: "state-default",
      }),
    ];
  }

  if (state === "stability-followup") {
    return [
      createAction({
        kind: "valuation-request",
        slot: "secondary",
        intensity: "medical-decision",
        targetRoute: pageContext.route,
        reason: "Stable cases still need a clear medical escalation path if they stop being simple.",
        source: "page-context",
      }),
    ];
  }

  if (state === "recognized-complexity") {
    return [
      createAction({
        kind: "followup-request",
        slot: "secondary",
        intensity: "clinical-follow-up",
        targetRoute: pageContext.route,
        reason: "Complex cases should keep continuity visible next to valuation.",
        source: "page-context",
      }),
      createAction({
        kind: "call-now",
        slot: "secondary",
        intensity: "safe-orientation",
        reason: "Direct contact remains a valid secondary route for complex cases.",
        source: "page-context",
      }),
    ];
  }

  if (pageContext.route === "/servicios" || pageContext.route === "/triage") {
    return [
      createAction({
        kind: "valuation-request",
        slot: "secondary",
        intensity: "medical-decision",
        targetRoute: getTransitionTarget(pageContext, state),
        reason: "Orientation layers can still offer a direct valuation path as a secondary action.",
        source: "page-context",
      }),
    ];
  }

  return [
    createAction({
      kind: "call-now",
      slot: "secondary",
      intensity: "safe-orientation",
      reason: "Direct hospital contact is a safe secondary action when the next route is still being clarified.",
      source: "page-context",
    }),
  ];
}

function resolveTertiaryActions(
  pageContext: ClinicalPageContext,
  state: ClinicalUxState,
): readonly ClinicalCtaAction[] {
  const transitionTarget = getTransitionTarget(pageContext, state);

  if (!transitionTarget) {
    return [];
  }

  return [
    createAction({
      kind: "route-transition",
      slot: "tertiary",
      intensity: "safe-orientation",
      targetRoute: transitionTarget,
      reason: "The system should preserve a clinically coherent next route when one is available.",
      source: "page-context",
    }),
  ];
}

function resolveProhibitedKinds(
  state: ClinicalUxState,
): readonly ClinicalCtaActionKind[] {
  switch (state) {
    case "urgency-perceived":
      return [
        "followup-request",
        "schedule-valuation",
        "orientation-request",
      ];
    case "clinical-uncertainty":
      return ["followup-request"];
    case "recognized-complexity":
      return ["emergency-route"];
    case "stability-followup":
      return ["call-now", "open-whatsapp"];
    default:
      return [];
  }
}

function buildUrgencyEscalationDecision(
  pageContext: ClinicalPageContext,
  state: ClinicalUxState,
  decisionReason: string,
  decisionSource: ClinicalCtaDecisionSource,
): Omit<ClinicalCtaDecisionResult, "urgencyOverride"> {
  return {
    pageContext,
    requestedState: state,
    resolvedState: "urgency-perceived",
    resolvedIntensity: "emergency",
    dominantCta: createAction({
      kind: "emergency-route",
      slot: "dominant",
      intensity: "emergency",
      targetRoute: "/urgencias",
      reason: decisionReason,
      source: decisionSource,
    }),
    secondaryCtas: [
      createAction({
        kind: "call-now",
        slot: "secondary",
        intensity: "emergency",
        reason: "Urgency escalation requires immediate call access.",
        source: decisionSource,
      }),
      createAction({
        kind: "open-whatsapp",
        slot: "secondary",
        intensity: "emergency",
        reason: "Urgency escalation requires a direct messaging fallback.",
        source: decisionSource,
      }),
    ],
    tertiaryCtas: [],
    fallbackCta: createFallbackAction(
      { ...pageContext, defaultFallbackRoute: "/urgencias" },
      "Emergency fallback must remain explicit when urgency dominates.",
    ),
    prohibitedCtaKinds: [
      "followup-request",
      "schedule-valuation",
      "orientation-request",
      "route-transition",
    ],
    decisionReason,
    decisionSource,
  };
}

export function resolveClinicalCtaDecision(
  input: ClinicalCtaDecisionInput,
): ClinicalCtaDecisionResult {
  const pageContext =
    input.pageContext ??
    (input.pathname
      ? getClinicalPageContextOrThrow(input.pathname)
      : null);

  if (!pageContext) {
    throw new Error("A pathname or pageContext is required to resolve CTA decisions.");
  }

  const requestedState = input.currentState ?? pageContext.predominantState;
  const urgencyOverride = resolveUrgencyOverride({
    currentState: requestedState,
    pageContext,
    activeSignals: input.activeUrgencySignals,
  });

  if (
    urgencyOverride.overrideMode === "page-already-urgent" ||
    urgencyOverride.shouldOverridePageBehavior
  ) {
    const urgencyDecision = buildUrgencyEscalationDecision(
      pageContext,
      requestedState,
      urgencyOverride.reason ??
        "Urgency override requires emergency actions to dominate.",
      "urgency-override",
    );

    return {
      ...urgencyDecision,
      urgencyOverride,
    };
  }

  const resolvedState = urgencyOverride.resolvedState;
  const resolvedIntensity = urgencyOverride.resolvedIntensity;
  const dominantCta = resolveBaseDominantAction(pageContext, resolvedState);
  const secondaryCtas = resolveSecondaryActions(pageContext, resolvedState);
  const tertiaryCtas = resolveTertiaryActions(pageContext, resolvedState);
  const fallbackCta = createFallbackAction(
    pageContext,
    "Fallback should always preserve a clinically safe next step.",
  );
  const prohibitedCtaKinds = resolveProhibitedKinds(resolvedState);
  const decisionReason =
    urgencyOverride.reason ??
    `CTA decision resolved for ${resolvedState} on ${pageContext.route}.`;

  return {
    pageContext,
    requestedState,
    resolvedState,
    resolvedIntensity,
    dominantCta,
    secondaryCtas,
    tertiaryCtas,
    fallbackCta,
    prohibitedCtaKinds,
    decisionReason,
    decisionSource: dominantCta.source,
    urgencyOverride,
  };
}
