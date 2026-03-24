import type { Species, TriageCategory } from "@/features/marketing/components/triage/types";
import type {
  ActiveUrgencySignal,
  ClinicalPageRoute,
} from "@/lib/clinical-runtime/domain";
import type { ClinicalCtaDecisionInput } from "@/lib/clinical-runtime/engine";
import type {
  TriageBridgeEngineInput,
  TriageBridgeInput,
  TriageBridgeOutput,
  TriageComplexityHint,
} from "@/lib/clinical-runtime/triage-bridge/triage-bridge-types";

function resolveComplexityRoute(
  species: Species | null,
  complexityHint: TriageComplexityHint | null,
): ClinicalPageRoute | null {
  if (complexityHint === "oncology") {
    return "/oncologia";
  }

  if (complexityHint === "exotics" || species === "exotic") {
    return "/exoticos";
  }

  if (complexityHint === "internal-medicine") {
    return "/medicina-interna";
  }

  return null;
}

function resolveUrgentRoute(
  category: TriageCategory | null,
): ClinicalPageRoute {
  switch (category) {
    case "trauma":
      return "/cirugia";
    default:
      return "/diagnostico";
  }
}

function resolveStableRoute(
  species: Species | null,
  category: TriageCategory | null,
): ClinicalPageRoute {
  if (species === "exotic") {
    return "/exoticos";
  }

  if (category === "general") {
    return "/prevencion";
  }

  return "/diagnostico";
}

function buildEmergencyUrgencySignals(
  reason: string,
): readonly ActiveUrgencySignal[] {
  return [
    {
      active: true,
      source: "triage",
      severity: "high",
      reason,
    },
  ];
}

export function resolveTriageBridge({
  triageResult,
  species = null,
  category = null,
  complexityHint = null,
}: TriageBridgeInput): TriageBridgeOutput {
  const complexityRoute = resolveComplexityRoute(species, complexityHint);

  if (triageResult.level === "emergency") {
    const reason = triageResult.emergencyOverrideTriggered
      ? "Triage detected a critical sign and must escalate to emergency."
      : "Triage reached the emergency threshold and must escalate to the emergency route.";

    return {
      triageLevel: triageResult.level,
      normalizedSeverity: "critical-emergency",
      resolvedClinicalState: "urgency-perceived",
      resolvedIntensity: "emergency",
      recommendedRoute: "/urgencias",
      fallbackRoute: "/urgencias",
      activeUrgencySignals: buildEmergencyUrgencySignals(reason),
      shouldActivateUrgencyOverride: true,
      preserveSafeFallback: true,
      bridgeReason: reason,
      bridgeSource: "triage",
    };
  }

  if (complexityRoute) {
    return {
      triageLevel: triageResult.level,
      normalizedSeverity: "recognized-complexity",
      resolvedClinicalState: "recognized-complexity",
      resolvedIntensity: "medical-decision",
      recommendedRoute: complexityRoute,
      fallbackRoute: "/diagnostico",
      activeUrgencySignals: [],
      shouldActivateUrgencyOverride: false,
      preserveSafeFallback: true,
      bridgeReason:
        "Triage indicates a complex or species-specific route that should be evaluated in a complementary clinical pathway.",
      bridgeSource: "triage",
    };
  }

  if (triageResult.level === "urgent") {
    return {
      triageLevel: triageResult.level,
      normalizedSeverity: "urgent-medical",
      resolvedClinicalState: "clinical-uncertainty",
      resolvedIntensity: "medical-decision",
      recommendedRoute: resolveUrgentRoute(category),
      fallbackRoute: "/urgencias",
      activeUrgencySignals: [],
      shouldActivateUrgencyOverride: false,
      preserveSafeFallback: true,
      bridgeReason:
        "Triage indicates a same-day or near-term medical decision without forcing a full emergency override.",
      bridgeSource: "triage",
    };
  }

  return {
    triageLevel: triageResult.level,
    normalizedSeverity: "stable-followup",
    resolvedClinicalState: "stability-followup",
    resolvedIntensity: "clinical-follow-up",
    recommendedRoute: resolveStableRoute(species, category),
    fallbackRoute: "/diagnostico",
    activeUrgencySignals: [],
    shouldActivateUrgencyOverride: false,
    preserveSafeFallback: true,
    bridgeReason:
      "Triage indicates a stable or lower-acuity scenario that can continue through follow-up or non-urgent valuation.",
    bridgeSource: "triage",
  };
}

export function createDecisionInputFromTriageBridge(
  bridgeOutput: TriageBridgeOutput,
): TriageBridgeEngineInput {
  return {
    currentState: bridgeOutput.resolvedClinicalState,
    activeUrgencySignals: bridgeOutput.activeUrgencySignals,
  };
}

export function createClinicalDecisionInputFromTriageBridge(
  bridgeOutput: TriageBridgeOutput,
  pathname: ClinicalPageRoute,
): ClinicalCtaDecisionInput {
  return {
    pathname,
    currentState: bridgeOutput.resolvedClinicalState,
    activeUrgencySignals: bridgeOutput.activeUrgencySignals,
  };
}
