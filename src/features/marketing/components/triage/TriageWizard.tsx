"use client";

import { useState } from "react";

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

type WizardStep =
  | "intro"
  | "species"
  | "category"
  | "symptoms"
  | "modifiers"
  | "result";

export function TriageWizard() {
  const [step, setStep] = useState<WizardStep>("intro");
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<TriageCategory | null>(
    null,
  );
  const [selectedSymptomIds, setSelectedSymptomIds] = useState<string[]>([]);
  const [selectedModifierIds, setSelectedModifierIds] = useState<string[]>([]);
  const [result, setResult] = useState<TriageResult | null>(null);

  const availableSymptoms =
    selectedSpecies && selectedCategory
      ? triageSymptoms.filter(
          (symptom) =>
            symptom.species.includes(selectedSpecies) &&
            symptom.categories.includes(selectedCategory),
        )
      : [];

  function buildTrackingPayload(overrides?: Partial<TriageResult>) {
    return {
      species: selectedSpecies,
      category: selectedCategory,
      result_level: overrides?.level ?? result?.level ?? null,
      total_score: overrides?.totalScore ?? result?.totalScore ?? null,
      selected_symptom_count: selectedSymptomIds.length,
      selected_modifier_count: selectedModifierIds.length,
    };
  }

  function resetWizard() {
    trackTriageEvent("triage_reset", buildTrackingPayload());
    setStep("intro");
    setSelectedSpecies(null);
    setSelectedCategory(null);
    setSelectedSymptomIds([]);
    setSelectedModifierIds([]);
    setResult(null);
  }

  function handleSpeciesSelect(species: Species) {
    trackTriageEvent("triage_species_selected", {
      ...buildTrackingPayload(),
      species,
      category: null,
    });
    setSelectedSpecies(species);
    setSelectedCategory(null);
    setSelectedSymptomIds([]);
    setSelectedModifierIds([]);
    setResult(null);
  }

  function handleCategorySelect(category: TriageCategory) {
    trackTriageEvent("triage_category_selected", {
      ...buildTrackingPayload(),
      category,
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
      ...buildTrackingPayload(nextResult),
      result_level: nextResult.level,
      total_score: nextResult.totalScore,
    });
    setResult(nextResult);
    setStep("result");
  }

  if (step === "intro") {
    return (
      <TriageIntro
        onStart={() => {
          trackTriageEvent("triage_started", buildTrackingPayload());
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

  return (
    <TriageResultCard
      result={result}
      onBack={() => setStep("modifiers")}
      onReset={resetWizard}
      onPrimaryCtaClick={() =>
        trackTriageEvent("triage_primary_cta_clicked", buildTrackingPayload())
      }
      onSecondaryCtaClick={() =>
        trackTriageEvent("triage_secondary_cta_clicked", buildTrackingPayload())
      }
    />
  );
}
