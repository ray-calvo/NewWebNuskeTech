import type {
  ClinicalRuntimeServiceResult,
  ResolveClinicalUiModelForPageInput,
} from "@/lib/clinical-runtime/application/clinical-runtime-service-types";
import { resolveClinicalUiModelForPage } from "@/lib/clinical-runtime/application/clinical-runtime-service";
import type {
  ClinicalUiConsumptionModel,
  ClinicalUiConsumptionOptions,
} from "@/lib/clinical-runtime/ui-consumption";
import { resolveClinicalUiConsumptionForModel } from "@/lib/clinical-runtime/ui-consumption";

export type ClinicalRuntimeConsumptionResult = ClinicalRuntimeServiceResult & {
  consumption: ClinicalUiConsumptionModel;
};

export function resolveClinicalUiConsumptionForPage(
  input: ResolveClinicalUiModelForPageInput & {
    options?: ClinicalUiConsumptionOptions;
  },
): ClinicalRuntimeConsumptionResult {
  const runtimeResult = resolveClinicalUiModelForPage(input);
  const consumption = resolveClinicalUiConsumptionForModel({
    pathname: input.pathname,
    uiModel: runtimeResult.uiModel,
    options: input.options,
  });

  return {
    ...runtimeResult,
    consumption,
  };
}
