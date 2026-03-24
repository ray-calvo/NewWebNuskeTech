import {
  triageModifiers,
  triageSymptoms,
} from "@/features/marketing/components/triage/triage-data";
import type {
  TriageCta,
  TriageLevel,
  TriageModifier,
  TriageResult,
  TriageSymptom,
} from "@/features/marketing/components/triage/types";

type ScoreTriageInput = {
  selectedSymptomIds: readonly string[];
  selectedModifierIds: readonly string[];
};

const emergencyPrimaryCta: TriageCta = {
  label: "Buscar urgencias ahora",
  href: "/contacto",
};

const emergencySecondaryCta: TriageCta = {
  label: "WhatsApp",
  href: "https://wa.me/524433369624",
};

const urgentPrimaryCta: TriageCta = {
  label: "Solicitar atención hoy",
  href: "/contacto",
};

const urgentSecondaryCta: TriageCta = {
  label: "Hablar por WhatsApp",
  href: "https://wa.me/524433369624",
};

const consultPrimaryCta: TriageCta = {
  label: "Agendar valoración",
  href: "/contacto",
};

const consultSecondaryCta: TriageCta = {
  label: "Ver servicios",
  href: "/servicios",
};

function getUniqueById<T extends { id: string }>(
  items: readonly T[],
  selectedIds: readonly string[],
): T[] {
  const selectedSet = new Set(selectedIds);

  return items.filter((item) => selectedSet.has(item.id));
}

function hasMultipleModerateSymptoms(symptoms: readonly TriageSymptom[]): boolean {
  return symptoms.filter((symptom) => symptom.score >= 3 && symptom.score < 8).length >= 2;
}

function getLevelFromScore(totalScore: number, moderateSymptomsBoost: boolean): TriageLevel {
  if (totalScore >= 8) {
    return "emergency";
  }

  if (totalScore >= 4 || moderateSymptomsBoost) {
    return "urgent";
  }

  return "consult";
}

function buildReasons(
  symptoms: readonly TriageSymptom[],
  modifiers: readonly TriageModifier[],
  emergencyOverrideTriggered: boolean,
): string[] {
  const reasons = symptoms.map((symptom) => symptom.label);

  if (emergencyOverrideTriggered) {
    return ["Se detectó un signo crítico que requiere atención inmediata.", ...reasons];
  }

  return [
    ...reasons,
    ...modifiers.map((modifier) => `Factor agravante: ${modifier.label}`),
  ];
}

function getCtas(level: TriageLevel): Pick<TriageResult, "primaryCta" | "secondaryCta"> {
  switch (level) {
    case "emergency":
      return {
        primaryCta: emergencyPrimaryCta,
        secondaryCta: emergencySecondaryCta,
      };
    case "urgent":
      return {
        primaryCta: urgentPrimaryCta,
        secondaryCta: urgentSecondaryCta,
      };
    default:
      return {
        primaryCta: consultPrimaryCta,
        secondaryCta: consultSecondaryCta,
      };
  }
}

export function scoreTriage({
  selectedSymptomIds,
  selectedModifierIds,
}: ScoreTriageInput): TriageResult {
  const matchedSymptoms = getUniqueById(triageSymptoms, selectedSymptomIds);
  const matchedModifiers = getUniqueById(triageModifiers, selectedModifierIds);

  const emergencyOverrideTriggered = matchedSymptoms.some(
    (symptom) => symptom.emergencyOverride,
  );

  const symptomScore = matchedSymptoms.reduce(
    (total, symptom) => total + symptom.score,
    0,
  );
  const modifierScore = matchedModifiers.reduce(
    (total, modifier) => total + modifier.score,
    0,
  );
  const totalScore = symptomScore + modifierScore;
  const moderateSymptomsBoost = hasMultipleModerateSymptoms(matchedSymptoms);

  const level = emergencyOverrideTriggered
    ? "emergency"
    : getLevelFromScore(totalScore, moderateSymptomsBoost);

  return {
    level,
    totalScore,
    reasons: buildReasons(
      matchedSymptoms,
      matchedModifiers,
      emergencyOverrideTriggered,
    ),
    ...getCtas(level),
    emergencyOverrideTriggered,
  };
}
