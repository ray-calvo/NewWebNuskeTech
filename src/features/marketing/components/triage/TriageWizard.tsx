"use client";

import { useEffect, useRef, useState } from "react";

import { triageSymptoms } from "@/features/marketing/components/triage/triage-data";
import { CategoryStep } from "@/features/marketing/components/triage/CategoryStep";
import { ModifiersStep } from "@/features/marketing/components/triage/ModifiersStep";
import { scoreTriage } from "@/features/marketing/components/triage/score-triage";
import { SpeciesStep } from "@/features/marketing/components/triage/SpeciesStep";
import { SymptomsStep } from "@/features/marketing/components/triage/SymptomsStep";
import { trackTriageEvent } from "@/features/marketing/components/triage/track-triage";
import { TriageIntro } from "@/features/marketing/components/triage/TriageIntro";
import { TriageResultCard } from "@/features/marketing/components/triage/TriageResultCard";
import type {
  Species,
  TriageCategory,
  TriageResult,
} from "@/features/marketing/components/triage/types";
import { resolveClinicalUiModelForPage } from "@/lib/clinical-runtime/application";

type WizardStep =
  | "intro"
  | "species"
  | "category"
  | "symptoms"
  | "modifiers"
  | "result";

const stepOrder: WizardStep[] = [
  "intro",
  "species",
  "category",
  "symptoms",
  "modifiers",
  "result",
];

function getStepIndex(step: WizardStep) {
  return stepOrder.indexOf(step);
}

function readEntrypointSource() {
  if (typeof window === "undefined") {
    return null;
  }

  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get("entrypoint");
}

