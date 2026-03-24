import type {
  ActiveUrgencySignal,
  ClinicalPageContext,
  ClinicalUxState,
  UrgencyOverrideResult,
} from "@/lib/clinical-runtime/domain/clinical-types";
import { getCtaIntensityForClinicalState } from "@/lib/clinical-runtime/domain/clinical-types";

type ResolveUrgencyOverrideInput = {
  currentState: ClinicalUxState;
  pageContext: ClinicalPageContext;
  activeSignals?: readonly ActiveUrgencySignal[];
};

function getActiveUrgencySignals(
  signals: readonly ActiveUrgencySignal[],
): readonly ActiveUrgencySignal[] {
  return signals.filter((signal) => signal.active);
}

function getDominantUrgencySignal(
  signals: readonly ActiveUrgencySignal[],
): ActiveUrgencySignal | null {
  if (signals.length === 0) {
    return null;
  }

  const highSeveritySignal = signals.find((signal) => signal.severity === "high");

  return highSeveritySignal ?? signals[0] ?? null;
}

export function resolveUrgencyOverride({
  currentState,
  pageContext,
  activeSignals = [],
}: ResolveUrgencyOverrideInput): UrgencyOverrideResult {
  const activeUrgencySignals = getActiveUrgencySignals(activeSignals);
  const dominantSignal = getDominantUrgencySignal(activeUrgencySignals);
  const hasActiveUrgencySignal = activeUrgencySignals.length > 0;
  const fallbackRoute =
    pageContext.defaultFallbackRoute === "/urgencias"
      ? pageContext.defaultFallbackRoute
      : "/urgencias";

  if (!hasActiveUrgencySignal || !pageContext.canBeOverriddenByUrgency) {
    return {
      hasActiveUrgencySignal,
      shouldOverridePageBehavior: false,
      overrideMode: "none",
      resolvedState: currentState,
      resolvedIntensity: getCtaIntensityForClinicalState(currentState),
      recommendedRoute: pageContext.route,
      fallbackRoute,
      preserveSafeFallback: pageContext.route !== "/urgencias",
      reason: null,
      source: null,
    };
  }

  if (pageContext.route === "/urgencias") {
    return {
      hasActiveUrgencySignal,
      shouldOverridePageBehavior: false,
      overrideMode: "page-already-urgent",
      resolvedState: "urgency-perceived",
      resolvedIntensity: "emergency",
      recommendedRoute: "/urgencias",
      fallbackRoute: "/urgencias",
      preserveSafeFallback: false,
      reason: dominantSignal?.reason ?? "Urgency remains active on the emergency route.",
      source: dominantSignal?.source ?? null,
    };
  }

  return {
    hasActiveUrgencySignal: true,
    shouldOverridePageBehavior: true,
    overrideMode: "escalate-to-urgencias",
    resolvedState: "urgency-perceived",
    resolvedIntensity: "emergency",
    recommendedRoute: "/urgencias",
    fallbackRoute: "/urgencias",
    preserveSafeFallback: true,
    reason:
      dominantSignal?.reason ??
      "An active urgency signal requires escalation to the emergency route.",
    source: dominantSignal?.source ?? null,
  };
}
