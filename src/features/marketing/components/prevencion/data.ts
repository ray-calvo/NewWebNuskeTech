import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  HeartPulse,
  ScanSearch,
  ShieldPlus,
  Stethoscope,
  Syringe,
} from "lucide-react";

export type PreventionHighlight = {
  title: string;
  description: string;
};

export type PreventionSignal = {
  title: string;
  description: string;
};

export type PreventionCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PreventionSupportCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: readonly string[];
};

export const preventionWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20agendar%20una%20valoraci%C3%B3n%20preventiva%20para%20mi%20mascota.";
export const preventionPhoneHref = "tel:+524433246136";

export const preventionHeroHighlights: readonly PreventionHighlight[] = [
  {
    title: "Detectar antes de que el cuadro se complique",
    description:
      "Las revisiones y controles permiten reconocer cambios tempranos antes de que se conviertan en una urgencia o en un problema más costoso de resolver.",
  },
  {
    title: "Prevenir también es medicina seria",
    description:
      "Vacunas, desparasitación y seguimiento no son trámite: ayudan a sostener salud, reducir riesgo y decidir a tiempo cuando algo cambia.",
  },
  {
    title: "Seguimiento para pacientes sanos o con riesgo",
    description:
      "La prevención importa tanto en mascotas aparentemente sanas como en pacientes sensibles, mayores o con antecedentes que conviene vigilar de cerca.",
  },
] as const;

export const preventionDecisionContexts: readonly PreventionSignal[] = [
  {
    title: "Pacientes jóvenes que necesitan un buen punto de partida",
    description:
      "Las primeras revisiones ayudan a definir vacunas, desparasitación y hábitos de seguimiento desde etapas tempranas.",
  },
  {
    title: "Mascotas que parecen sanas pero han cambiado",
    description:
      "Cambios en apetito, peso, energía o digestión pueden justificar una valoración antes de esperar a que el problema avance.",
  },
  {
    title: "Pacientes sensibles, senior o con antecedentes",
    description:
      "Cuando ya existe mayor riesgo, prevenir significa vigilar mejor y actuar antes de una descompensación evitable.",
  },
  {
    title: "Mascotas con periodos largos sin revisión",
    description:
      "Volver a valorar a tiempo ayuda a detectar pendientes preventivos y reducir vacíos en seguimiento.",
  },
  {
    title: "Antes de que un detalle se vuelva urgencia",
    description:
      "La prevención bien llevada ayuda a reconocer a tiempo problemas que podrían terminar en consulta aguda o tratamiento mayor.",
  },
  {
    title: "Pacientes que necesitan control periódico",
    description:
      "Algunos casos requieren reevaluaciones programadas para seguir de cerca evolución, peso, dolor, piel o respuesta a tratamiento.",
  },
] as const;

export const preventionCapabilities: readonly PreventionCapability[] = [
  {
    title: "Valoración preventiva con criterio clínico",
    description:
      "La consulta preventiva ayuda a revisar estado general, antecedentes y riesgos para decidir qué conviene vigilar o ajustar.",
    icon: Stethoscope,
  },
  {
    title: "Vacunas y desparasitación dentro de un plan",
    description:
      "No se trata de aplicar por rutina, sino de definir qué corresponde según edad, entorno, riesgo y momento del paciente.",
    icon: ShieldPlus,
  },
  {
    title: "Seguimiento y monitoreo oportuno",
    description:
      "El control periódico ayuda a detectar cambios antes de que terminen en urgencias, deterioro o tratamiento más complejo.",
    icon: ClipboardCheck,
  },
] as const;

export const preventionSupportCards: readonly PreventionSupportCard[] = [
  {
    title: "Vacunas cuando realmente corresponden",
    description:
      "La prevención responsable define qué vacunas hacen falta, cuándo aplicarlas y cuándo conviene posponer o reevaluar.",
    icon: Syringe,
    items: [
      "Esquemas según etapa de vida y riesgo",
      "Revisión previa antes de vacunar",
      "Menos aplicación automática, más criterio clínico",
    ],
  },
  {
    title: "Desparasitación y revisiones periódicas",
    description:
      "Los controles permiten ajustar desparasitación, revisar piel, digestión, peso y detectar cambios que al inicio parecen pequeños.",
    icon: ScanSearch,
    items: [
      "Seguimiento periódico según necesidad real",
      "Revisión de cambios que pueden pasar desapercibidos",
      "Ajustes antes de que el problema avance",
    ],
  },
  {
    title: "Prevención en pacientes con más riesgo",
    description:
      "En mascotas sensibles, senior o con antecedentes, prevenir también significa vigilar más de cerca y decidir antes.",
    icon: ShieldPlus,
    items: [
      "Controles más cercanos cuando hace falta",
      "Menos espera ante cambios importantes",
      "Mejor continuidad si el caso necesita escalar",
    ],
  },
] as const;

export const preventionDifferentiators: readonly PreventionCapability[] = [
  {
    title: "Puede evitar que el cuadro llegue a urgencias",
    description:
      "Detectar cambios a tiempo ayuda a intervenir antes de que el paciente se descompense o necesite atención aguda.",
    icon: HeartPulse,
  },
  {
    title: "Ayuda a decidir antes de que el problema avance",
    description:
      "Una revisión preventiva permite ajustar vacunas, desparasitación o seguimiento antes de que aparezcan complicaciones evitables.",
    icon: ClipboardCheck,
  },
  {
    title: "Reduce tratamientos tardíos o más agresivos",
    description:
      "Cuando los cambios se detectan temprano, muchas veces el manejo puede ser más simple que cuando el cuadro ya está avanzado.",
    icon: Syringe,
  },
  {
    title: "Mantiene continuidad en pacientes con riesgo",
    description:
      "En mascotas sensibles o con antecedentes, prevenir significa vigilar mejor y no perder de vista cambios relevantes.",
    icon: ShieldPlus,
  },
] as const;
