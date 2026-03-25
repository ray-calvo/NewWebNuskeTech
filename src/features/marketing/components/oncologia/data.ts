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
    title: "No toda masa o cambio significa lo mismo",
    description:
      "Cuando aparece un bulto, una lesión o un cambio que sigue avanzando, lo importante es valorar qué puede significar y qué tan pronto conviene estudiarlo.",
  },
  {
    title: "Oncología también ayuda a decidir mejor",
    description:
      "La valoración ayuda a ordenar estudios, decidir si hace falta cirugía, seguimiento más cercano o apoyo hospitalario según el caso.",
  },
  {
    title: "Una ruta clara ayuda a no perder tiempo",
    description:
      "En pacientes complejos, tener una mejor orientación ayuda a evitar retrasos, decisiones apresuradas y cambios de rumbo sin suficiente claridad.",
  },
] as const;

export const oncologyDecisionContexts: readonly OncologySignal[] = [
  {
    title: "Masas, nódulos o cambios que siguen creciendo",
    description:
      "Cuando un bulto aumenta de tamaño, cambia de consistencia o no mejora con el tiempo, conviene revisar qué estudios hacen falta.",
  },
  {
    title: "Heridas, lesiones o zonas inflamadas que no mejoran",
    description:
      "Si una lesión persiste, sangra, se ulcera o reaparece, puede necesitar una valoración más completa antes de seguir esperando.",
  },
  {
    title: "Pérdida de peso, apetito o energía sin causa clara",
    description:
      "Los cambios progresivos en peso, ánimo o apetito convienen revisarse mejor cuando no encajan con un problema sencillo.",
  },
  {
    title: "Hallazgos en estudios o revisiones previas",
    description:
      "A veces la sospecha aparece después de una imagen, un estudio o una cirugía previa y hace falta ordenar mejor qué sigue.",
  },
  {
    title: "Pacientes que ya tienen diagnóstico y necesitan seguimiento",
    description:
      "El acompañamiento no termina con el primer hallazgo. También importa revisar evolución, respuesta y cambios del paciente con el tiempo.",
  },
  {
    title: "Casos en los que hay que decidir qué sigue",
    description:
      "No todos los pacientes necesitan la misma ruta. La valoración ayuda a distinguir cuándo estudiar más, intervenir, vigilar o acompañar de otra manera.",
  },
] as const;

export const oncologyCapabilities: readonly OncologyCapability[] = [
  {
    title: "Valoración oncológica con criterio médico",
    description:
      "La prioridad es entender el contexto del paciente, cómo se comporta el hallazgo y qué decisiones conviene tomar primero.",
    icon: Stethoscope,
  },
  {
    title: "Diagnóstico y definición del siguiente paso",
    description:
      "La oncología se apoya en estudios, interpretación clínica y reevaluación para decidir si hace falta cirugía, hospitalización o seguimiento.",
    icon: ScanSearch,
  },
  {
    title: "Seguimiento y acompañamiento del caso",
    description:
      "En estos pacientes no basta con una sola visita. Hace falta revisar evolución, tolerancia, cambios clínicos y calidad de vida según el momento.",
    icon: ShieldPlus,
  },
] as const;

export const oncologySupportCards: readonly OncologySupportCard[] = [
  {
    title: "Relación con diagnóstico",
    description:
      "Cuando hay sospecha oncológica, aclarar el cuadro y ordenar estudios suele ser el primer paso para decidir con más claridad.",
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
      "Algunos pacientes necesitan intervención, otros apoyo hospitalario y otros una ruta más conservadora. La valoración ayuda a distinguirlo.",
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
      "La atención oncológica también implica vigilar confort, tolerancia y cambios del paciente para acompañarlo con más criterio en cada etapa.",
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
      "No toda sospecha necesita la misma respuesta. La diferencia está en ordenar mejor qué estudiar, qué vigilar y qué intervenir.",
    icon: ScanSearch,
  },
  {
    title: "Coordina mejor cirugía, estudios y soporte",
    description:
      "Cuando el caso es complejo, tener una ruta más clara reduce decisiones fragmentadas y pasos innecesarios.",
    icon: Syringe,
  },
  {
    title: "Acompaña al paciente más allá del hallazgo inicial",
    description:
      "El valor no está solo en detectar, sino en seguir la evolución del paciente con más criterio y menos improvisación.",
    icon: ShieldPlus,
  },
] as const;