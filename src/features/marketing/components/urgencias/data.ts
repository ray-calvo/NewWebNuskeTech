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
      "Recepción, valoración inicial y estabilización desde el primer contacto.",
  },
  {
    title: "Paciente crítico y monitoreo",
    description:
      "Capacidad hospitalaria para vigilancia continua y seguimiento estrecho.",
  },
  {
    title: "Apoyo diagnóstico y quirúrgico",
    description:
      "Integración con estudios y procedimientos cuando el cuadro lo requiere.",
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
      "Submódulo hospitalario para pacientes que no pueden regresar a casa de inmediato y requieren observación, tratamiento y reevaluación frecuente.",
    icon: ShieldPlus,
    items: [
      "Observación clínica continua",
      "Seguimiento de respuesta al tratamiento",
      "Menor estrés con manejo hospitalario estructurado",
    ],
  },
  {
    title: "Apoyo diagnóstico",
    description:
      "Estudios y valoración diagnóstica que ayudan a entender mejor el cuadro agudo y a decidir el siguiente paso con criterio hospitalario.",
    icon: ScanSearch,
    items: [
      "Imagenología y laboratorio según criterio médico",
      "Correlación clínica de hallazgos",
      "Soporte rápido para casos complejos",
    ],
  },
  {
    title: "Apoyo quirúrgico",
    description:
      "Cuando la urgencia evoluciona a procedimiento, la página se conecta con la capacidad quirúrgica y anestésica del hospital.",
    icon: Syringe,
    items: [
      "Valoración prequirúrgica",
      "Control anestésico hospitalario",
      "Continuidad postoperatoria",
    ],
  },
] as const;

export const differentiators: readonly Capability[] = [
  {
    title: "Guardia hospitalaria activa 24/7",
    description:
      "Disponibilidad operativa para atender cuadros agudos durante todo el año.",
    icon: Gauge,
  },
  {
    title: "Criterio clínico hospitalario",
    description:
      "La urgencia se entiende como proceso hospitalario, no solo como consulta inmediata.",
    icon: Stethoscope,
  },
  {
    title: "Continuidad entre urgencias, diagnóstico y cirugía",
    description:
      "La página madre conecta con la resolución clínica posterior sin fragmentar al paciente.",
    icon: Activity,
  },
  {
    title: "Acción inmediata y ubicación clara",
    description:
      "Llamada, WhatsApp y cómo llegar priorizados para reducir fricción en la urgencia.",
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
