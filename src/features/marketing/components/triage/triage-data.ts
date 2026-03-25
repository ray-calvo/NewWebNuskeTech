import type {
  Species,
  TriageCategory,
  TriageModifier,
  TriageSymptom,
} from "@/features/marketing/components/triage/types";

export const supportedSpecies: readonly {
  value: Species;
  label: string;
}[] = [
  { value: "dog", label: "Perro" },
  { value: "cat", label: "Gato" },
  { value: "exotic", label: "Exótico" },
] as const;

export const triageCategories: readonly {
  value: TriageCategory;
  label: string;
  description: string;
}[] = [
  {
    value: "general",
    label: "General",
    description: "Cambios en su ánimo, energía o estado general.",
  },
  {
    value: "digestive",
    label: "Digestivo",
    description: "Vómito, diarrea, abdomen inflamado o malestar estomacal.",
  },
  {
    value: "respiratory",
    label: "Respiratorio",
    description: "Tos, respiración agitada o dificultad para respirar.",
  },
  {
    value: "neurological",
    label: "Neurológico",
    description: "Convulsiones, desorientación o dificultad para moverse.",
  },
  {
    value: "urinary",
    label: "Urinario",
    description: "Dificultad para orinar, dolor o cambios visibles en la orina.",
  },
  {
    value: "trauma",
    label: "Trauma / dolor",
    description: "Golpes, heridas, sangrado o dolor evidente.",
  },
  {
    value: "eyes-skin",
    label: "Ojos / piel",
    description: "Molestias, lesiones o cambios visibles en ojos, piel o cara.",
  },
  {
    value: "reproductive",
    label: "Reproductivo",
    description: "Problemas durante el embarazo, el parto o secreciones anormales.",
  },
] as const;

