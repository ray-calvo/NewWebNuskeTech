import type {
  ActiveUrgencySignal,
  ClinicalCtaIntensity,
  ClinicalPageContext,
  ClinicalPageRoute,
  ClinicalUxState,
  UrgencyOverrideResult,
} from "@/lib/clinical-runtime/domain";

export const CLINICAL_CTA_ACTION_KINDS = [
  "emergency-route",
  "call-now",
  "open-whatsapp",
  "valuation-request",
  "specialized-valuation-request",
  "followup-request",
  "schedule-valuation",
  "orientation-request",
  "route-transition",
] as const;

export type ClinicalCtaActionKind = (typeof CLINICAL_CTA_ACTION_KINDS)[number];

export const CLINICAL_CTA_PRIORITY_LEVELS = [
  "priority-4",
  "priority-3",
  "priority-2",
  "priority-1",
] as const;

export type ClinicalCtaPriorityLevel =
  (typeof CLINICAL_CTA_PRIORITY_LEVELS)[number];

export const CLINICAL_CTA_SLOTS = [
  "dominant",
  "secondary",
  "tertiary",
  "fallback",
] as const;

export type ClinicalCtaSlot = (typeof CLINICAL_CTA_SLOTS)[number];

export const CLINICAL_CTA_DECISION_SOURCES = [
  "state-default",
  "page-context",
  "urgency-override",
  "safe-fallback",
] as const;

export type ClinicalCtaDecisionSource =
  (typeof CLINICAL_CTA_DECISION_SOURCES)[number];

export type ClinicalCtaAction = {
  kind: ClinicalCtaActionKind;
  slot: ClinicalCtaSlot;
  priorityLevel: ClinicalCtaPriorityLevel;
  targetRoute: ClinicalPageRoute | null;
  reason: string;
  source: ClinicalCtaDecisionSource;
};

export type ClinicalCtaDecisionInput = {
  pathname?: string;
  pageContext?: ClinicalPageContext;
  currentState?: ClinicalUxState;
  activeUrgencySignals?: readonly ActiveUrgencySignal[];
};

export type ClinicalCtaDecisionResult = {
  pageContext: ClinicalPageContext;
  requestedState: ClinicalUxState;
  resolvedState: ClinicalUxState;
  resolvedIntensity: ClinicalCtaIntensity;
  dominantCta: ClinicalCtaAction;
  secondaryCtas: readonly ClinicalCtaAction[];
  tertiaryCtas: readonly ClinicalCtaAction[];
  fallbackCta: ClinicalCtaAction;
  prohibitedCtaKinds: readonly ClinicalCtaActionKind[];
  decisionReason: string;
  decisionSource: ClinicalCtaDecisionSource;
  urgencyOverride: UrgencyOverrideResult;
};
