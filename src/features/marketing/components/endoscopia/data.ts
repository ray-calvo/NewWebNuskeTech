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
    title: "Puede evitar una cirugía mayor",
    description:
      "En casos seleccionados, permite valorar y resolver sin pasar de inmediato a un abordaje más agresivo.",
  },
  {
    title: "Ayuda a ver mejor lo que está pasando",
    description:
      "Cuando la exploración no basta, puede dar una visualización directa para decidir con más seguridad el siguiente paso.",
  },
  {
    title: "Puede hacer más ágil la recuperación",
    description:
      "Si está bien indicada, la mínima invasión reduce trauma y puede ayudar a que el paciente se recupere mejor.",
  },
] as const;

export const endoscopyUseCases: readonly EndoscopySignal[] = [
  {
    title: "Sospecha de cuerpo extraño",
    description:
      "Cuando hay vómito, náusea o dolor y se sospecha que algo quedó atorado, puede ayudar a confirmar y actuar a tiempo.",
  },
  {
    title: "Vómito persistente o regurgitación",
    description:
      "Si el cuadro no mejora y hace falta entender qué está pasando por dentro, puede aportar claridad sin abrir de entrada.",
  },
  {
    title: "Dificultad para tragar o irritación persistente",
    description:
      "Puede ser útil cuando hace falta ver directamente una zona inflamada, lesionada o con cambios que no se entienden bien desde fuera.",
  },
  {
    title: "Necesidad de tomar muestra o confirmar una lesión",
    description:
      "En algunos pacientes ayuda a confirmar mejor lo que está ocurriendo y a decidir si hace falta otro tratamiento.",
  },
  {
    title: "Casos donde se busca una vía menos invasiva",
    description:
      "Cuando el caso lo permite, puede ser una alternativa para valorar o resolver con menos trauma y menor recuperación que una cirugía abierta.",
  },
  {
    title: "Necesidad de decidir si hay que escalar a cirugía",
    description:
      "También puede ayudar a definir si basta con esta vía o si el paciente necesita un abordaje mayor.",
  },
] as const;

export const endoscopyCapabilities: readonly EndoscopyCapability[] = [
  {
    title: "Ver directamente la zona afectada",
    description:
      "Permite observar por dentro cuando la exploración y los estudios previos todavía no explican bien el problema.",
    icon: Camera,
  },
  {
    title: "Actuar sin abrir cuando es posible",
    description:
      "En ciertos casos puede retirar, liberar o intervenir sin pasar por una cirugía abierta desde el inicio.",
    icon: Waves,
  },
  {
    title: "Decidir mejor qué sigue para el paciente",
    description:
      "Ayuda a definir si basta con resolver por esta vía o si hace falta cirugía, hospitalización o seguimiento estrecho.",
    icon: Stethoscope,
  },
] as const;

export const endoscopySupport: readonly EndoscopySupportCard[] = [
  {
    title: "Cuando hace falta más claridad",
    description:
      "A veces los estudios orientan el caso, pero todavía hace falta ver directamente para decidir mejor.",
    icon: ScanSearch,
    items: [
      "Puede confirmar mejor lo que está ocurriendo",
      "No sustituye imagenología ni laboratorio",
      "Ayuda a decidir el siguiente paso con menos duda",
    ],
  },
  {
    title: "Cuando puede evitar una cirugía mayor",
    description:
      "En casos seleccionados, permite resolver por una vía menos agresiva o saber con más claridad si realmente hace falta abrir.",
    icon: Syringe,
    items: [
      "Puede evitar abrir cuando no es necesario",
      "Puede orientar mejor una decisión quirúrgica",
      "También muestra cuándo ya no conviene esperar",
    ],
  },
  {
    title: "Cuando el paciente necesita seguir vigilado",
    description:
      "Después del procedimiento, algunos pacientes necesitan observación, reevaluación o soporte antes de regresar a casa.",
    icon: ShieldPlus,
    items: [
      "Recuperación más ágil cuando el caso responde bien",
      "Observación si todavía hay riesgo o dolor",
      "Seguimiento cercano si la evolución lo necesita",
    ],
  },
] as const;

export const endoscopyDifferentiators: readonly EndoscopyCapability[] = [
  {
    title: "Puede evitar abrir cuando no hace falta",
    description:
      "Cuando el caso lo permite, ayuda a confirmar o resolver sin pasar de inmediato a una cirugía abierta.",
    icon: SearchCheck,
  },
  {
    title: "Permite actuar antes de que el caso escale",
    description:
      "Si el problema se reconoce a tiempo, puede permitir una intervención más simple antes de que el paciente se complique.",
    icon: Activity,
  },
  {
    title: "Puede acortar la recuperación",
    description:
      "Si está bien indicada, la mínima invasión reduce trauma y puede hacer más corta la recuperación.",
    icon: ArrowUpRight,
  },
  {
    title: "Hace más precisa la decisión terapéutica",
    description:
      "Ayuda a decidir con más claridad si basta con resolver por esta vía o si el caso necesita cirugía u otro soporte.",
    icon: HeartPulse,
  },
] as const;
