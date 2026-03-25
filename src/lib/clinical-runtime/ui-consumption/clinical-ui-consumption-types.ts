import type {
  ClinicalCtaActionKind,
  ClinicalCtaPriorityLevel,
} from "@/lib/clinical-runtime/engine";
import type {
  PageClinicalUiModel,
  SuggestedTransition,
  VisibleClinicalSignal,
  VisibleCta,
  VisualPriorityHint,
} from "@/lib/clinical-runtime/ui-adapter";

export type PresentedClinicalCta = {
  href: string;
  label: string;
  kind: ClinicalCtaActionKind;
  priorityLevel: ClinicalCtaPriorityLevel;
  isExternal: boolean;
  reason: string;
  source: VisibleCta["slot"];
};

export type PresentedClinicalSignal = VisibleClinicalSignal;

export type PresentedClinicalTransition = SuggestedTransition & {
  href: string;
  label: string;
};

export type ClinicalUiConsumptionOptions = {
  primaryPreference?: readonly ClinicalCtaActionKind[];
  secondaryPreference?: readonly ClinicalCtaActionKind[];
};

export type ClinicalUiConsumptionModel = {
  primaryCta: PresentedClinicalCta;
  secondaryCta: PresentedClinicalCta | null;
  fallbackCta: PresentedClinicalCta;
  visibleSignals: readonly PresentedClinicalSignal[];
  suggestedTransitions: readonly PresentedClinicalTransition[];
  visualPriority: VisualPriorityHint;
  shouldSimplifyReading: PageClinicalUiModel["shouldSimplifyReading"];
  shouldShowSafeFallback: PageClinicalUiModel["shouldShowSafeFallback"];
};
