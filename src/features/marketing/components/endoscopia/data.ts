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
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20informaci%C3%B3n%20sobre%20endoscop%C3%ADa%20para%20mi%20mascota.";
export const endoscopyPhoneHref = "tel:+524433246136";

export const endoscopyHeroHighlights: readonly EndoscopyHighlight[] = [
  {
    title: "Puede evitar una cirugía abierta en algunos casos",
    description:
      "Cuando está bien indicada, la endoscopía puede ayudar a revisar o resolver el problema sin pasar de inmediato a una cirugía mayor.",
  },
  {
    title: "Ayuda a ver mejor qué está pasando",
    description:
      "Si la revisión inicial no es suficiente, permite observar directamente ciertas zonas para decidir mejor qué sigue.",
  },
  {
    title: "Puede hacer más llevadera la recuperación",
    description:
      "En pacientes seleccionados, una opción menos invasiva puede significar menos trauma y una recuperación más cómoda.",
  },
] as const;

export const endoscopyUseCases: readonly EndoscopySignal[] = [
  {
    title: "Sospecha de cuerpo extraño",
    description:
      "Cuando hay vómito, náusea, arcadas o dolor y existe la sospecha de que algo quedó atorado, puede ayudar a confirmar y actuar a tiempo.",
  },
  {
    title: "Vómito persistente o regurgitación",
    description:
      "Si el cuadro no mejora, la endoscopía puede ayudar a entender mejor lo que está ocurriendo sin abrir desde el inicio.",
  },
  {
    title: "Dificultad para tragar o irritación persistente",
    description:
      "Puede ser útil cuando hace falta revisar directamente una zona inflamada, lesionada o con cambios que no se entienden bien desde fuera.",
  },
  {
    title: "Necesidad de tomar una muestra o revisar una lesión",
    description:
      "En algunos pacientes ayuda a confirmar mejor el problema y a decidir si hace falta otro tratamiento o procedimiento.",
  },
  {
    title: "Casos en los que conviene una opción menos invasiva",
    description:
      "Cuando el caso lo permite, puede ser una alternativa para revisar o resolver con menos agresión que una cirugía abierta.",
  },
  {
    title: "Duda sobre si ya hace falta cirugía",
    description:
      "También puede ayudar a definir si basta con este abordaje o si tu mascota necesita pasar a una cirugía.",
  },
] as const;

export const endoscopyCapabilities: readonly EndoscopyCapability[] = [
  {
    title: "Permite ver directamente la zona afectada",
    description:
      "Ayuda a observar por dentro cuando la exploración y los estudios previos todavía no explican bien el problema.",
    icon: Camera,
  },
  {
    title: "Puede actuar sin abrir cuando es posible",
    description:
      "En ciertos casos permite retirar, liberar o intervenir sin empezar por una cirugía abierta.",
    icon: Waves,
  },
  {
    title: "Ayuda a decidir mejor qué sigue",
    description:
      "Puede orientar si basta con resolver por esta vía o si hace falta cirugía, hospitalización o vigilancia más cercana.",
    icon: Stethoscope,
  },
] as const;

export const endoscopySupport: readonly EndoscopySupportCard[] = [
  {
    title: "Cuando hace falta más claridad",
    description:
      "A veces los estudios orientan el caso, pero todavía hace falta ver directamente para tomar una mejor decisión.",
    icon: ScanSearch,
    items: [
      "Puede ayudar a confirmar mejor lo que está ocurriendo",
      "No reemplaza la imagenología ni el laboratorio",
      "Ayuda a decidir el siguiente paso con más claridad",
    ],
  },
  {
    title: "Cuando puede evitar una cirugía abierta",
    description:
      "En casos bien seleccionados, puede resolver por una vía menos agresiva o ayudar a confirmar si realmente hace falta abrir.",
    icon: Syringe,
    items: [
      "Puede evitar una cirugía mayor cuando no hace falta",
      "Puede orientar mejor una decisión quirúrgica",
      "También ayuda a detectar cuándo ya no conviene esperar",
    ],
  },
  {
    title: "Cuando tu mascota necesita seguir vigilada",
    description:
      "Después del procedimiento, algunos pacientes necesitan observación, reevaluación o soporte antes de regresar a casa.",
    icon: ShieldPlus,
    items: [
      "Recuperación más cómoda cuando el caso responde bien",
      "Observación si todavía hay dolor o riesgo",
      "Seguimiento cercano si la evolución lo necesita",
    ],
  },
] as const;

export const endoscopyDifferentiators: readonly EndoscopyCapability[] = [
  {
    title: "Puede evitar abrir cuando no hace falta",
    description:
      "Cuando el caso lo permite, ayuda a revisar o resolver sin pasar de inmediato a una cirugía abierta.",
    icon: SearchCheck,
  },
  {
    title: "Permite actuar antes de que el problema avance",
    description:
      "Si se identifica a tiempo, puede permitir una intervención más simple antes de que el paciente se complique.",
    icon: Activity,
  },
  {
    title: "Puede hacer más corta la recuperación",
    description:
      "Cuando está bien indicada, la mínima invasión puede reducir trauma y favorecer una recuperación más llevadera.",
    icon: ArrowUpRight,
  },
  {
    title: "Hace más clara la decisión médica",
    description:
      "Ayuda a definir con mayor precisión si basta con este procedimiento o si tu mascota necesita cirugía u otro tipo de apoyo.",
    icon: HeartPulse,
  },
] as const;