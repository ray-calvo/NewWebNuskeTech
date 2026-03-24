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
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20agendar%20una%20valoraci%C3%B3n%20quir%C3%BArgica%20para%20mi%20mascota.";
export const surgeryPhoneHref = "tel:+524433246136";

export const surgeryHeroHighlights: readonly SurgeryHighlight[] = [
  {
    title: "Resolución quirúrgica hospitalaria",
    description:
      "Cuando el paciente necesita cirugía, importa valorar bien el caso, intervenir con seguridad y seguir de cerca la recuperación.",
  },
  {
    title: "Seguridad anestésica y vigilancia",
    description:
      "La anestesia y el monitoreo ayudan a reducir riesgo antes, durante y después del procedimiento.",
  },
  {
    title: "Apoyo diagnóstico y planificación",
    description:
      "Antes de intervenir, hace falta entender bien el caso para decidir cuándo conviene operar y cómo hacerlo.",
  },
] as const;

export const surgicalAssessmentSignals: readonly SurgerySignal[] = [
  {
    title: "Dolor agudo persistente",
    description:
      "Cuando el dolor no mejora, limita movimiento o se acompaña de deterioro general.",
  },
  {
    title: "Heridas profundas o tejidos comprometidos",
    description:
      "Lesiones que requieren valoración médica para decidir cierre, manejo quirúrgico o vigilancia hospitalaria.",
  },
  {
    title: "Masas, crecimiento anormal o cambios progresivos",
    description:
      "Pacientes que requieren definición diagnóstica y posible intervención programada.",
  },
  {
    title: "Vómito persistente, distensión o sospecha de obstrucción",
    description:
      "Escenarios donde la resolución puede requerir apoyo diagnóstico y cirugía hospitalaria.",
  },
  {
    title: "Fracturas, luxaciones o trauma con compromiso funcional",
    description:
      "Situaciones que necesitan criterio quirúrgico y, en algunos casos, continuidad con urgencias.",
  },
  {
    title: "Recuperación postraumática o postoperatoria compleja",
    description:
      "Pacientes que necesitan seguimiento estrecho y soporte hospitalario durante la evolución.",
  },
] as const;

export const surgeryCapabilities: readonly SurgeryCapability[] = [
  {
    title: "Valoración quirúrgica hospitalaria",
    description:
      "Ayuda a definir si el problema necesita cirugía, cuándo conviene intervenir y qué soporte hace falta alrededor del procedimiento.",
    icon: Stethoscope,
  },
  {
    title: "Procedimientos especializados",
    description:
      "Permite resolver cuadros que no mejoran solos y que necesitan una intervención planeada con criterio médico.",
    icon: Syringe,
  },
  {
    title: "Continuidad postoperatoria",
    description:
      "Después del procedimiento, el seguimiento ayuda a controlar dolor, vigilar evolución y decidir con tiempo si algo necesita ajustarse.",
    icon: Activity,
  },
] as const;

export const anesthesiaCapabilities: readonly SurgeryCapability[] = [
  {
    title: "Evaluación anestésica previa",
    description:
      "Valoración del estado general del paciente y preparación según riesgo clínico.",
    icon: ClipboardCheck,
  },
  {
    title: "Monitoreo intraoperatorio",
    description:
      "Seguimiento de parámetros críticos durante el procedimiento para sostener seguridad y respuesta oportuna.",
    icon: Monitor,
  },
  {
    title: "Control de dolor y soporte",
    description:
      "Manejo del confort y recuperación con medidas ajustadas a la condición clínica.",
    icon: HeartPulse,
  },
] as const;

export const surgerySupportCards: readonly SurgerySupportCard[] = [
  {
    title: "Apoyo diagnóstico y planificación quirúrgica",
    description:
      "Antes de operar, hace falta entender bien el problema para elegir el mejor abordaje y reducir decisiones apresuradas.",
    icon: ScanSearch,
    items: [
      "Imagenología y laboratorio según criterio médico",
      "Definición del mejor momento para intervenir",
      "Planeación del procedimiento y la recuperación",
    ],
  },
  {
    title: "Recuperación, hospitalización y seguimiento",
    description:
      "Algunos pacientes necesitan quedarse vigilados después de la cirugía para controlar dolor, respuesta y posibles cambios en la evolución.",
    icon: ShieldPlus,
    items: [
      "Monitoreo postoperatorio",
      "Control de evolución y reevaluación clínica",
      "Observación cercana cuando hace falta",
    ],
  },
  {
    title: "Integración con otras capacidades del hospital",
    description:
      "Si el paciente llega inestable o necesita más estudios, la decisión quirúrgica puede apoyarse sin perder continuidad en el caso.",
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
    title: "Operar a tiempo cambia el pronóstico",
    description:
      "La valoración quirúrgica ayuda a distinguir cuándo conviene intervenir, cuándo estabilizar primero y cuándo esperar sería un riesgo.",
    icon: TriangleAlert,
  },
  {
    title: "Reduce riesgo cuando el paciente está comprometido",
    description:
      "En pacientes delicados, la evaluación anestésica y el monitoreo permiten intervenir con más control y menos riesgo evitable.",
    icon: Monitor,
  },
  {
    title: "Evita intervenir sin haber definido bien el caso",
    description:
      "El apoyo diagnóstico y la planeación preoperatoria ayudan a elegir mejor el abordaje y a reducir errores de decisión.",
    icon: ClipboardCheck,
  },
  {
    title: "La recuperación también cambia la decisión",
    description:
      "Cuando el paciente necesita control de dolor, vigilancia o reevaluación, contar con seguimiento hospitalario evita altas prematuras.",
    icon: Syringe,
  },
] as const;
