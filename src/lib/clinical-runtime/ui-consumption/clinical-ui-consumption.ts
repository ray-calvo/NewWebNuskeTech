import type { ClinicalCtaActionKind } from "@/lib/clinical-runtime/engine";
import type {
  ClinicalUiConsumptionModel,
  ClinicalUiConsumptionOptions,
  PresentedClinicalCta,
  PresentedClinicalTransition,
} from "@/lib/clinical-runtime/ui-consumption/clinical-ui-consumption-types";
import type {
  PageClinicalUiModel,
  VisibleCta,
} from "@/lib/clinical-runtime/ui-adapter";

const phoneHref = "tel:+524433246136";
const whatsappHref = "https://wa.me/524433369624";

function getRouteLabel(href: string | null): string {
  switch (href) {
    case "/urgencias":
      return "Ir a urgencias";
    case "/cirugia":
      return "Ir a cirugía";
    case "/diagnostico":
      return "Ir a diagnóstico";
    case "/endoscopia":
      return "Ir a endoscopia";
    case "/prevencion":
      return "Ir a prevención";
    case "/exoticos":
      return "Ir a exóticos";
    case "/oncologia":
      return "Ir a oncología";
    case "/medicina-interna":
      return "Ir a medicina interna";
    case "/servicios":
      return "Ver servicios";
    case "/triage":
      return "Abrir triage";
    default:
      return "Solicitar valoración";
  }
}

function presentVisibleCta(cta: VisibleCta): PresentedClinicalCta {
  switch (cta.actionKind) {
    case "call-now":
      return {
        href: phoneHref,
        label: "Llamar ahora",
        kind: cta.actionKind,
        priorityLevel: cta.priorityLevel,
        isExternal: false,
        reason: cta.reason,
        source: cta.slot,
      };
    case "open-whatsapp":
      return {
        href: whatsappHref,
        label: "WhatsApp",
        kind: cta.actionKind,
        priorityLevel: cta.priorityLevel,
        isExternal: true,
        reason: cta.reason,
        source: cta.slot,
      };
    case "orientation-request":
      return {
        href: cta.targetRoute ?? "/servicios",
        label: "Aclarar el caso",
        kind: cta.actionKind,
        priorityLevel: cta.priorityLevel,
        isExternal: false,
        reason: cta.reason,
        source: cta.slot,
      };
    case "followup-request":
      return {
        href: cta.targetRoute ?? "/contacto",
        label: "Dar seguimiento",
        kind: cta.actionKind,
        priorityLevel: cta.priorityLevel,
        isExternal: false,
        reason: cta.reason,
        source: cta.slot,
      };
    case "schedule-valuation":
      return {
        href: cta.targetRoute ?? "/contacto",
        label: "Agendar valoración",
        kind: cta.actionKind,
        priorityLevel: cta.priorityLevel,
        isExternal: false,
        reason: cta.reason,
        source: cta.slot,
      };
    case "specialized-valuation-request":
      return {
        href: cta.targetRoute ?? "/contacto",
        label: "Solicitar valoración especializada",
        kind: cta.actionKind,
        priorityLevel: cta.priorityLevel,
        isExternal: false,
        reason: cta.reason,
        source: cta.slot,
      };
    case "route-transition":
      return {
        href: cta.targetRoute ?? "/servicios",
        label: getRouteLabel(cta.targetRoute),
        kind: cta.actionKind,
        priorityLevel: cta.priorityLevel,
        isExternal: false,
        reason: cta.reason,
        source: cta.slot,
      };
    case "emergency-route":
      return {
        href: cta.targetRoute ?? "/urgencias",
        label: "Ir a urgencias",
        kind: cta.actionKind,
        priorityLevel: cta.priorityLevel,
        isExternal: false,
        reason: cta.reason,
        source: cta.slot,
      };
    case "valuation-request":
    default:
      return {
        href: cta.targetRoute ?? "/contacto",
        label: "Solicitar valoración",
        kind: cta.actionKind,
        priorityLevel: cta.priorityLevel,
        isExternal: false,
        reason: cta.reason,
        source: cta.slot,
      };
  }
}

function pickByPreference(
  candidates: readonly VisibleCta[],
  preference: readonly ClinicalCtaActionKind[] | undefined,
  excludedKinds: readonly ClinicalCtaActionKind[] = [],
): VisibleCta | null {
  const filteredCandidates = candidates.filter(
    (candidate) => !excludedKinds.includes(candidate.actionKind),
  );

  if (filteredCandidates.length === 0) {
    return null;
  }

  if (preference) {
    for (const preferredKind of preference) {
      const preferredCandidate = filteredCandidates.find(
        (candidate) => candidate.actionKind === preferredKind,
      );

      if (preferredCandidate) {
        return preferredCandidate;
      }
    }
  }

  return filteredCandidates[0] ?? null;
}

export function selectClinicalUiConsumption(
  uiModel: PageClinicalUiModel,
  options: ClinicalUiConsumptionOptions = {},
): ClinicalUiConsumptionModel {
  const primaryCandidates = [
    uiModel.dominantCta,
    ...uiModel.secondaryCtas,
    uiModel.fallbackCta,
  ].filter((cta) => cta.shouldRender);

  const primaryVisibleCta =
    pickByPreference(primaryCandidates, options.primaryPreference) ??
    uiModel.dominantCta;

  const secondaryCandidates = [
    ...uiModel.secondaryCtas,
    uiModel.fallbackCta,
  ].filter((cta) => cta.shouldRender);

  const secondaryVisibleCta = pickByPreference(
    secondaryCandidates,
    options.secondaryPreference,
    [primaryVisibleCta.actionKind],
  );

  const suggestedTransitions: PresentedClinicalTransition[] =
    uiModel.suggestedTransitions.map((transition) => ({
      ...transition,
      href: transition.targetRoute,
      label: getRouteLabel(transition.targetRoute),
    }));

  return {
    primaryCta: presentVisibleCta(primaryVisibleCta),
    secondaryCta: secondaryVisibleCta
      ? presentVisibleCta(secondaryVisibleCta)
      : null,
    fallbackCta: presentVisibleCta(uiModel.fallbackCta),
    visibleSignals: uiModel.visibleSignals,
    suggestedTransitions,
    visualPriority: uiModel.visualPriority,
    shouldSimplifyReading: uiModel.shouldSimplifyReading,
    shouldShowSafeFallback: uiModel.shouldShowSafeFallback,
  };
}
