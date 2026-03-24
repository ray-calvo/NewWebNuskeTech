import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Gauge,
  HeartPulse,
  MapPin,
  Monitor,
  ScanSearch,
  ShieldPlus,
  Siren,
  Stethoscope,
  Syringe,
  TriangleAlert,
} from "lucide-react";

export type Highlight = {
  title: string;
  description: string;
};

export type Signal = {
  title: string;
  description: string;
};

export type SupportCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: readonly string[];
};

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const urgentPhoneHref = "tel:+524433246136";
export const urgentWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20tengo%20una%20urgencia%20veterinaria%20y%20necesito%20atenci%C3%B3n%20inmediata.";
export const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Nusk%C3%AB%20Vet%20Center%20Camelinas%20Morelia";

export const heroHighlights: readonly Highlight[] = [
  {
    title: "Respuesta clínica inmediata",
    description:
      "Si el paciente llega comprometido, la prioridad es valorarlo y empezar a actuar sin perder tiempo.",
  },
  {
    title: "Paciente crítico y monitoreo",
    description:
      "Algunos pacientes necesitan quedarse vigilados para ver si responden o si el cuadro sigue empeorando.",
  },
  {
    title: "Apoyo diagnóstico y quirúrgico",
    description:
      "Si la urgencia necesita estudios o procedimiento, puede definirse la siguiente ruta sin retrasar la atención.",
  },
] as const;

export const immediateSignals: readonly Signal[] = [
  {
    title: "Dificultad para respirar",
    description:
      "Respiración agitada, esfuerzo marcado o respiración con boca abierta.",
  },
  {
    title: "Trauma o atropellamiento",
    description:
      "Golpes fuertes, caídas, heridas profundas o dolor intenso repentino.",
  },
  {
    title: "Convulsiones o desorientación severa",
    description:
      "Pérdida de coordinación, movimientos involuntarios o respuesta alterada.",
  },
  {
    title: "Sangrado abundante o palidez",
    description:
      "Hemorragia activa, debilidad marcada o encías muy pálidas o moradas.",
  },
  {
    title: "No puede orinar o abdomen muy distendido",
    description:
      "Esfuerzo sin resultado, dolor abdominal y deterioro rápido del estado general.",
  },
  {
    title: "Dolor agudo o colapso",
    description:
      "Paciente inmóvil, quejido constante, desmayo o incapacidad para incorporarse.",
  },
] as const;

export const criticalCareCapabilities: readonly Capability[] = [
  {
    title: "Triage y estabilización inicial",
    description:
      "Priorización clínica rápida para identificar riesgo vital y actuar sin demora.",
    icon: Siren,
  },
  {
    title: "Monitoreo continuo",
    description:
      "Seguimiento estrecho de signos vitales y evolución del paciente durante las primeras horas críticas.",
    icon: Monitor,
  },
  {
    title: "Manejo del dolor y soporte",
    description:
      "Control del dolor, fluidoterapia y medidas de soporte según la condición clínica.",
    icon: HeartPulse,
  },
] as const;

export const supportCards: readonly SupportCard[] = [
  {
    title: "Hospitalización y monitoreo continuo",
    description:
      "Cuando el paciente no está listo para irse a casa, puede quedarse en observación, tratamiento y reevaluación cercana.",
    icon: ShieldPlus,
    items: [
      "Observación clínica continua",
      "Seguimiento de respuesta al tratamiento",
      "Reevaluación según cómo evoluciona",
    ],
  },
  {
    title: "Apoyo diagnóstico",
    description:
      "Cuando el cuadro no es claro, los estudios ayudan a entender mejor el problema y a decidir qué sigue.",
    icon: ScanSearch,
    items: [
      "Imagenología y laboratorio según criterio médico",
      "Mejor lectura de lo que está ocurriendo",
      "Decisiones más rápidas en cuadros agudos",
    ],
  },
  {
    title: "Apoyo quirúrgico",
    description:
      "Si el paciente necesita procedimiento, puede definirse si conviene operar y en qué condiciones hacerlo con más seguridad.",
    icon: Syringe,
    items: [
      "Valoración prequirúrgica",
      "Planeación anestésica según el estado del paciente",
      "Continuidad postoperatoria",
    ],
  },
] as const;

export const differentiators: readonly Capability[] = [
  {
    title: "Permite actuar antes del colapso",
    description:
      "Cuando el paciente empieza a deteriorarse, recibirlo de inmediato puede evitar que llegue a un punto más crítico.",
    icon: Gauge,
  },
  {
    title: "Primero estabiliza, luego decide",
    description:
      "Si llega inestable, la prioridad es sostener respiración, circulación y dolor antes de pensar en estudios o procedimientos.",
    icon: Stethoscope,
  },
  {
    title: "Prioriza lo que no puede esperar",
    description:
      "Ayuda a diferenciar qué debe atenderse en los primeros minutos y qué puede ordenarse después sin aumentar el riesgo.",
    icon: Activity,
  },
  {
    title: "Reduce tiempo perdido en la urgencia",
    description:
      "Cuando hay un cuadro agudo, llegar rápido y activar la atención desde el primer contacto cambia el margen de respuesta.",
    icon: MapPin,
  },
] as const;

export const finalActions: readonly Capability[] = [
  {
    title: "Llamar al hospital",
    description:
      "Primera opción si el cuadro parece crítico o necesitas avisar que vas en camino.",
    icon: TriangleAlert,
  },
  {
    title: "Escribir por WhatsApp",
    description:
      "Canal rápido para orientación inicial y coordinación inmediata con el equipo.",
    icon: HeartPulse,
  },
  {
    title: "Usar triage orientativo",
    description:
      "Herramienta secundaria si aún no tienes claro el nivel de urgencia observado.",
    icon: ScanSearch,
  },
] as const;
