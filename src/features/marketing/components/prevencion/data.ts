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
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20agendar%20una%20revisi%C3%B3n%20preventiva%20para%20mi%20mascota.";
export const preventionPhoneHref = "tel:+524433246136";

export const preventionHeroHighlights: readonly PreventionHighlight[] = [
  {
    title: "Revisar a tiempo puede evitar problemas mayores",
    description:
      "Las revisiones y controles ayudan a detectar cambios antes de que se vuelvan una urgencia o un problema más difícil de atender.",
  },
  {
    title: "Prevenir también es atención médica",
    description:
      "Vacunas, desparasitación y seguimiento no son solo rutina. Ayudan a proteger a tu mascota y a decidir a tiempo cuando algo cambia.",
  },
  {
    title: "El seguimiento también importa en mascotas con más riesgo",
    description:
      "La prevención es importante tanto en pacientes sanos como en mascotas mayores, sensibles o con antecedentes que conviene vigilar más de cerca.",
  },
] as const;

export const preventionDecisionContexts: readonly PreventionSignal[] = [
  {
    title: "Pacientes jóvenes que necesitan un buen inicio",
    description:
      "Las primeras revisiones ayudan a definir vacunas, desparasitación y seguimiento desde etapas tempranas.",
  },
  {
    title: "Mascotas que parecen sanas pero han cambiado",
    description:
      "Cambios en apetito, peso, energía o digestión pueden justificar una revisión antes de que el problema avance más.",
  },
  {
    title: "Pacientes sensibles, mayores o con antecedentes",
    description:
      "Cuando hay más riesgo, prevenir significa vigilar mejor y actuar antes de una descompensación que sí podría evitarse.",
  },
  {
    title: "Mascotas con mucho tiempo sin revisión",
    description:
      "Volver a revisar a tiempo ayuda a detectar pendientes preventivos y retomar el seguimiento antes de que aparezcan problemas.",
  },
  {
    title: "Antes de que un cambio pequeño se complique",
    description:
      "Una buena prevención ayuda a detectar a tiempo problemas que después podrían terminar en consulta aguda o tratamiento más complejo.",
  },
  {
    title: "Pacientes que necesitan control periódico",
    description:
      "Algunas mascotas necesitan revisiones programadas para seguir de cerca su peso, piel, dolor, digestión o respuesta a tratamiento.",
  },
] as const;

export const preventionCapabilities: readonly PreventionCapability[] = [
  {
    title: "Revisión preventiva con criterio clínico",
    description:
      "La consulta preventiva ayuda a revisar estado general, antecedentes y riesgos para decidir qué conviene cuidar o vigilar mejor.",
    icon: Stethoscope,
  },
  {
    title: "Vacunas y desparasitación dentro de un plan",
    description:
      "No se trata de aplicar por rutina, sino de definir qué corresponde según edad, entorno, riesgo y momento de tu mascota.",
    icon: ShieldPlus,
  },
  {
    title: "Seguimiento y monitoreo oportuno",
    description:
      "El control periódico ayuda a detectar cambios antes de que se conviertan en urgencias o en un problema más difícil de manejar.",
    icon: ClipboardCheck,
  },
] as const;

export const preventionSupportCards: readonly PreventionSupportCard[] = [
  {
    title: "Vacunas cuando realmente hacen falta",
    description:
      "La prevención responsable ayuda a definir qué vacunas corresponden, cuándo aplicarlas y cuándo conviene reevaluar antes.",
    icon: Syringe,
    items: [
      "Esquemas según etapa de vida y riesgo",
      "Revisión previa antes de vacunar",
      "Menos rutina automática, más criterio médico",
    ],
  },
  {
    title: "Desparasitación y revisiones periódicas",
    description:
      "Los controles ayudan a ajustar desparasitación, revisar piel, digestión y peso, y detectar cambios que al inicio parecen pequeños.",
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
      "En mascotas sensibles, mayores o con antecedentes, prevenir también significa vigilar más de cerca y decidir antes.",
    icon: ShieldPlus,
    items: [
      "Controles más cercanos cuando hace falta",
      "Menos espera ante cambios importantes",
      "Mejor continuidad si el caso necesita más atención",
    ],
  },
] as const;

export const preventionDifferentiators: readonly PreventionCapability[] = [
  {
    title: "Puede evitar que el caso llegue a urgencias",
    description:
      "Detectar cambios a tiempo ayuda a actuar antes de que tu mascota se descompense o necesite atención aguda.",
    icon: HeartPulse,
  },
  {
    title: "Ayuda a decidir antes de que el problema avance",
    description:
      "Una revisión preventiva permite ajustar vacunas, desparasitación o seguimiento antes de que aparezcan complicaciones.",
    icon: ClipboardCheck,
  },
  {
    title: "Puede evitar tratamientos más tardíos o más pesados",
    description:
      "Cuando los cambios se detectan temprano, muchas veces el manejo puede ser más simple que cuando el problema ya avanzó.",
    icon: Syringe,
  },
  {
    title: "Mantiene continuidad en pacientes con más riesgo",
    description:
      "En mascotas sensibles o con antecedentes, prevenir significa vigilar mejor y no perder de vista cambios importantes.",
    icon: ShieldPlus,
  },
] as const;