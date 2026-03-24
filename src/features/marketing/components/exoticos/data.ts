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
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20agendar%20una%20valoraci%C3%B3n%20para%20mi%20paciente%20ex%C3%B3tico.";
export const exoticPhoneHref = "tel:+524433246136";

export const exoticHeroHighlights: readonly ExoticHighlight[] = [
  {
    title: "Cada especie cambia la forma de valorar el caso",
    description:
      "Aves, reptiles y pequeños mamíferos no expresan enfermedad igual que perros o gatos, por eso la valoración necesita otra lectura clínica.",
  },
  {
    title: "Los cambios sutiles pueden volverse graves rápido",
    description:
      "Cuando comen menos, respiran distinto, se aíslan o dejan de moverse como antes, conviene valorar antes de que el deterioro avance.",
  },
  {
    title: "El entorno correcto también forma parte del manejo",
    description:
      "Menos estrés, mejor contención y decisiones adaptadas al paciente ayudan a explorar, diagnosticar y tratar con más seguridad.",
  },
] as const;

export const exoticDecisionContexts: readonly ExoticSignal[] = [
  {
    title: "Cambio en apetito, postura o actividad",
    description:
      "En estas especies, comer menos, esconderse, moverse distinto o dejar de interactuar puede ser una señal temprana de problema serio.",
  },
  {
    title: "Respiración, plumaje, piel o caparazón alterados",
    description:
      "Cuando hay cambios visibles o esfuerzo respiratorio, conviene valorar pronto para no dejar que el cuadro progrese sin control.",
  },
  {
    title: "Pérdida de peso o deterioro difícil de notar en casa",
    description:
      "Muchos pacientes exóticos compensan durante un tiempo y llegan tarde si no se revisan cuando aparecen cambios discretos.",
  },
  {
    title: "Dolor, trauma o sospecha de descompensación",
    description:
      "Si el paciente está débil, lesionado o claramente descompensado, puede requerir soporte inmediato y entrada por urgencias.",
  },
  {
    title: "Pacientes que necesitan diagnóstico o procedimientos",
    description:
      "Algunos casos requieren imagen, hospitalización, toma de muestras o intervención con una estrategia adaptada por especie.",
  },
  {
    title: "Seguimiento de pacientes sensibles o complejos",
    description:
      "Cuando ya hubo un problema previo o la especie es especialmente frágil, vale la pena reevaluar y ajustar antes de esperar más.",
  },
] as const;

export const exoticCapabilities: readonly ExoticCapability[] = [
  {
    title: "Valoración médica adaptada por especie",
    description:
      "La consulta parte de cómo respira, come, se mueve y se comporta cada paciente para decidir qué importa revisar primero.",
    icon: Stethoscope,
  },
  {
    title: "Diagnóstico y manejo según el caso",
    description:
      "No todos necesitan lo mismo: algunos requieren observación cercana, otros estudios, hospitalización o procedimientos para avanzar con seguridad.",
    icon: ScanSearch,
  },
  {
    title: "Menor estrés durante exploración y atención",
    description:
      "Reducir manipulación innecesaria y cuidar el entorno ayuda a obtener mejor información clínica y a proteger a pacientes más sensibles.",
    icon: ShieldPlus,
  },
] as const;

export const exoticSupportCards: readonly ExoticSupportCard[] = [
  {
    title: "Diagnóstico y valoración del cuadro",
    description:
      "Cuando el problema no está claro, la prioridad es entender qué está pasando sin asumir que todas las especies se comportan igual.",
    icon: ScanSearch,
    items: [
      "Exploración guiada por especie",
      "Estudios según necesidad real",
      "Mejor lectura del riesgo clínico",
    ],
  },
  {
    title: "Hospitalización, soporte o procedimientos",
    description:
      "Algunos pacientes exóticos necesitan vigilancia, tratamiento o intervención dentro del hospital para ganar estabilidad y tiempo de respuesta.",
    icon: Syringe,
    items: [
      "Soporte según estado del paciente",
      "Monitoreo cuando no conviene manejar en casa",
      "Procedimientos si el caso lo requiere",
    ],
  },
  {
    title: "Relación con urgencias y continuidad clínica",
    description:
      "Si el paciente llega inestable, la entrada correcta sigue siendo urgencias. Si está estable, la valoración permite decidir diagnóstico, seguimiento o manejo posterior.",
    icon: HeartPulse,
    items: [
      "Urgencias cuando hay descompensación",
      "Valoración clínica cuando aún hay margen",
      "Seguimiento más cercano en pacientes frágiles",
    ],
  },
] as const;

export const exoticDifferentiators: readonly ExoticCapability[] = [
  {
    title: "Ayuda a detectar gravedad donde otros verían poco",
    description:
      "En pacientes que esconden enfermedad con facilidad, una valoración adaptada puede cambiar qué tan rápido se decide actuar.",
    icon: Activity,
  },
  {
    title: "Reduce errores por tratar todas las especies igual",
    description:
      "Lo que parece leve en un perro o gato puede tener otra lectura en un ave, reptil o pequeño mamífero.",
    icon: Bird,
  },
  {
    title: "Permite decidir antes de que el paciente se agote",
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
