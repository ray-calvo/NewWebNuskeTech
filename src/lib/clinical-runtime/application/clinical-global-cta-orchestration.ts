import type {
  ClinicalRuntimeConsumptionResult,
} from "@/lib/clinical-runtime/application/clinical-runtime-consumption";
import { resolveClinicalUiConsumptionForPage } from "@/lib/clinical-runtime/application/clinical-runtime-consumption";
import type { ClinicalPageRoute } from "@/lib/clinical-runtime/domain";
import type { ClinicalSessionSnapshot } from "@/lib/clinical-runtime/session/clinical-session-types";

export type ResolveGlobalClinicalCtaForRouteInput = {
  pathname: ClinicalPageRoute;
  clinicalSession?: ClinicalSessionSnapshot | null;
};

export type GlobalClinicalCtaResolution = ClinicalRuntimeConsumptionResult & {
  orchestrationSource: "page-context" | "clinical-session";
};

export function resolveGlobalClinicalCtaForRoute({
  pathname,
  clinicalSession = null,
}: ResolveGlobalClinicalCtaForRouteInput): GlobalClinicalCtaResolution {
  const runtimeResult = resolveClinicalUiConsumptionForPage({
    pathname,
    clinicalSession,
  });

  return {
    ...runtimeResult,
    orchestrationSource: clinicalSession ? "clinical-session" : "page-context",
  };
}