export const triageSymptoms: readonly TriageSymptom[] = [
  {
    id: "difficulty-breathing",
    label: "Dificultad para respirar",
    description:
      "Respira con esfuerzo, muy rápido o se nota que le cuesta trabajo respirar.",
    species: ["dog", "cat", "exotic"],
    categories: ["respiratory", "general"],
    score: 10,
    emergencyOverride: true,
  },
  {
    id: "open-mouth-breathing",
    label: "Respiración con boca abierta",
    description:
      "Respira con la boca abierta sin haber hecho ejercicio o sin una causa clara.",
    species: ["dog", "cat", "exotic"],
    categories: ["respiratory"],
    score: 10,
    emergencyOverride: true,
  },
  {
    id: "purple-gums",
    label: "Encías moradas o muy azuladas",
    description:
      "Las encías se ven moradas, azuladas o mucho más oscuras de lo normal.",
    species: ["dog", "cat", "exotic"],
    categories: ["respiratory", "general"],
    score: 10,
    emergencyOverride: true,
  },
  {
    id: "seizures",
    label: "Convulsiones",
    description:
      "Tiene movimientos involuntarios, sacudidas o episodios repentinos.",
    species: ["dog", "cat", "exotic"],
    categories: ["neurological"],
    score: 10,
    emergencyOverride: true,
  },
  {
    id: "unconscious",
    label: "Está inconsciente o no responde",
    description: "No responde, no reacciona o parece desmayado.",
    species: ["dog", "cat", "exotic"],
    categories: ["general", "neurological", "trauma"],
    score: 10,
    emergencyOverride: true,
  },
  {
    id: "heavy-bleeding",
    label: "Sangrado abundante",
    description: "La sangre sale en gran cantidad o no se detiene.",
    species: ["dog", "cat", "exotic"],
    categories: ["trauma", "reproductive"],
    score: 10,
    emergencyOverride: true,
  },
  {
    id: "cannot-urinate",
    label: "No puede orinar",
    description:
      "Hace esfuerzo, se queja o intenta orinar varias veces sin lograrlo.",
    species: ["dog", "cat", "exotic"],
    categories: ["urinary"],
    score: 10,
    emergencyOverride: true,
  },
  {
    id: "hit-by-car",
    label: "Fue atropellado o sufrió un golpe fuerte",
    description:
      "Tuvo un accidente importante, una caída fuerte o un golpe severo.",
    species: ["dog", "cat", "exotic"],
    categories: ["trauma", "general"],
    score: 10,
    emergencyOverride: true,
  },
  {
    id: "painful-bloated-abdomen",
    label: "Abdomen muy distendido con dolor",
    description:
      "Su abdomen se ve muy inflamado y muestra dolor al tocarlo.",
    species: ["dog", "cat", "exotic"],
    categories: ["digestive", "general"],
    score: 10,
    emergencyOverride: true,
  },
  {
    id: "protruding-eye",
    label: "Ojo salido o muy desplazado",
    description:
      "El ojo parece fuera de su lugar, muy expuesto o muy inflamado.",
    species: ["dog", "cat", "exotic"],
    categories: ["eyes-skin"],
    score: 10,
    emergencyOverride: true,
  },
  {
    id: "repeated-vomiting",
    label: "Vómito repetido",
    description: "Ha vomitado varias veces en poco tiempo.",
    species: ["dog", "cat", "exotic"],
    categories: ["digestive"],
    score: 3,
  },
  {
    id: "continuous-diarrhea",
    label: "Diarrea continua",
    description:
      "Tiene evacuaciones muy frecuentes, muy líquidas o no mejora.",
    species: ["dog", "cat", "exotic"],
    categories: ["digestive"],
    score: 3,
  },
  {
    id: "won't-eat",
    label: "No quiere comer",
    description:
      "Rechaza su alimento o ha perdido el apetito de forma evidente.",
    species: ["dog", "cat", "exotic"],
    categories: ["general", "digestive"],
    score: 2,
  },
  {
    id: "very-tired",
    label: "Se ve muy decaído",
    description:
      "Tiene mucha menos energía de lo normal o se ve muy apagado.",
    species: ["dog", "cat", "exotic"],
    categories: ["general"],
    score: 2,
  },
  {
    id: "coughing",
    label: "Tose con frecuencia",
    description:
      "Tiene tos repetida o tarda en recuperarse después de toser.",
    species: ["dog", "cat", "exotic"],
    categories: ["respiratory"],
    score: 3,
  },
  {
    id: "nasal-discharge",
    label: "Tiene moco o secreción nasal",
    description:
      "Tiene secreción por la nariz o su respiración se ve o se escucha diferente a lo normal.",
    species: ["dog", "cat", "exotic"],
    categories: ["respiratory"],
    score: 2,
  },
  {
    id: "disoriented",
    label: "Está desorientado o camina raro",
    description:
      "Se tambalea, parece confundido o pierde el equilibrio.",
    species: ["dog", "cat", "exotic"],
    categories: ["neurological", "general"],
    score: 4,
  },
  {
    id: "pain-when-urinating",
    label: "Le duele al orinar",
    description:
      "Hace esfuerzo, se queja o tarda mucho tiempo para orinar.",
    species: ["dog", "cat", "exotic"],
    categories: ["urinary"],
    score: 4,
  },
  {
    id: "limping-or-pain",
    label: "Cojea o muestra dolor evidente",
    description:
      "Le cuesta caminar, evita apoyarse o se queja al moverse.",
    species: ["dog", "cat", "exotic"],
    categories: ["trauma", "general"],
    score: 3,
  },
  {
    id: "wound-or-swelling",
    label: "Tiene herida o inflamación visible",
    description:
      "Hay una lesión abierta o una zona muy inflamada.",
    species: ["dog", "cat", "exotic"],
    categories: ["trauma", "eyes-skin"],
    score: 3,
  },
  {
    id: "red-painful-eye",
    label: "Ojo rojo o muy doloroso",
    description:
      "No quiere abrir el ojo, se lo talla o le molesta la luz.",
    species: ["dog", "cat", "exotic"],
    categories: ["eyes-skin"],
    score: 4,
  },
  {
    id: "intense-itching",
    label: "Comezón intensa o piel muy irritada",
    description:
      "Se rasca mucho o la piel se ve muy roja e irritada.",
    species: ["dog", "cat", "exotic"],
    categories: ["eyes-skin"],
    score: 2,
  },
  {
    id: "pregnancy-labor-problem",
    label: "Problema durante embarazo o parto",
    description:
      "Tiene contracciones sin que avance el parto, dolor o sangrado que preocupa.",
    species: ["dog", "cat", "exotic"],
    categories: ["reproductive"],
    score: 5,
  },
  {
    id: "abnormal-discharge",
    label: "Secreción anormal",
    description:
      "Tiene una secreción con mal olor, sangre o un aspecto inusual.",
    species: ["dog", "cat", "exotic"],
    categories: ["reproductive", "urinary"],
    score: 3,
  },
] as const;

export const triageModifiers: readonly TriageModifier[] = [
  {
    id: "started-suddenly",
    label: "Comenzó de repente",
    description: "El problema apareció de forma súbita.",
    score: 1,
  },
  {
    id: "getting-worse-fast",
    label: "Está empeorando rápido",
    description:
      "Lo que tiene se está agravando en poco tiempo.",
    score: 2,
  },
  {
    id: "intense-pain",
    label: "Parece tener mucho dolor",
    description:
      "Llora, jadea, se queja o no se deja tocar.",
    score: 2,
  },
  {
    id: "cannot-eat-drink",
    label: "No puede comer ni tomar agua",
    description:
      "No logra comer, beber o rechaza todo por completo.",
    score: 2,
  },
  {
    id: "very-young-or-old",
    label: "Es muy pequeño o ya es mayor",
    description:
      "Es cachorro, gatito o una mascota de edad avanzada.",
    score: 1,
  },
] as const;