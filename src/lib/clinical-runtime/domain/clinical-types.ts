export const CLINICAL_UX_STATES = [
  "urgency-perceived",
  "clinical-uncertainty",
  "recognized-complexity",
  "stability-followup",
] as const;

export type ClinicalUxState = (typeof CLINICAL_UX_STATES)[number];

export const CLINICAL_CTA_INTENSITY_LEVELS = [
  "emergency",
  "medical-decision",
  "clinical-follow-up",
  "safe-orientation",
] as const;

export type ClinicalCtaIntensity = (typeof CLINICAL_CTA_INTENSITY_LEVELS)[number];

export const CLINICAL_ROUTE_TYPES = [
  "front-door",
  "clinical-hub",
  "core-parent",
  "continuity-parent",
  "complementary-parent",
  "triage-entry",
] as const;

export type ClinicalRouteType = (typeof CLINICAL_ROUTE_TYPES)[number];

export const CLINICAL_LAYERS = [
  "entrypoint",
  "hub",
  "core",
  "continuity",
  "complementary",
] as const;

export type ClinicalLayer = (typeof CLINICAL_LAYERS)[number];

export const CLINICAL_PAGE_ROUTES = [
  "/",
  "/servicios",
  "/urgencias",
  "/cirugia",
  "/diagnostico",
  "/endoscopia",
  "/prevencion",
  "/exoticos",
  "/oncologia",
  "/medicina-interna",
  "/triage",
] as const;

export type ClinicalPageRoute = (typeof CLINICAL_PAGE_ROUTES)[number];

export const CLINICAL_ROUTE_KEYS = [
  "home",
  "services",
  "urgencias",
  "cirugia",
  "diagnostico",
  "endoscopia",
  "prevencion",
  "exoticos",
  "oncologia",
  "medicinaInterna",
  "triage",
] as const;

export type ClinicalRouteKey = (typeof CLINICAL_ROUTE_KEYS)[number];

export type ClinicalPageContext = {
  route: ClinicalPageRoute;
  routeKey: ClinicalRouteKey;
  pageType: ClinicalRouteType;
  clinicalLayer: ClinicalLayer;
  predominantState: ClinicalUxState;
  canBeOverriddenByUrgency: boolean;
  defaultFallbackRoute: ClinicalPageRoute;
  primaryTransitions: readonly ClinicalPageRoute[];
};

export type ClinicalTransitionRule = {
  from: ClinicalPageRoute;
  to: ClinicalPageRoute;
  allowedStates: readonly ClinicalUxState[];
  reason: string;
};

export const URGENCY_SIGNAL_SOURCES = [
  "page-context",
  "triage",
  "clinical-input",
  "transition",
] as const;

export type UrgencySignalSource = (typeof URGENCY_SIGNAL_SOURCES)[number];

export const URGENCY_SIGNAL_SEVERITIES = ["possible", "high"] as const;

export type UrgencySignalSeverity = (typeof URGENCY_SIGNAL_SEVERITIES)[number];

export type ActiveUrgencySignal = {
  active: boolean;
  source: UrgencySignalSource;
  severity: UrgencySignalSeverity;
  reason: string;
};

export const URGENCY_OVERRIDE_MODES = [
  "none",
  "page-already-urgent",
  "escalate-to-urgencias",
] as const;

export type UrgencyOverrideMode = (typeof URGENCY_OVERRIDE_MODES)[number];

export type UrgencyOverrideResult = {
  hasActiveUrgencySignal: boolean;
  shouldOverridePageBehavior: boolean;
  overrideMode: UrgencyOverrideMode;
  resolvedState: ClinicalUxState;
  resolvedIntensity: ClinicalCtaIntensity;
  recommendedRoute: ClinicalPageRoute;
  fallbackRoute: ClinicalPageRoute;
  preserveSafeFallback: boolean;
  reason: string | null;
  source: UrgencySignalSource | null;
};

export function getCtaIntensityForClinicalState(
  state: ClinicalUxState,
): ClinicalCtaIntensity {
  switch (state) {
    case "urgency-perceived":
      return "emergency";
    case "stability-followup":
      return "clinical-follow-up";
    case "clinical-uncertainty":
    case "recognized-complexity":
    default:
      return "medical-decision";
  }
}
