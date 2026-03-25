import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ClipboardCheck,
  HeartPulse,
  Microscope,
  Monitor,
  ScanSearch,
  ShieldPlus,
  Stethoscope,
  Syringe,
  TriangleAlert,
} from "lucide-react";

export type SurgeryHighlight = {
  title: string;
  description: string;
};

export type SurgerySignal = {
  title: string;
  description: string;
};

export type SurgeryCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SurgerySupportCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: readonly string[];
};

export const surgeryWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20orientaci%C3%B3n%20sobre%20si%20mi%20mascota%20podr%C3%ADa%20necesitar%20cirug%C3%ADa.";
export const surgeryPhoneHref = "tel:+524433246136";

export const surgeryHeroHighlights: readonly SurgeryHighlight[] = [
  {
    title: "Cirugía con respaldo hospitalario",
    description:
      "Si tu mascota necesita cirugía, importa valorar bien el caso, intervenir con seguridad y vigilar de cerca su recuperación.",
  },
  {
    title: "Anestesia y monitoreo durante el procedimiento",
    description:
      "La seguridad no depende solo de operar. También cuenta cómo se vigila a tu mascota antes, durante y después.",
  },
  {
    title: "Estudios y planeación antes de decidir",
    description:
      "Antes de intervenir, hace falta entender bien qué está pasando para decidir si conviene operar y en qué momento hacerlo.",
  },
] as const;

export const surgicalAssessmentSignals: readonly SurgerySignal[] = [
  {
    title: "Dolor fuerte que no mejora",
    description:
      "Cuando el dolor persiste, limita su movimiento o viene acompañado de decaimiento y malestar general.",
  },
  {
    title: "Heridas profundas o tejido comprometido",
    description:
      "Lesiones que necesitan revisión médica para decidir si requieren cirugía, cierre especial o vigilancia hospitalaria.",
  },
  {
    title: "Masas o cambios que han ido creciendo",
    description:
      "Casos en los que hace falta revisar bien el problema y valorar si conviene un procedimiento programado.",
  },
  {
    title: "Vómito persistente, abdomen inflamado o sospecha de obstrucción",
    description:
      "Situaciones en las que puede hacer falta apoyo diagnóstico y, en algunos casos, cirugía hospitalaria.",
  },
  {
    title: "Fracturas, luxaciones o golpes con dificultad para moverse",
    description:
      "Problemas que necesitan valoración médica y, según el caso, una decisión quirúrgica o atención por urgencias.",
  },
  {
    title: "Recuperación complicada después de un trauma o una cirugía",
    description:
      "Pacientes que necesitan vigilancia cercana y apoyo hospitalario durante su evolución.",
  },
] as const;

export const surgeryCapabilities: readonly SurgeryCapability[] = [
  {
    title: "Valoración quirúrgica hospitalaria",
    description:
      "Ayuda a definir si tu mascota realmente necesita cirugía, cuándo conviene hacerla y qué cuidados hacen falta alrededor del procedimiento.",
    icon: Stethoscope,
  },
  {
    title: "Procedimientos especializados",
    description:
      "Permiten atender problemas que no van a resolverse solos y que necesitan una intervención planeada con criterio médico.",
    icon: Syringe,
  },
  {
    title: "Seguimiento después de la cirugía",
    description:
      "Después del procedimiento, el seguimiento ayuda a controlar dolor, vigilar cómo evoluciona y detectar a tiempo si algo necesita ajustarse.",
    icon: Activity,
  },
] as const;

export const anesthesiaCapabilities: readonly SurgeryCapability[] = [
  {
    title: "Revisión previa a la anestesia",
    description:
      "Se valora el estado general de tu mascota para prepararla mejor según su condición y nivel de riesgo.",
    icon: ClipboardCheck,
  },
  {
    title: "Monitoreo durante el procedimiento",
    description:
      "Se vigilan parámetros importantes durante la cirugía para responder a tiempo ante cualquier cambio.",
    icon: Monitor,
  },
  {
    title: "Control de dolor y apoyo en recuperación",
    description:
      "El confort y la recuperación se acompañan con medidas ajustadas a lo que necesita cada paciente.",
    icon: HeartPulse,
  },
] as const;

export const surgerySupportCards: readonly SurgerySupportCard[] = [
  {
    title: "Estudios y planeación antes de cirugía",
    description:
      "Antes de operar, hace falta entender bien el problema para elegir el mejor abordaje y evitar decisiones apresuradas.",
    icon: ScanSearch,
    items: [
      "Estudios de imagen y laboratorio según criterio médico",
      "Definir el mejor momento para intervenir",
      "Planear el procedimiento y la recuperación",
    ],
  },
  {
    title: "Recuperación, hospitalización y vigilancia",
    description:
      "Algunos pacientes necesitan quedarse vigilados después de la cirugía para controlar dolor, respuesta y cambios en su evolución.",
    icon: ShieldPlus,
    items: [
      "Monitoreo después del procedimiento",
      "Revisión de evolución y seguimiento médico",
      "Observación cercana cuando hace falta",
    ],
  },
  {
    title: "Apoyo de otras áreas del hospital",
    description:
      "Si tu mascota llega delicada o necesita más estudios, la decisión quirúrgica puede apoyarse sin perder continuidad en su atención.",
    icon: Microscope,
    items: [
      "Apoyo desde urgencias en pacientes comprometidos",
      "Soporte diagnóstico antes y después del procedimiento",
      "Menos cambios bruscos de plan en casos complejos",
    ],
  },
] as const;

export const surgicalDifferentiators: readonly SurgeryCapability[] = [
  {
    title: "Saber cuándo operar cambia el pronóstico",
    description:
      "La valoración quirúrgica ayuda a distinguir cuándo conviene intervenir, cuándo hay que estabilizar primero y cuándo esperar sería un riesgo.",
    icon: TriangleAlert,
  },
  {
    title: "Más seguridad en pacientes delicados",
    description:
      "Cuando un paciente está comprometido, la evaluación anestésica y el monitoreo permiten actuar con más control y menos riesgo evitable.",
    icon: Monitor,
  },
  {
    title: "Ayuda a no operar sin haber definido bien el caso",
    description:
      "Los estudios y la planeación previa ayudan a elegir mejor el procedimiento y a reducir errores de decisión.",
    icon: ClipboardCheck,
  },
  {
    title: "La recuperación también importa en la decisión",
    description:
      "Si tu mascota necesita control de dolor, vigilancia o nuevas revisiones, el seguimiento hospitalario ayuda a evitar altas antes de tiempo.",
    icon: Syringe,
  },
] as const;