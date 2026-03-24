import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  Camera,
  HeartPulse,
  ScanSearch,
  SearchCheck,
  ShieldPlus,
  Stethoscope,
  Syringe,
  Waves,
} from "lucide-react";

export type EndoscopyHighlight = {
  title: string;
  description: string;
};

export type EndoscopySignal = {
  title: string;
  description: string;
};

export type EndoscopyCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type EndoscopySupportCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: readonly string[];
};

export const endoscopyWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20informaci%C3%B3n%20sobre%20endoscop%C3%ADa%20o%20m%C3%ADnima%20invasi%C3%B3n%20para%20mi%20mascota.";
export const endoscopyPhoneHref = "tel:+524433246136";

export const endoscopyHeroHighlights: readonly EndoscopyHighlight[] = [
  {
    title: "Evaluación y resolución mínimamente invasiva",
    description:
      "La endoscopía puede ayudar a observar, confirmar y, en ciertos casos, intervenir con menos trauma.",
  },
  {
    title: "Puente entre diagnóstico y tratamiento",
    description:
      "No reemplaza el criterio diagnóstico ni la cirugía, pero puede conectar ambas rutas con menor agresión para el paciente.",
  },
  {
    title: "Diferenciador hospitalario premium",
    description:
      "Su valor está en la precisión clínica y en la recuperación más ágil cuando el caso es candidato.",
  },
] as const;

export const endoscopyUseCases: readonly EndoscopySignal[] = [
  {
    title: "Sospecha de cuerpo extraño o irritación digestiva",
    description:
      "Casos donde puede ser útil observar directamente estructuras internas y orientar mejor la decisión clínica.",
  },
  {
    title: "Necesidad de evaluación interna con menor agresión",
    description:
      "Escenarios donde la mínima invasión aporta información o resolución con menos trauma que un abordaje mayor.",
  },
  {
    title: "Pacientes que requieren confirmación más precisa",
    description:
      "Cuando la evaluación clínica y el diagnóstico apuntan a una ruta que necesita visualización o toma de muestras dirigida.",
  },
  {
    title: "Seguimiento de ciertas condiciones del tracto digestivo o respiratorio superior",
    description:
      "La endoscopía puede complementar decisiones y seguimiento cuando el caso lo justifica.",
  },
  {
    title: "Planeación de manejo menos invasivo",
    description:
      "Permite valorar si el caso puede resolverse con menor trauma y recuperación más ágil.",
  },
  {
    title: "Casos que no requieren cirugía abierta inmediata",
    description:
      "Ayuda a identificar cuándo una ruta mínimamente invasiva puede ser suficiente o cuándo debe escalarse.",
  },
] as const;

export const endoscopyCapabilities: readonly EndoscopyCapability[] = [
  {
    title: "Visualización clínica dirigida",
    description:
      "Permite observar estructuras internas con propósito clínico y correlación con el resto del caso.",
    icon: Camera,
  },
  {
    title: "Mínima invasión como ventaja real",
    description:
      "Menor trauma, menor agresión de tejidos y recuperación potencialmente más ágil en pacientes seleccionados.",
    icon: Waves,
  },
  {
    title: "Capacidad procedimental especializada",
    description:
      "La endoscopía se presenta como herramienta clínica especializada, no como demostración tecnológica aislada.",
    icon: Stethoscope,
  },
] as const;

export const endoscopySupport: readonly EndoscopySupportCard[] = [
  {
    title: "Relación con diagnóstico",
    description:
      "La endoscopía se apoya en el diagnóstico hospitalario y lo complementa cuando hace falta más precisión o visualización directa.",
    icon: ScanSearch,
    items: [
      "Acompaña la lectura diagnóstica del caso",
      "No reemplaza imagenología ni laboratorio",
      "Ayuda a precisar rutas de manejo posteriores",
    ],
  },
  {
    title: "Relación con cirugía",
    description:
      "La capacidad endoscópica no anula la cirugía. En algunos casos la evita, en otros ayuda a definirla y en otros funciona como paso intermedio.",
    icon: Syringe,
    items: [
      "Puede evitar procedimientos mayores en casos seleccionados",
      "Puede orientar mejor una decisión quirúrgica",
      "Mantiene la frontera clara entre soporte y resolución quirúrgica",
    ],
  },
  {
    title: "Relación con hospitalización y seguimiento",
    description:
      "Después del procedimiento puede seguir siendo necesario monitoreo, reevaluación o soporte hospitalario según la condición del paciente.",
    icon: ShieldPlus,
    items: [
      "Recuperación más ágil cuando el caso responde bien",
      "Observación y reevaluación si la condición lo requiere",
      "Continuidad clínica dentro del mismo entorno hospitalario",
    ],
  },
] as const;

export const endoscopyDifferentiators: readonly EndoscopyCapability[] = [
  {
    title: "Capacidad especializada, no tecnología por sí misma",
    description:
      "El valor está en lo que permite resolver clínicamente, no en el equipo aislado.",
    icon: SearchCheck,
  },
  {
    title: "Menor invasión con criterio",
    description:
      "La mínima invasión importa cuando el caso la necesita y cuando mejora realmente la experiencia clínica del paciente.",
    icon: Activity,
  },
  {
    title: "Conecta evaluación y tratamiento",
    description:
      "La endoscopía se ubica entre diagnóstico y resolución, sin perder su identidad procedimental propia.",
    icon: ArrowUpRight,
  },
  {
    title: "Soporte premium para casos seleccionados",
    description:
      "Refuerza el posicionamiento del hospital en complejidad, precisión y recuperación controlada.",
    icon: HeartPulse,
  },
] as const;
