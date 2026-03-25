import type { ClinicalPageRoute } from "@/lib/clinical-runtime/domain";
import type {
  PageClinicalUiModel,
} from "@/lib/clinical-runtime/ui-adapter";
import {
  selectClinicalUiConsumption,
} from "@/lib/clinical-runtime/ui-consumption/clinical-ui-consumption";
import type {
  ClinicalUiConsumptionModel,
  ClinicalUiConsumptionOptions,
} from "@/lib/clinical-runtime/ui-consumption/clinical-ui-consumption-types";

const pageConsumptionOptionsMap: Partial<
  Record<ClinicalPageRoute, ClinicalUiConsumptionOptions>
> = {
  "/urgencias": {
    primaryPreference: ["call-now", "emergency-route"],
    secondaryPreference: ["open-whatsapp"],
  },
  "/servicios": {
    primaryPreference: ["emergency-route"],
    secondaryPreference: ["orientation-request", "valuation-request"],
  },
  "/medicina-interna": {
    primaryPreference: [
      "specialized-valuation-request",
      "valuation-request",
    ],
    secondaryPreference: ["call-now", "followup-request"],
  },
  "/diagnostico": {
    primaryPreference: ["valuation-request", "orientation-request"],
    secondaryPreference: ["call-now", "route-transition"],
  },
  "/oncologia": {
    primaryPreference: [
      "specialized-valuation-request",
      "followup-request",
    ],
    secondaryPreference: ["call-now", "followup-request"],
  },
};

export function getClinicalUiConsumptionOptionsForPage(
  pathname: ClinicalPageRoute,
): ClinicalUiConsumptionOptions {
  return pageConsumptionOptionsMap[pathname] ?? {};
}

export function resolveClinicalUiConsumptionForModel({
  pathname,
  uiModel,
  options,
}: {
  pathname: ClinicalPageRoute;
  uiModel: PageClinicalUiModel;
  options?: ClinicalUiConsumptionOptions;
}): ClinicalUiConsumptionModel {
  return selectClinicalUiConsumption(
    uiModel,
    options ?? getClinicalUiConsumptionOptionsForPage(pathname),
  );
}
