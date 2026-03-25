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
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20tengo%20una%20urgencia%20con%20mi%20mascota%20y%20necesito%20atenci%C3%B3n%20inmediata.";
export const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Nusk%C3%AB%20Vet%20Center%20Camelinas%20Morelia";

export const heroHighlights: readonly Highlight[] = [
  {
    title: "Atención inmediata cuando el caso no puede esperar",
    description:
      "Si tu mascota llega grave o se está deteriorando, la prioridad es revisarla y empezar a actuar sin perder tiempo.",
  },
  {
    title: "Vigilancia cercana en pacientes delicados",
    description:
      "Algunos pacientes necesitan quedarse bajo observación para ver cómo responden y actuar rápido si algo cambia.",
  },
  {
    title: "Apoyo diagnóstico y quirúrgico sin retrasar la atención",
    description:
      "Si la urgencia necesita estudios o un procedimiento, el siguiente paso puede definirse sin frenar la atención del paciente.",
  },
] as const;

export const immediateSignals: readonly Signal[] = [
  {
    title: "Dificultad para respirar",
    description:
      "Respira con mucho esfuerzo, muy rápido o con la boca abierta.",
  },
  {
    title: "Trauma o atropellamiento",
    description:
      "Golpes fuertes, caídas, heridas profundas o dolor intenso repentino.",
  },
  {
    title: "Convulsiones o desorientación severa",
    description:
      "Movimientos involuntarios, pérdida de coordinación o respuesta alterada.",
  },
  {
    title: "Sangrado abundante o palidez",
    description:
      "Hemorragia activa, debilidad marcada o encías muy pálidas o moradas.",
  },
  {
    title: "No puede orinar o abdomen muy distendido",
    description:
      "Hace esfuerzo sin lograr orinar, tiene dolor abdominal o empeora rápido.",
  },
  {
    title: "Dolor agudo o colapso",
    description:
      "No puede levantarse, se queja de forma constante, se desvanece o colapsa.",
  },
] as const;

export const criticalCareCapabilities: readonly Capability[] = [
  {
    title: "Triage y estabilización inicial",
    description:
      "Ayuda a identificar rápido qué tan grave está el paciente y qué necesita primero para empezar a actuar sin demora.",
    icon: Siren,
  },
  {
    title: "Monitoreo continuo",
    description:
      "Permite vigilar de cerca signos vitales y evolución durante las primeras horas, cuando el paciente puede cambiar rápido.",
    icon: Monitor,
  },
  {
    title: "Control de dolor y soporte",
    description:
      "Incluye medidas para controlar dolor, sostener funciones importantes y dar apoyo según el estado de tu mascota.",
    icon: HeartPulse,
  },
] as const;

export const supportCards: readonly SupportCard[] = [
  {
    title: "Hospitalización y monitoreo continuo",
    description:
      "Cuando tu mascota todavía no está lista para irse a casa, puede quedarse en observación, tratamiento y reevaluación cercana.",
    icon: ShieldPlus,
    items: [
      "Observación clínica continua",
      "Seguimiento de cómo responde al tratamiento",
      "Reevaluación según cómo va evolucionando",
    ],
  },
  {
    title: "Apoyo diagnóstico",
    description:
      "Cuando el cuadro no está claro, los estudios ayudan a entender mejor qué está pasando y a decidir qué sigue.",
    icon: ScanSearch,
    items: [
      "Imagenología y laboratorio según criterio médico",
      "Más claridad sobre lo que está ocurriendo",
      "Decisiones más rápidas en cuadros agudos",
    ],
  },
  {
    title: "Apoyo quirúrgico",
    description:
      "Si tu mascota necesita un procedimiento, ayuda a decidir si conviene operar y en qué condiciones hacerlo con más seguridad.",
    icon: Syringe,
    items: [
      "Valoración antes de cirugía",
      "Planeación anestésica según el estado del paciente",
      "Continuidad durante la recuperación",
    ],
  },
] as const;

export const differentiators: readonly Capability[] = [
  {
    title: "Ayuda a actuar antes de que el paciente colapse",
    description:
      "Cuando tu mascota empieza a deteriorarse, recibir atención a tiempo puede evitar que llegue a un punto mucho más crítico.",
    icon: Gauge,
  },
  {
    title: "Primero estabilizar, después decidir",
    description:
      "Si llega inestable, lo primero es ayudarle a respirar mejor, controlar dolor y sostener su estado antes de pensar en otros pasos.",
    icon: Stethoscope,
  },
  {
    title: "Prioriza lo que no puede esperar",
    description:
      "Ayuda a distinguir qué debe atenderse en los primeros minutos y qué puede ordenarse después sin aumentar el riesgo.",
    icon: Activity,
  },
  {
    title: "Reduce tiempo perdido en una urgencia real",
    description:
      "Cuando el cuadro es agudo, llamar, salir y llegar rápido al hospital puede cambiar por completo el margen de respuesta.",
    icon: MapPin,
  },
] as const;

export const finalActions: readonly Capability[] = [
  {
    title: "Llamar al hospital",
    description:
      "La mejor opción si tu mascota se ve grave o quieres avisar que ya vas en camino.",
    icon: TriangleAlert,
  },
  {
    title: "Escribir por WhatsApp",
    description:
      "Canal rápido para pedir orientación inicial y coordinar tu llegada con el equipo.",
    icon: HeartPulse,
  },
  {
    title: "Usar triage orientativo",
    description:
      "Herramienta de apoyo si todavía no te queda claro qué tan urgente parece lo que estás viendo.",
    icon: ScanSearch,
  },
] as const;