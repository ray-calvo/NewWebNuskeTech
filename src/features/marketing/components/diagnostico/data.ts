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
    title: "Ayuda a entender mejor lo que está pasando",
    description:
      "Cuando el cuadro no es claro, los estudios ayudan a orientar mejor el caso y a decidir qué sigue para tu mascota.",
  },
  {
    title: "Importa antes, durante y después de tomar decisiones",
    description:
      "Puede hacer falta en una urgencia, antes de un procedimiento o durante el seguimiento, cuando se necesita más claridad para actuar.",
  },
  {
    title: "Más claridad en casos delicados o complejos",
    description:
      "Cuando la revisión inicial no alcanza, contar con mejores estudios ayuda a evitar retrasos y decisiones a ciegas.",
  },
] as const;

export const diagnosticsDecisionContexts: readonly DiagnosticSignal[] = [
  {
    title: "Paciente inestable o que empeora rápido",
    description:
      "Cuando su estado cambia en poco tiempo, los estudios ayudan a entender mejor qué tan delicado está y qué debe atenderse primero.",
  },
  {
    title: "El problema no se entiende con la revisión inicial",
    description:
      "Hay casos en los que hace falta más información para saber qué está pasando y tomar una mejor decisión.",
  },
  {
    title: "Antes o después de un procedimiento",
    description:
      "Los estudios pueden ayudar a decidir mejor el momento, el alcance del problema y cómo va evolucionando tu mascota.",
  },
  {
    title: "Decaimiento, dolor o cambios generales sin causa clara",
    description:
      "Cuando hay señales importantes pero no una explicación evidente, el apoyo diagnóstico ayuda a orientar el caso con más seguridad.",
  },
  {
    title: "Dudas sobre qué tan grave es realmente",
    description:
      "Sirve para no quedarse corto, pero también para no hacer de más cuando todavía no hace falta.",
  },
  {
    title: "Seguimiento durante hospitalización o recuperación",
    description:
      "Ayuda a revisar cómo responde tu mascota y si el plan necesita ajustarse a tiempo.",
  },
] as const;

export const diagnosticCapabilities: readonly DiagnosticCapability[] = [
  {
    title: "Imagenología hospitalaria",
    description:
      "Ayuda a revisar órganos, estructuras y cambios internos cuando el problema no se entiende solo con la exploración física.",
    icon: ScanSearch,
  },
  {
    title: "Laboratorio clínico como apoyo",
    description:
      "Permite conocer mejor el estado general de tu mascota y detectar cambios que pueden modificar la decisión médica.",
    icon: Microscope,
  },
  {
    title: "Lectura completa del caso",
    description:
      "Los estudios sirven más cuando se interpretan junto con los síntomas, la revisión médica y la evolución del paciente.",
    icon: SearchCheck,
  },
] as const;

export const transversalSupport: readonly DiagnosticSupportCard[] = [
  {
    title: "Diagnóstico como apoyo en urgencias",
    description:
      "En casos agudos, ayuda a decidir qué necesita atención inmediata y qué conviene confirmar rápido para no perder tiempo.",
    icon: HeartPulse,
    items: [
      "Ayuda a entender mejor qué tan delicado está el paciente",
      "Orienta qué atender primero y qué sigue después",
      "Reduce dudas en momentos críticos",
    ],
  },
  {
    title: "Planeación y seguimiento alrededor de una cirugía",
    description:
      "Antes o después de un procedimiento, ayuda a tomar mejores decisiones sobre preparación, vigilancia y evolución.",
    icon: ClipboardCheck,
    items: [
      "Más claridad antes de intervenir",
      "Seguimiento después del procedimiento",
      "Ajustes según cómo va respondiendo tu mascota",
    ],
  },
  {
    title: "Relación con endoscopia y mínima invasión",
    description:
      "En algunos casos ayuda a decidir si conviene un procedimiento menos invasivo o si hace falta otra forma de intervención.",
    icon: Eye,
    items: [
      "Ayuda a decidir si un procedimiento está indicado",
      "Complementa la valoración clínica y de imagen",
      "Aclara cuándo conviene pasar a otra intervención",
    ],
  },
] as const;

export const diagnosticDifferentiators: readonly DiagnosticCapability[] = [
  {
    title: "Aclara el siguiente paso",
    description:
      "Cuando el caso no está claro, ayuda a decidir qué requiere atención inmediata y qué puede esperar sin poner en riesgo a tu mascota.",
    icon: Stethoscope,
  },
  {
    title: "Evita actuar sin información suficiente",
    description:
      "En algunos casos, entender mejor el problema evita tratamientos o procedimientos que todavía no están bien indicados.",
    icon: Activity,
  },
  {
    title: "Ayuda a llegar antes al tratamiento correcto",
    description:
      "Cuando el caso se entiende mejor, es más fácil decidir qué hacer sin perder tiempo en pruebas o pasos innecesarios.",
    icon: Gauge,
  },
  {
    title: "Reduce la incertidumbre en casos complejos",
    description:
      "Ayuda a definir si tu mascota necesita cirugía, hospitalización, vigilancia más cercana o una nueva valoración.",
    icon: Monitor,
  },
] as const;