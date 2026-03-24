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
      "La cirugía se integra a valoración, anestesia, monitoreo y seguimiento dentro del mismo hospital.",
  },
  {
    title: "Seguridad anestésica y vigilancia",
    description:
      "Control intraoperatorio y acompañamiento postoperatorio según la condición del paciente.",
  },
  {
    title: "Apoyo diagnóstico y planificación",
    description:
      "La decisión quirúrgica se sostiene con criterio clínico, estudios y reevaluación cuando hace falta.",
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
      "Definición del problema, del momento de intervención y del soporte médico necesario alrededor del procedimiento.",
    icon: Stethoscope,
  },
  {
    title: "Procedimientos especializados",
    description:
      "Abordaje de tejidos blandos y resolución de cuadros que requieren intervención técnica y control clínico.",
    icon: Syringe,
  },
  {
    title: "Continuidad postoperatoria",
    description:
      "Seguimiento estructurado de dolor, evolución, monitoreo y decisiones posteriores al procedimiento.",
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
      "La cirugía hospitalaria no parte de una intuición aislada. Se apoya en estudios, exploración clínica y planeación del abordaje más adecuado para cada paciente.",
    icon: ScanSearch,
    items: [
      "Imagenología y laboratorio según criterio médico",
      "Definición de riesgo y oportunidad quirúrgica",
      "Planeación del procedimiento y del entorno postoperatorio",
    ],
  },
  {
    title: "Recuperación, hospitalización y seguimiento",
    description:
      "Algunos pacientes requieren quedarse en observación, reevaluarse o sostener soporte hospitalario después del procedimiento.",
    icon: ShieldPlus,
    items: [
      "Monitoreo postoperatorio",
      "Control de evolución y reevaluación clínica",
      "Continuidad con hospitalización cuando hace falta",
    ],
  },
  {
    title: "Integración con otras capacidades del hospital",
    description:
      "La página madre quirúrgica se conecta con diagnóstico, urgencias y cuidado crítico cuando la condición lo exige.",
    icon: Microscope,
    items: [
      "Coordinación con urgencias para pacientes inestables",
      "Soporte diagnóstico antes y después del procedimiento",
      "Ruta clínica integrada para casos complejos",
    ],
  },
] as const;

export const surgicalDifferentiators: readonly SurgeryCapability[] = [
  {
    title: "Criterio quirúrgico hospitalario",
    description:
      "La cirugía se presenta como capacidad clínica integral, no como catálogo de intervenciones.",
    icon: TriangleAlert,
  },
  {
    title: "Seguridad anestésica como eje",
    description:
      "La anestesia y el monitoreo forman parte central de la promesa de seguridad del hospital.",
    icon: Monitor,
  },
  {
    title: "Planeación y continuidad",
    description:
      "La intervención se integra con diagnóstico previo y seguimiento posterior dentro del mismo sistema clínico.",
    icon: ClipboardCheck,
  },
  {
    title: "Capacidad para casos complejos",
    description:
      "La cirugía se posiciona como resolución hospitalaria para pacientes que requieren más que una intervención aislada.",
    icon: Syringe,
  },
] as const;
