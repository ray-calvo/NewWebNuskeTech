import type { ClinicalPageRoute } from "@/lib/clinical-runtime/domain";

import type { GlobalClinicalCtaResolution } from "@/lib/clinical-runtime/application/clinical-global-cta-orchestration";
import type { ClinicalSessionSnapshot } from "@/lib/clinical-runtime/session/clinical-session-types";

export const GLOBAL_CLINICAL_BAR_STATES = [
  "urgent",
  "uncertainty",
  "consultative",
  "neutral",
  "hidden",
] as const;

export type GlobalClinicalBarState = (typeof GLOBAL_CLINICAL_BAR_STATES)[number];

export type GlobalClinicalBarAction = {
  href: string;
  label: string;
  isExternal: boolean;
};

export type GlobalClinicalBarModel = {
  state: GlobalClinicalBarState;
  shouldRender: boolean;
  eyebrow: string;
  message: string;
  primaryAction: GlobalClinicalBarAction | null;
  secondaryAction: GlobalClinicalBarAction | null;
  visualPriority: "high" | "medium" | "calm";
  iconKind: "critical" | "guidance" | "clinical";
};

export type ResolveGlobalClinicalBarModelInput = {
  pathname: ClinicalPageRoute;
  orchestration: Pick<
    GlobalClinicalCtaResolution,
    "uiModel" | "uiOutput" | "orchestrationSource"
  >;
  clinicalSession?: ClinicalSessionSnapshot | null;
};

const HIDDEN_ROUTES: readonly ClinicalPageRoute[] = ["/urgencias", "/triage"];
const UNCERTAINTY_ROUTES: readonly ClinicalPageRoute[] = [
  "/diagnostico",
  "/medicina-interna",
];
const CONSULTATIVE_ROUTES: readonly ClinicalPageRoute[] = [
  "/oncologia",
  "/cirugia",
  "/endoscopia",
];
const CONTACT_ROUTE = "/contacto";
const TRIAGE_ROUTE = "/triage?entrypoint=global-clinical-cta-bar";
const EMERGENCY_ROUTE = "/urgencias";
const HOSPITAL_PHONE_ROUTE = "tel:+524433246136";
const DIAGNOSTIC_ROUTE = "/diagnostico";

function buildAction(
  href: string,
  label: string,
  isExternal = false,
): GlobalClinicalBarAction {
  return {
    href,
    label,
    isExternal,
  };
}

function hasHighUrgencySignal(input: ResolveGlobalClinicalBarModelInput): boolean {
  const sessionUrgencySignals = input.clinicalSession?.activeUrgencySignals ?? [];
  const runtimeUrgencySignals = input.orchestration.uiModel.visibleSignals;

  return (
    sessionUrgencySignals.some(
      (signal) => signal.active && signal.severity === "high",
    ) ||
    runtimeUrgencySignals.some(
      (signal) => signal.kind === "urgent-risk" && signal.severity === "high",
    )
  );
}

function resolveGlobalClinicalBarState(
  input: ResolveGlobalClinicalBarModelInput,
): GlobalClinicalBarState {
  if (HIDDEN_ROUTES.includes(input.pathname)) {
    return "hidden";
  }

  const resolvedState = input.orchestration.uiModel.resolvedState;
  const triageSeverity =
    input.clinicalSession?.triageSeverity ?? input.orchestration.uiOutput.triageSeverity;
  const hasClinicalSession =
    input.orchestration.orchestrationSource === "clinical-session";

  if (
    resolvedState === "urgency-perceived" ||
    triageSeverity === "critical-emergency" ||
    input.orchestration.uiModel.visualPriority === "maximum" ||
    hasHighUrgencySignal(input)
  ) {
    return "urgent";
  }

  if (
    triageSeverity === "urgent-medical" ||
    UNCERTAINTY_ROUTES.includes(input.pathname) ||
    (hasClinicalSession && resolvedState === "clinical-uncertainty")
  ) {
    return "uncertainty";
  }

  if (
    CONSULTATIVE_ROUTES.includes(input.pathname) ||
    resolvedState === "recognized-complexity"
  ) {
    return "consultative";
  }

  return "neutral";
}

export function resolveGlobalClinicalBarModel(
  input: ResolveGlobalClinicalBarModelInput,
): GlobalClinicalBarModel {
  const state = resolveGlobalClinicalBarState(input);

  switch (state) {
    case "urgent":
      return {
        state,
        shouldRender: true,
        eyebrow: "Atencion clinica prioritaria",
        message: "Tu mascota puede necesitar atencion inmediata",
        primaryAction: buildAction(EMERGENCY_ROUTE, "Ir a urgencias ahora"),
        secondaryAction: buildAction(
          HOSPITAL_PHONE_ROUTE,
          "Llamar al hospital",
          true,
        ),
        visualPriority: "high",
        iconKind: "critical",
      };
    case "uncertainty":
      return {
        state,
        shouldRender: true,
        eyebrow: "Orientacion clinica activa",
        message: "Podemos ayudarte a evaluar el estado de tu mascota",
        primaryAction: buildAction(TRIAGE_ROUTE, "Iniciar chequeo clinico"),
        secondaryAction: buildAction(
          CONTACT_ROUTE,
          "Solicitar valoracion medica",
        ),
        visualPriority: "medium",
        iconKind: "guidance",
      };
    case "consultative":
      return {
        state,
        shouldRender: true,
        eyebrow: "Valoracion hospitalaria",
        message: "Solicita una valoracion medica hospitalaria",
        primaryAction: buildAction(
          CONTACT_ROUTE,
          "Solicitar valoracion medica",
        ),
        secondaryAction: buildAction(DIAGNOSTIC_ROUTE, "Ver diagnostico"),
        visualPriority: "medium",
        iconKind: "clinical",
      };
    case "neutral":
      return {
        state,
        shouldRender: true,
        eyebrow: "Orientacion clinica disponible",
        message: "Orientacion clinica disponible",
        primaryAction: buildAction(
          CONTACT_ROUTE,
          "Solicitar valoracion medica",
        ),
        secondaryAction: buildAction(EMERGENCY_ROUTE, "Ir a urgencias"),
        visualPriority: "calm",
        iconKind: "clinical",
      };
    case "hidden":
    default:
      return {
        state: "hidden",
        shouldRender: false,
        eyebrow: "",
        message: "",
        primaryAction: null,
        secondaryAction: null,
        visualPriority: "calm",
        iconKind: "clinical",
      };
  }
}