export function TriageWizard() {
  const [step, setStep] = useState<WizardStep>("intro");
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<TriageCategory | null>(
    null,
  );
  const [selectedSymptomIds, setSelectedSymptomIds] = useState<string[]>([]);
  const [selectedModifierIds, setSelectedModifierIds] = useState<string[]>([]);
  const [result, setResult] = useState<TriageResult | null>(null);
  const hasTrackedEntrypoint = useRef(false);
  const hasTrackedUnloadAbandonment = useRef(false);
  const lastTrackedStepKey = useRef<string | null>(null);
  const entrypointSource = readEntrypointSource();
  const currentResultLevel = result?.level ?? null;
  const currentTotalScore = result?.totalScore ?? null;

  const availableSymptoms =
    selectedSpecies && selectedCategory
      ? triageSymptoms.filter(
          (symptom) =>
            symptom.species.includes(selectedSpecies) &&
            symptom.categories.includes(selectedCategory),
        )
      : [];

  useEffect(() => {
    if (entrypointSource && !hasTrackedEntrypoint.current) {
      trackTriageEvent("triage_entrypoint_detected", {
        entrypoint_source: entrypointSource,
        step_name: "intro",
        step_index: getStepIndex("intro"),
      });
      hasTrackedEntrypoint.current = true;
    }
  }, [entrypointSource]);

  useEffect(() => {
    hasTrackedUnloadAbandonment.current = false;
    const stepKey = `${entrypointSource ?? "direct"}:${step}`;

    if (lastTrackedStepKey.current === stepKey) {
      return;
    }

    lastTrackedStepKey.current = stepKey;

    trackTriageEvent("triage_step_viewed", {
      entrypoint_source: entrypointSource,
      step_name: step,
      step_index: getStepIndex(step),
      species: selectedSpecies,
      category: selectedCategory,
      result_level: currentResultLevel,
      total_score: currentTotalScore,
      selected_symptom_count: selectedSymptomIds.length,
      selected_modifier_count: selectedModifierIds.length,
    });
  }, [
    step,
    entrypointSource,
    selectedSpecies,
    selectedCategory,
    currentResultLevel,
    currentTotalScore,
    selectedSymptomIds.length,
    selectedModifierIds.length,
  ]);

  useEffect(() => {
    function handlePageHide() {
      if (hasTrackedUnloadAbandonment.current) {
        return;
      }

      if (step === "species" || step === "category" || step === "symptoms" || step === "modifiers") {
        trackTriageEvent("triage_step_abandoned", {
          entrypoint_source: entrypointSource,
          step_name: step,
          step_index: getStepIndex(step),
          species: selectedSpecies,
          category: selectedCategory,
          result_level: currentResultLevel,
          total_score: currentTotalScore,
          selected_symptom_count: selectedSymptomIds.length,
          selected_modifier_count: selectedModifierIds.length,
        });
        hasTrackedUnloadAbandonment.current = true;
      }
    }

    window.addEventListener("pagehide", handlePageHide);

    return () => {
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [
    step,
    entrypointSource,
    selectedSpecies,
    selectedCategory,
    currentResultLevel,
    currentTotalScore,
    selectedSymptomIds.length,
    selectedModifierIds.length,
  ]);

  function resetWizard() {
    if (step !== "intro" && step !== "result") {
      trackTriageEvent("triage_step_abandoned", {
        entrypoint_source: entrypointSource,
        step_name: step,
        step_index: getStepIndex(step),
        species: selectedSpecies,
        category: selectedCategory,
        result_level: currentResultLevel,
        total_score: currentTotalScore,
        selected_symptom_count: selectedSymptomIds.length,
        selected_modifier_count: selectedModifierIds.length,
      });
    }

    trackTriageEvent("triage_reset", {
      entrypoint_source: entrypointSource,
      step_name: step,
      step_index: getStepIndex(step),
      species: selectedSpecies,
      category: selectedCategory,
      result_level: currentResultLevel,
      total_score: currentTotalScore,
      selected_symptom_count: selectedSymptomIds.length,
      selected_modifier_count: selectedModifierIds.length,
    });
    setStep("intro");
    setSelectedSpecies(null);
    setSelectedCategory(null);
    setSelectedSymptomIds([]);
    setSelectedModifierIds([]);
    setResult(null);
  }

  function handleSpeciesSelect(species: Species) {
    trackTriageEvent("triage_species_selected", {
      entrypoint_source: entrypointSource,
      step_name: step,
      step_index: getStepIndex(step),
      species,
      category: null,
      result_level: currentResultLevel,
      total_score: currentTotalScore,
      selected_symptom_count: selectedSymptomIds.length,
      selected_modifier_count: selectedModifierIds.length,
    });
    setSelectedSpecies(species);
    setSelectedCategory(null);
    setSelectedSymptomIds([]);
    setSelectedModifierIds([]);
    setResult(null);
  }

  function handleCategorySelect(category: TriageCategory) {
    trackTriageEvent("triage_category_selected", {
      entrypoint_source: entrypointSource,
      step_name: step,
      step_index: getStepIndex(step),
      species: selectedSpecies,
      category,
      result_level: currentResultLevel,
      total_score: currentTotalScore,
      selected_symptom_count: selectedSymptomIds.length,
      selected_modifier_count: selectedModifierIds.length,
    });
    setSelectedCategory(category);
    setSelectedSymptomIds([]);
    setSelectedModifierIds([]);
    setResult(null);
  }

  function toggleSymptom(symptomId: string) {
    setSelectedSymptomIds((current) =>
      current.includes(symptomId)
        ? current.filter((id) => id !== symptomId)
        : [...current, symptomId],
    );
  }

  function toggleModifier(modifierId: string) {
    setSelectedModifierIds((current) =>
      current.includes(modifierId)
        ? current.filter((id) => id !== modifierId)
        : [...current, modifierId],
    );
  }

  function handleComplete() {
    const nextResult = scoreTriage({
      selectedSymptomIds,
      selectedModifierIds,
    });

    trackTriageEvent("triage_result_shown", {
      entrypoint_source: entrypointSource,
      step_name: step,
      step_index: getStepIndex(step),
      species: selectedSpecies,
      category: selectedCategory,
      result_level: nextResult.level,
      total_score: nextResult.totalScore,
      selected_symptom_count: selectedSymptomIds.length,
      selected_modifier_count: selectedModifierIds.length,
    });
    setResult(nextResult);
    setStep("result");
  }

  if (step === "intro") {
    return (
      <TriageIntro
        onStart={() => {
          trackTriageEvent("triage_started", {
            entrypoint_source: entrypointSource,
            step_name: "intro",
            step_index: getStepIndex("intro"),
            species: selectedSpecies,
            category: selectedCategory,
            result_level: currentResultLevel,
            total_score: currentTotalScore,
            selected_symptom_count: selectedSymptomIds.length,
            selected_modifier_count: selectedModifierIds.length,
          });
          setStep("species");
        }}
      />
    );
  }

  if (step === "species") {
    return (
      <SpeciesStep
        selectedSpecies={selectedSpecies}
        onSelect={handleSpeciesSelect}
        onNext={() => setStep("category")}
        onReset={resetWizard}
      />
    );
  }

  if (step === "category") {
    return (
      <CategoryStep
        selectedCategory={selectedCategory}
        onSelect={handleCategorySelect}
        onBack={() => setStep("species")}
        onNext={() => setStep("symptoms")}
        onReset={resetWizard}
      />
    );
  }

  if (step === "symptoms") {
    return (
      <SymptomsStep
        symptoms={availableSymptoms}
        selectedSymptomIds={selectedSymptomIds}
        onToggle={toggleSymptom}
        onBack={() => setStep("category")}
        onNext={() => setStep("modifiers")}
        onReset={resetWizard}
      />
    );
  }

  if (step === "modifiers") {
    return (
      <ModifiersStep
        selectedModifierIds={selectedModifierIds}
        onToggle={toggleModifier}
        onBack={() => setStep("symptoms")}
        onComplete={handleComplete}
        onReset={resetWizard}
      />
    );
  }

  if (!result) {
    return null;
  }

  const runtimeUiModel = resolveClinicalUiModelForPage({
    pathname: "/triage",
    triageInput: {
      triageResult: result,
      species: selectedSpecies,
      category: selectedCategory,
    },
  }).uiModel;

  return (
    <TriageResultCard
      result={result}
      runtimeUiModel={runtimeUiModel}
      onBack={() => setStep("modifiers")}
      onReset={resetWizard}
      onPrimaryCtaClick={() =>
        trackTriageEvent("triage_primary_cta_clicked", {
          entrypoint_source: entrypointSource,
          step_name: step,
          step_index: getStepIndex(step),
          species: selectedSpecies,
          category: selectedCategory,
          result_level: currentResultLevel,
          total_score: currentTotalScore,
          selected_symptom_count: selectedSymptomIds.length,
          selected_modifier_count: selectedModifierIds.length,
        })
      }
      onSecondaryCtaClick={() =>
        trackTriageEvent("triage_secondary_cta_clicked", {
          entrypoint_source: entrypointSource,
          step_name: step,
          step_index: getStepIndex(step),
          species: selectedSpecies,
          category: selectedCategory,
          result_level: currentResultLevel,
          total_score: currentTotalScore,
          selected_symptom_count: selectedSymptomIds.length,
          selected_modifier_count: selectedModifierIds.length,
        })
      }
    />
  );
}
