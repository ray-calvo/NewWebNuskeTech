export type Species = "dog" | "cat" | "exotic";

export type TriageCategory =
  | "general"
  | "digestive"
  | "respiratory"
  | "neurological"
  | "urinary"
  | "trauma"
  | "eyes-skin"
  | "reproductive";

export type TriageLevel = "emergency" | "urgent" | "consult";

export type TriageSymptom = {
  id: string;
  label: string;
  description?: string;
  species: readonly Species[];
  categories: readonly TriageCategory[];
  score: number;
  emergencyOverride?: boolean;
};

export type TriageModifier = {
  id: string;
  label: string;
  description?: string;
  score: number;
};

export type TriageCta = {
  label: string;
  href: string;
};

export type TriageResult = {
  level: TriageLevel;
  totalScore: number;
  reasons: string[];
  primaryCta: TriageCta;
  secondaryCta: TriageCta;
  emergencyOverrideTriggered: boolean;
};
