import type { LucideIcon } from "lucide-react";
import {
  Activity,
  HeartPulse,
  Microscope,
  ScanSearch,
  ShieldPlus,
  Stethoscope,
  Syringe,
} from "lucide-react";

export type OncologyHighlight = {
  title: string;
  description: string;
};

export type OncologySignal = {
  title: string;
  description: string;
};

export type OncologyCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type OncologySupportCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: readonly string[];
};

export const oncologyWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20agendar%20una%20valoraci%C3%B3n%20oncol%C3%B3gica%20para%20mi%20mascota.";
export const oncologyPhoneHref = "tel:+524433246136";

export const oncologyHeroHighlights: readonly OncologyHighlight[] = [
  {
    title: "No toda masa o hallazgo significa lo mismo",
    description:
      "Cuando aparece un bulto, una lesión o un cambio progresivo, lo importante es valorar qué puede significar y qué tan pronto conviene estudiarlo.",
  },
  {
    title: "Oncología no es solo tratar: también es decidir mejor",
    description:
      "La valoración ayuda a ordenar estudios, definir si hace falta cirugía, seguimiento más cercano o manejo hospitalario según el caso.",
  },
  {
    title: "Acompañar con criterio también cambia el recorrido",
    description:
      "En pacientes complejos, tener una ruta clara reduce retrasos, evita decisiones apresuradas y ayuda a sostener mejor la continuidad clínica.",
  },
] as const;

export const oncologyDecisionContexts: readonly OncologySignal[] = [
  {
    title: "Masas, nódulos o cambios que siguen creciendo",
    description:
      "Cuando un bulto aumenta de tamaño, cambia de consistencia o no mejora con el tiempo, conviene valorar qué estudios hacen falta.",
  },
  {
    title: "Heridas, lesiones o áreas inflamadas que no resuelven",
    description:
      "Si una lesión persiste, sangra, se ulcera o reaparece, puede requerir una valoración más completa antes de seguir esperando.",
  },
  {
    title: "Pérdida de peso, apetito o energía sin causa clara",
    description:
      "Los cambios progresivos en peso, ánimo o apetito justifican una lectura más amplia cuando no encajan con un problema sencillo.",
  },
  {
    title: "Hallazgos en estudios o revisiones previas",
    description:
      "A veces la sospecha surge después de una imagen, un estudio o una cirugía previa y hace falta ordenar mejor qué sigue.",
  },
  {
    title: "Pacientes que ya tienen diagnóstico y necesitan seguimiento",
    description:
      "El acompañamiento no termina en el hallazgo inicial. También importa valorar evolución, respuesta y cambios del paciente con el tiempo.",
  },
  {
    title: "Casos que necesitan decidir si escalar o no",
    description:
      "No todos los pacientes requieren la misma ruta. La valoración ayuda a distinguir cuándo estudiar más, intervenir, controlar o acompañar de otra manera.",
  },
] as const;

export const oncologyCapabilities: readonly OncologyCapability[] = [
  {
    title: "Valoración oncológica con criterio clínico",
    description:
      "La prioridad es entender el contexto del paciente, el comportamiento del hallazgo y qué decisiones conviene tomar primero.",
    icon: Stethoscope,
  },
  {
    title: "Diagnóstico y definición de la siguiente ruta",
    description:
      "La oncología se apoya en estudios, interpretación clínica y reevaluación para decidir si hace falta cirugía, hospitalización o seguimiento.",
    icon: ScanSearch,
  },
  {
    title: "Seguimiento y acompañamiento del caso",
    description:
      "En estos pacientes no basta con un evento aislado. Hace falta revisar evolución, tolerancia, cambios clínicos y calidad de vida según el momento.",
    icon: ShieldPlus,
  },
] as const;

export const oncologySupportCards: readonly OncologySupportCard[] = [
  {
    title: "Relación con diagnóstico",
    description:
      "Cuando hay sospecha oncológica, aclarar el cuadro y ordenar estudios suele ser el primer paso para decidir con más fundamento.",
    icon: Microscope,
    items: [
      "Estudios según lo que el caso necesita",
      "Mejor lectura del alcance del problema",
      "Menos decisiones tomadas a ciegas",
    ],
  },
  {
    title: "Relación con cirugía y hospitalización",
    description:
      "Algunos pacientes requieren intervención, otros soporte hospitalario y otros una ruta más conservadora. La valoración ayuda a distinguirlos.",
    icon: Syringe,
    items: [
      "Decidir si operar tiene sentido clínico",
      "Hospitalizar si el estado del paciente lo exige",
      "Coordinar mejor el siguiente paso",
    ],
  },
  {
    title: "Continuidad clínica y control del dolor",
    description:
      "El manejo oncológico también implica vigilar confort, tolerancia y cambios del paciente para acompañarlo con más criterio en cada etapa.",
    icon: HeartPulse,
    items: [
      "Revisar evolución y signos de deterioro",
      "Ajustar seguimiento según respuesta",
      "No perder de vista confort y calidad de vida",
    ],
  },
] as const;

export const oncologyDifferentiators: readonly OncologyCapability[] = [
  {
    title: "Ayuda a estudiar antes de decidir demasiado tarde",
    description:
      "Valorar a tiempo una masa o un cambio progresivo puede evitar retrasos que después limitan opciones de manejo.",
    icon: Activity,
  },
  {
    title: "Evita tratar todos los hallazgos como si fueran iguales",
    description:
      "No toda sospecha exige la misma respuesta. La diferencia está en ordenar mejor qué estudiar, qué vigilar y qué intervenir.",
    icon: ScanSearch,
  },
  {
    title: "Coordina mejor cirugía, estudios y soporte",
    description:
      "Cuando el caso es complejo, tener una ruta clínica más clara reduce decisiones fragmentadas y pasos innecesarios.",
    icon: Syringe,
  },
  {
    title: "Acompaña al paciente más allá del hallazgo inicial",
    description:
      "El valor no está solo en detectar, sino en seguir la evolución del paciente con más criterio y menos improvisación.",
    icon: ShieldPlus,
  },
] as const;
