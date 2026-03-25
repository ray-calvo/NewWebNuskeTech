import type {
  ActiveUrgencySignal,
  ClinicalPageContext,
  ClinicalPageRoute,
  ClinicalUxState,
} from "@/lib/clinical-runtime/domain";
import type { ClinicalCtaDecisionResult } from "@/lib/clinical-runtime/engine";
import type { TriageBridgeInput, TriageBridgeOutput } from "@/lib/clinical-runtime/triage-bridge";
import type { ClinicalUiAdapterOutput, PageClinicalUiModel } from "@/lib/clinical-runtime/ui-adapter";

export type ResolveClinicalUiModelForPageInput = {
  pathname: ClinicalPageRoute;
  currentState?: ClinicalUxState;
  activeUrgencySignals?: readonly ActiveUrgencySignal[];
  triageInput?: TriageBridgeInput | null;
};

export type ClinicalRuntimeServiceResult = {
  pageContext: ClinicalPageContext;
  ctaDecision: ClinicalCtaDecisionResult;
  triageBridge: TriageBridgeOutput | null;
  uiOutput: ClinicalUiAdapterOutput;
  uiModel: PageClinicalUiModel;
};
