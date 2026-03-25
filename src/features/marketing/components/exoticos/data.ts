import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bird,
  HeartPulse,
  ScanSearch,
  ShieldPlus,
  Stethoscope,
  Syringe,
} from "lucide-react";

export type ExoticHighlight = {
  title: string;
  description: string;
};

export type ExoticSignal = {
  title: string;
  description: string;
};

export type ExoticCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ExoticSupportCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: readonly string[];
};

export const exoticWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20agendar%20una%20revisi%C3%B3n%20para%20mi%20mascota%20ex%C3%B3tica.";
export const exoticPhoneHref = "tel:+524433246136";

export const exoticHeroHighlights: readonly ExoticHighlight[] = [
  {
    title: "Cada especie necesita una valoración distinta",
    description:
      "Aves, reptiles y pequeños mamíferos no muestran enfermedad igual que perros o gatos. Por eso conviene revisarlos con criterios adaptados a su especie.",
  },
  {
    title: "Los cambios sutiles pueden empeorar rápido",
    description:
      "Cuando comen menos, respiran diferente, se aíslan o dejan de moverse como antes, vale la pena revisarlos antes de que el problema avance.",
  },
  {
    title: "El manejo correcto también importa",
    description:
      "Menos estrés, mejor contención y decisiones adaptadas al paciente ayudan a explorar, diagnosticar y tratar con más seguridad.",
  },
] as const;

export const exoticDecisionContexts: readonly ExoticSignal[] = [
  {
    title: "Cambio en apetito, postura o actividad",
    description:
      "En estas especies, comer menos, esconderse, moverse distinto o dejar de interactuar puede ser una señal temprana de un problema serio.",
  },
  {
    title: "Respiración, plumaje, piel o caparazón alterados",
    description:
      "Cuando hay cambios visibles o esfuerzo para respirar, conviene valorar pronto para no dejar que el cuadro avance más.",
  },
  {
    title: "Pérdida de peso o deterioro difícil de notar en casa",
    description:
      "Muchos pacientes exóticos compensan durante un tiempo y pueden llegar tarde si no se revisan cuando aparecen cambios discretos.",
  },
  {
    title: "Dolor, trauma o sospecha de descompensación",
    description:
      "Si el paciente está débil, lesionado o claramente descompensado, puede necesitar atención inmediata y entrada por urgencias.",
  },
  {
    title: "Pacientes que necesitan estudios o procedimientos",
    description:
      "Algunos casos requieren imagen, hospitalización, toma de muestras o intervención con una estrategia adaptada por especie.",
  },
  {
    title: "Seguimiento de pacientes sensibles o complejos",
    description:
      "Cuando ya hubo un problema previo o la especie es especialmente frágil, conviene reevaluar y ajustar antes de esperar más tiempo.",
  },
] as const;

export const exoticCapabilities: readonly ExoticCapability[] = [
  {
    title: "Revisión médica adaptada por especie",
    description:
      "La consulta parte de cómo respira, come, se mueve y se comporta cada paciente para decidir qué importa revisar primero.",
    icon: Stethoscope,
  },
  {
    title: "Diagnóstico y manejo según el caso",
    description:
      "No todos necesitan lo mismo: algunos requieren observación cercana, otros estudios, hospitalización o procedimientos para avanzar con más seguridad.",
    icon: ScanSearch,
  },
  {
    title: "Menor estrés durante la atención",
    description:
      "Reducir manipulación innecesaria y cuidar el entorno ayuda a obtener mejor información clínica y a proteger a pacientes más sensibles.",
    icon: ShieldPlus,
  },
] as const;

export const exoticSupportCards: readonly ExoticSupportCard[] = [
  {
    title: "Diagnóstico y valoración del problema",
    description:
      "Cuando el caso no está claro, la prioridad es entender qué está pasando sin asumir que todas las especies reaccionan igual.",
    icon: ScanSearch,
    items: [
      "Exploración guiada por especie",
      "Estudios según lo que realmente hace falta",
      "Mejor lectura del riesgo clínico",
    ],
  },
  {
    title: "Hospitalización, soporte o procedimientos",
    description:
      "Algunos pacientes exóticos necesitan vigilancia, tratamiento o intervención dentro del hospital para ganar estabilidad y responder a tiempo.",
    icon: Syringe,
    items: [
      "Soporte según el estado del paciente",
      "Monitoreo cuando no conviene seguir manejo en casa",
      "Procedimientos si el caso lo requiere",
    ],
  },
  {
    title: "Relación con urgencias y continuidad de atención",
    description:
      "Si el paciente llega inestable, la entrada correcta sigue siendo urgencias. Si está estable, la valoración ayuda a decidir diagnóstico, seguimiento o manejo posterior.",
    icon: HeartPulse,
    items: [
      "Urgencias cuando hay descompensación",
      "Revisión clínica cuando aún hay margen de maniobra",
      "Seguimiento más cercano en pacientes frágiles",
    ],
  },
] as const;

export const exoticDifferentiators: readonly ExoticCapability[] = [
  {
    title: "Ayuda a detectar gravedad donde otros verían poco",
    description:
      "En pacientes que esconden enfermedad con facilidad, una valoración adaptada puede cambiar qué tan rápido conviene actuar.",
    icon: Activity,
  },
  {
    title: "Reduce errores por tratar todas las especies igual",
    description:
      "Lo que parece leve en un perro o gato puede tener otra lectura en un ave, reptil o pequeño mamífero.",
    icon: Bird,
  },
  {
    title: "Permite decidir antes de que el paciente se desgaste más",
    description:
      "Cuando el cuadro se entiende a tiempo, es más fácil definir soporte, diagnóstico o manejo antes de llegar tarde.",
    icon: HeartPulse,
  },
  {
    title: "Cuida al paciente mientras se decide qué sigue",
    description:
      "Menor estrés, mejor observación y un entorno controlado ayudan a avanzar con más seguridad clínica.",
    icon: ShieldPlus,
  },
] as const;