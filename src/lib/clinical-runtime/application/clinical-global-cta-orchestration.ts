import type { ClinicalRuntimeServiceResult } from "@/lib/clinical-runtime/application/clinical-runtime-service-types";
import { resolveClinicalUiModelForPage } from "@/lib/clinical-runtime/application/clinical-runtime-service";
import type { ClinicalPageRoute } from "@/lib/clinical-runtime/domain";
import type { ClinicalSessionSnapshot } from "@/lib/clinical-runtime/session/clinical-session-types";
import { resolveClinicalUiConsumptionForModel } from "@/lib/clinical-runtime/ui-consumption";

export type ResolveGlobalClinicalCtaForRouteInput = {
  pathname: ClinicalPageRoute;
  clinicalSession?: ClinicalSessionSnapshot | null;
};

export type GlobalClinicalCtaResolution = ClinicalRuntimeServiceResult & {
  consumption: ReturnType<typeof resolveClinicalUiConsumptionForModel>;
  orchestrationSource: "page-context" | "clinical-session";
};

function getGlobalConsumptionOptions(
  hasClinicalSession: boolean,
  pathname: ClinicalPageRoute,
) {
  if (hasClinicalSession) {
    return {
      secondaryPreference: ["call-now", "route-transition", "open-whatsapp"] as const,
    };
  }

  if (pathname === "/servicios") {
    return {
      primaryPreference: [
        "orientation-request",
        "valuation-request",
        "specialized-valuation-request",
        "route-transition",
      ] as const,
      secondaryPreference: ["call-now", "emergency-route"] as const,
    };
  }

  return {
    primaryPreference: [
      "specialized-valuation-request",
      "valuation-request",
      "followup-request",
      "schedule-valuation",
      "orientation-request",
      "route-transition",
      "call-now",
      "emergency-route",
    ] as const,
    secondaryPreference: ["call-now", "route-transition", "emergency-route"] as const,
  };
}

export function resolveGlobalClinicalCtaForRoute({
  pathname,
  clinicalSession = null,
}: ResolveGlobalClinicalCtaForRouteInput): GlobalClinicalCtaResolution {
  const runtimeResult = resolveClinicalUiModelForPage({
    pathname,
    clinicalSession,
  });
  const consumption = resolveClinicalUiConsumptionForModel({
    pathname,
    uiModel: runtimeResult.uiModel,
    options: getGlobalConsumptionOptions(Boolean(clinicalSession), pathname),
  });

  return {
    ...runtimeResult,
    consumption,
    orchestrationSource: clinicalSession ? "clinical-session" : "page-context",
  };
}
