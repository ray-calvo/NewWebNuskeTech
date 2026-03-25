import type {
  ActiveUrgencySignal,
  ClinicalPageContext,
  ClinicalPageRoute,
  ClinicalUxState,
  UrgencyOverrideResult,
} from "@/lib/clinical-runtime/domain";
import type {
  ClinicalCtaActionKind,
  ClinicalCtaDecisionResult,
  ClinicalCtaPriorityLevel,
  ClinicalCtaSlot,
} from "@/lib/clinical-runtime/engine";
import type {
  TriageBridgeOutput,
  TriageNormalizedSeverity,
} from "@/lib/clinical-runtime/triage-bridge";

export const VISUAL_PRIORITY_HINTS = [
  "maximum",
  "high",
  "medium",
  "calm",
] as const;

export type VisualPriorityHint = (typeof VISUAL_PRIORITY_HINTS)[number];

export const CLINICAL_SIGNAL_KINDS = [
  "urgent-risk",
  "clinical-uncertainty",
  "recognized-complexity",
  "follow-up-stability",
  "triage-guided",
] as const;

export type ClinicalSignalKind = (typeof CLINICAL_SIGNAL_KINDS)[number];

export type VisibleCta = {
  actionKind: ClinicalCtaActionKind;
  slot: ClinicalCtaSlot;
  priorityLevel: ClinicalCtaPriorityLevel;
  targetRoute: ClinicalPageRoute | null;
  emphasis: "strong" | "supporting" | "quiet";
  shouldRender: boolean;
  shouldPersist: boolean;
  shouldDegradeWhenUrgent: boolean;
  semanticLabelKey: string;
  reason: string;
};

export type VisibleClinicalSignal = {
  kind: ClinicalSignalKind;
  severity: "high" | "medium" | "low";
  source: "runtime" | "triage";
  reason: string;
};

export type SuggestedTransition = {
  targetRoute: ClinicalPageRoute;
  semanticLabelKey: string;
  source: "page-context" | "triage";
  reason: string;
};

export type PageClinicalUiModel = {
  route: ClinicalPageRoute;
  routeKey: ClinicalPageContext["routeKey"];
  resolvedState: ClinicalUxState;
  visualPriority: VisualPriorityHint;
  dominantCta: VisibleCta;
  secondaryCtas: readonly VisibleCta[];
  fallbackCta: VisibleCta;
  hiddenCtaKinds: readonly ClinicalCtaActionKind[];
  visibleSignals: readonly VisibleClinicalSignal[];
  suggestedTransitions: readonly SuggestedTransition[];
  showPersistentPrimaryCta: boolean;
  showRiskSignal: boolean;
  shouldSimplifyReading: boolean;
  shouldDeEmphasizeSoftActions: boolean;
  shouldShowSafeFallback: boolean;
};

export type ClinicalUiAdapterInput = {
  pageContext: ClinicalPageContext;
  ctaDecision: ClinicalCtaDecisionResult;
  triageBridge?: TriageBridgeOutput | null;
  urgencyOverride?: UrgencyOverrideResult;
  activeUrgencySignals?: readonly ActiveUrgencySignal[];
};

export type ClinicalUiAdapterOutput = {
  uiModel: PageClinicalUiModel;
  adapterReason: string;
  adapterSource: "cta-engine" | "triage-bridge" | "urgency-override";
  triageSeverity: TriageNormalizedSeverity | null;
};

export function getSemanticLabelKeyForActionKind(
  kind: ClinicalCtaActionKind,
): string {
  switch (kind) {
    case "emergency-route":
      return "cta.emergencyRoute";
    case "call-now":
      return "cta.callNow";
    case "open-whatsapp":
      return "cta.openWhatsApp";
    case "specialized-valuation-request":
      return "cta.requestSpecializedValuation";
    case "followup-request":
      return "cta.requestFollowUp";
    case "schedule-valuation":
      return "cta.scheduleValuation";
    case "orientation-request":
      return "cta.requestOrientation";
    case "route-transition":
      return "cta.navigateClinicalRoute";
    case "valuation-request":
    default:
      return "cta.requestValuation";
  }
}

export function getSemanticLabelKeyForTransition(
  route: ClinicalPageRoute,
): string {
  switch (route) {
    case "/urgencias":
      return "transition.toUrgencias";
    case "/cirugia":
      return "transition.toCirugia";
    case "/diagnostico":
      return "transition.toDiagnostico";
    case "/endoscopia":
      return "transition.toEndoscopia";
    case "/prevencion":
      return "transition.toPrevencion";
    case "/exoticos":
      return "transition.toExoticos";
    case "/oncologia":
      return "transition.toOncologia";
    case "/medicina-interna":
      return "transition.toMedicinaInterna";
    case "/servicios":
      return "transition.toServicios";
    case "/triage":
      return "transition.toTriage";
    case "/":
    default:
      return "transition.toHome";
  }
}
