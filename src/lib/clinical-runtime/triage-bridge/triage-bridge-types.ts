import type {
  Species,
  TriageCategory,
  TriageLevel,
  TriageResult,
} from "@/features/marketing/components/triage/types";
import type {
  ActiveUrgencySignal,
  ClinicalCtaIntensity,
  ClinicalPageRoute,
  ClinicalUxState,
} from "@/lib/clinical-runtime/domain";
import type { ClinicalCtaDecisionInput } from "@/lib/clinical-runtime/engine";

export const TRIAGE_NORMALIZED_SEVERITIES = [
  "critical-emergency",
  "urgent-medical",
  "recognized-complexity",
  "stable-followup",
] as const;

export type TriageNormalizedSeverity =
  (typeof TRIAGE_NORMALIZED_SEVERITIES)[number];

export const TRIAGE_COMPLEXITY_HINTS = [
  "internal-medicine",
  "oncology",
  "exotics",
] as const;

export type TriageComplexityHint = (typeof TRIAGE_COMPLEXITY_HINTS)[number];

export type TriageBridgeInput = {
  triageResult: TriageResult;
  species?: Species | null;
  category?: TriageCategory | null;
  complexityHint?: TriageComplexityHint | null;
};

export type TriageBridgeSource = "triage";

export type TriageBridgeOutput = {
  triageLevel: TriageLevel;
  normalizedSeverity: TriageNormalizedSeverity;
  resolvedClinicalState: ClinicalUxState;
  resolvedIntensity: ClinicalCtaIntensity;
  recommendedRoute: ClinicalPageRoute;
  fallbackRoute: ClinicalPageRoute;
  activeUrgencySignals: readonly ActiveUrgencySignal[];
  shouldActivateUrgencyOverride: boolean;
  preserveSafeFallback: boolean;
  bridgeReason: string;
  bridgeSource: TriageBridgeSource;
};

export type TriageBridgeEngineInput = Pick<
  ClinicalCtaDecisionInput,
  "currentState" | "activeUrgencySignals"
>;
