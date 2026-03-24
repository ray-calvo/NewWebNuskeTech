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
    title: "Diagnóstico como soporte a decisiones",
    description:
      "La precisión diagnóstica ayuda a priorizar, confirmar y ajustar el siguiente paso clínico.",
  },
  {
    title: "Integración con urgencias y cirugía",
    description:
      "Los estudios no viven aislados: se conectan con cuadros agudos, planificación y seguimiento.",
  },
  {
    title: "Capacidad hospitalaria transversal",
    description:
      "Imagenología, laboratorio y evaluación clínica complementaria dentro de una misma lógica hospitalaria.",
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
      "Herramientas para evaluar estructuras, orientar sospechas y complementar la exploración clínica.",
    icon: ScanSearch,
  },
  {
    title: "Laboratorio clínico como soporte",
    description:
      "Resultados que ayudan a dimensionar estado general, compromiso sistémico y evolución del paciente.",
    icon: Microscope,
  },
  {
    title: "Evaluación complementaria y correlación",
    description:
      "Los hallazgos se entienden en conjunto con la clínica del paciente, no como dato aislado.",
    icon: SearchCheck,
  },
] as const;

export const transversalSupport: readonly DiagnosticSupportCard[] = [
  {
    title: "Diagnóstico como soporte en urgencias",
    description:
      "En cuadros agudos, el diagnóstico ayuda a priorizar decisiones, confirmar sospechas y sostener la ruta hospitalaria inicial.",
    icon: HeartPulse,
    items: [
      "Correlación rápida con el estado del paciente",
      "Apoyo para decidir estabilización y siguientes pasos",
      "Mejor lectura de riesgo clínico en escenarios críticos",
    ],
  },
  {
    title: "Planificación quirúrgica y seguimiento",
    description:
      "El diagnóstico orienta el momento del procedimiento, la preparación del paciente y la reevaluación posterior.",
    icon: ClipboardCheck,
    items: [
      "Planeación preoperatoria con mejor contexto clínico",
      "Seguimiento de evolución después de la intervención",
      "Apoyo a decisiones perioperatorias",
    ],
  },
  {
    title: "Relación con endoscopía y mínima invasión",
    description:
      "La endoscopía es una capacidad procedimental diferenciada; el diagnóstico la acompaña, pero no la absorbe ni la reemplaza.",
    icon: Eye,
    items: [
      "Criterio para decidir si un procedimiento está indicado",
      "Complemento a la evaluación clínica y de imagen",
      "Frontera clara entre soporte diagnóstico y resolución procedimental",
    ],
  },
] as const;

export const diagnosticDifferentiators: readonly DiagnosticCapability[] = [
  {
    title: "Evita decidir a ciegas",
    description:
      "Cuando la exploración no alcanza, el diagnóstico ayuda a definir mejor el problema antes de tratar o intervenir.",
    icon: Stethoscope,
  },
  {
    title: "Ayuda a priorizar lo urgente",
    description:
      "En pacientes que cambian rápido, aporta información para decidir qué atender primero y qué puede esperar.",
    icon: Activity,
  },
  {
    title: "Permite ajustar el plan del caso",
    description:
      "Los hallazgos ayudan a confirmar, descartar o cambiar la ruta clínica cuando la evolución no es la esperada.",
    icon: Gauge,
  },
  {
    title: "Aclara cuándo hace falta otro paso",
    description:
      "Puede mostrar si el paciente necesita cirugía, hospitalización, seguimiento estrecho o una reevaluación distinta.",
    icon: Monitor,
  },
] as const;
