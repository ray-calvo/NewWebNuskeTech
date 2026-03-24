import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ClipboardCheck,
  Eye,
  Gauge,
  HeartPulse,
  Microscope,
  Monitor,
  ScanSearch,
  SearchCheck,
  Stethoscope,
} from "lucide-react";

export type DiagnosticHighlight = {
  title: string;
  description: string;
};

export type DiagnosticSignal = {
  title: string;
  description: string;
};

export type DiagnosticCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type DiagnosticSupportCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: readonly string[];
};

export const diagnosticsWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20informaci%C3%B3n%20sobre%20estudios%20diagn%C3%B3sticos%20para%20mi%20mascota.";
export const diagnosticsPhoneHref = "tel:+524433246136";

export const diagnosticsHeroHighlights: readonly DiagnosticHighlight[] = [
  {
    title: "Ayuda a decidir con más claridad",
    description:
      "Cuando el cuadro no es claro, ayuda a priorizar mejor, confirmar sospechas y definir qué sigue.",
  },
  {
    title: "Importa antes y después de intervenir",
    description:
      "Puede ayudar tanto en cuadros agudos como antes o después de un procedimiento, cuando hace falta decidir con más certeza.",
  },
  {
    title: "Mejor información para casos complejos",
    description:
      "Cuando la exploración física no alcanza, una mejor lectura del caso ayuda a evitar errores y retrasos en el tratamiento.",
  },
] as const;

export const diagnosticsDecisionContexts: readonly DiagnosticSignal[] = [
  {
    title: "Paciente inestable o de evolución rápida",
    description:
      "Cuando la condición cambia en poco tiempo, el apoyo diagnóstico orienta prioridades y riesgo clínico.",
  },
  {
    title: "Cuadros que no se explican solo por exploración física",
    description:
      "Hay escenarios donde se necesita más información para entender mejor el problema y decidir con seguridad.",
  },
  {
    title: "Planificación de intervención o seguimiento",
    description:
      "Antes o después de un procedimiento, el diagnóstico ayuda a dimensionar condición, respuesta y evolución.",
  },
  {
    title: "Sospecha de compromiso sistémico",
    description:
      "Pacientes con deterioro general, dolor, cambios respiratorios o signos no específicos pueden requerir correlación diagnóstica.",
  },
  {
    title: "Necesidad de confirmar extensión o gravedad",
    description:
      "El criterio diagnóstico ayuda a no subestimar ni sobretratar una condición clínica.",
  },
  {
    title: "Seguimiento hospitalario",
    description:
      "La reevaluación diagnóstica permite medir respuesta y ajustar el rumbo del caso.",
  },
] as const;

export const diagnosticCapabilities: readonly DiagnosticCapability[] = [
  {
    title: "Imagenología hospitalaria",
    description:
      "Ayuda a revisar estructuras y confirmar sospechas cuando el problema no se entiende solo con la exploración.",
    icon: ScanSearch,
  },
  {
    title: "Laboratorio clínico como soporte",
    description:
      "Permite valorar mejor el estado general del paciente y detectar cambios que modifican la decisión clínica.",
    icon: Microscope,
  },
  {
    title: "Evaluación complementaria y correlación",
    description:
      "Los hallazgos sirven cuando se leen junto con los signos y la evolución del paciente, no como datos aislados.",
    icon: SearchCheck,
  },
] as const;

export const transversalSupport: readonly DiagnosticSupportCard[] = [
  {
    title: "Diagnóstico como soporte en urgencias",
    description:
      "En cuadros agudos, ayuda a decidir qué debe atenderse primero y qué necesita confirmarse rápido para no perder tiempo.",
    icon: HeartPulse,
    items: [
      "Mejor lectura del estado real del paciente",
      "Ayuda a decidir estabilización y siguientes pasos",
      "Menos duda en escenarios críticos",
    ],
  },
  {
    title: "Planificación quirúrgica y seguimiento",
    description:
      "Antes o después de un procedimiento, ayuda a decidir mejor el momento, la preparación y los cambios necesarios en el seguimiento.",
    icon: ClipboardCheck,
    items: [
      "Mejor contexto antes de intervenir",
      "Seguimiento de evolución después del procedimiento",
      "Ajustes de decisión según la respuesta clínica",
    ],
  },
  {
    title: "Relación con endoscopía y mínima invasión",
    description:
      "A veces ayuda a decidir si una vía mínimamente invasiva está indicada o si el caso necesita otra ruta.",
    icon: Eye,
    items: [
      "Ayuda a decidir si un procedimiento está indicado",
      "Complementa la evaluación clínica y de imagen",
      "Aclara cuándo conviene escalar a otra intervención",
    ],
  },
] as const;

export const diagnosticDifferentiators: readonly DiagnosticCapability[] = [
  {
    title: "Aclara el siguiente paso",
    description:
      "Cuando el cuadro no es claro, ayuda a decidir qué necesita atención inmediata y qué puede esperar sin aumentar el riesgo.",
    icon: Stethoscope,
  },
  {
    title: "Evita intervenir sin estar seguro",
    description:
      "En algunos casos, una mejor correlación diagnóstica evita procedimientos o tratamientos que todavía no están bien indicados.",
    icon: Activity,
  },
  {
    title: "Acelera el tratamiento correcto",
    description:
      "Cuando la información clínica encaja mejor, el siguiente paso puede definirse antes y con menos ensayo y error.",
    icon: Gauge,
  },
  {
    title: "Reduce incertidumbre en casos complejos",
    description:
      "Ayuda a confirmar si el paciente necesita cirugía, hospitalización, seguimiento estrecho o una reevaluación diferente.",
    icon: Monitor,
  },
] as const;
