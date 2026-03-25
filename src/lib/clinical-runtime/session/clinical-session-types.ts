import type {
  ActiveUrgencySignal,
  ClinicalCtaIntensity,
  ClinicalPageRoute,
  ClinicalUxState,
} from "@/lib/clinical-runtime/domain";
import type { TriageNormalizedSeverity } from "@/lib/clinical-runtime/triage-bridge";

export const CLINICAL_SESSION_SOURCES = [
  "triage",
  "runtime-page",
  "global-cta",
] as const;

export type ClinicalSessionSource = (typeof CLINICAL_SESSION_SOURCES)[number];

export const CLINICAL_SESSION_STATUSES = [
  "empty",
  "active",
  "expired",
] as const;

export type ClinicalSessionStatus = (typeof CLINICAL_SESSION_STATUSES)[number];

export const DEFAULT_CLINICAL_SESSION_TTL_MS = 20 * 60 * 1000;

export type ClinicalSessionSnapshot = {
  source: ClinicalSessionSource;
  originRoute: ClinicalPageRoute;
  currentState: ClinicalUxState;
  resolvedIntensity: ClinicalCtaIntensity;
  recommendedRoute: ClinicalPageRoute;
  fallbackRoute: ClinicalPageRoute;
  activeUrgencySignals: readonly ActiveUrgencySignal[];
  preserveSafeFallback: boolean;
  triageSeverity: TriageNormalizedSeverity | null;
  reason: string;
  createdAt: number;
  expiresAt: number;
};

export type ClinicalSessionListener = (
  snapshot: ClinicalSessionSnapshot | null,
) => void;

export type ClinicalSessionReadResult = {
  status: ClinicalSessionStatus;
  snapshot: ClinicalSessionSnapshot | null;
};
