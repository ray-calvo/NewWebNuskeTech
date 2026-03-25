import { getClinicalPageContextOrThrow } from "@/lib/clinical-runtime/domain";
import { resolveClinicalCtaDecision } from "@/lib/clinical-runtime/engine";
import type {
  ClinicalRuntimeServiceResult,
  ResolveClinicalUiModelForPageInput,
} from "@/lib/clinical-runtime/application/clinical-runtime-service-types";
import {
  createDecisionInputFromTriageBridge,
  resolveTriageBridge,
} from "@/lib/clinical-runtime/triage-bridge";
import { adaptClinicalRuntimeToUiModel } from "@/lib/clinical-runtime/ui-adapter";

export function resolveClinicalUiModelForPage({
  pathname,
  currentState,
  activeUrgencySignals,
  clinicalSession = null,
  triageInput = null,
}: ResolveClinicalUiModelForPageInput): ClinicalRuntimeServiceResult {
  const pageContext = getClinicalPageContextOrThrow(pathname);
  const triageBridge = triageInput ? resolveTriageBridge(triageInput) : null;
  const triageEngineInput = triageBridge
    ? createDecisionInputFromTriageBridge(triageBridge)
    : null;

  const ctaDecision = resolveClinicalCtaDecision({
    pageContext,
    currentState:
      triageEngineInput?.currentState ??
      currentState ??
      clinicalSession?.currentState,
    activeUrgencySignals:
      triageEngineInput?.activeUrgencySignals ??
      activeUrgencySignals ??
      clinicalSession?.activeUrgencySignals,
  });

  const uiOutput = adaptClinicalRuntimeToUiModel({
    pageContext,
    ctaDecision,
    triageBridge,
    urgencyOverride: ctaDecision.urgencyOverride,
    activeUrgencySignals:
      triageBridge?.activeUrgencySignals ??
      activeUrgencySignals ??
      clinicalSession?.activeUrgencySignals,
  });

  return {
    pageContext,
    ctaDecision,
    triageBridge,
    uiOutput,
    uiModel: uiOutput.uiModel,
  };
}
