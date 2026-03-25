import type { LucideIcon } from "lucide-react";
import {
  Activity,
  HeartPulse,
  Microscope,
  ScanSearch,
  ShieldPlus,
  Stethoscope,
  Syringe,
} from "lucide-react";

export type InternalMedicineHighlight = {
  title: string;
  description: string;
};

export type InternalMedicineSignal = {
  title: string;
  description: string;
};

export type InternalMedicineCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type InternalMedicineSupportCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: readonly string[];
};

export const internalMedicineWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20agendar%20una%20valoraci%C3%B3n%20de%20medicina%20interna%20para%20mi%20mascota.";
export const internalMedicinePhoneHref = "tel:+524433246136";

export const internalMedicineHeroHighlights: readonly InternalMedicineHighlight[] =
  [
    {
      title: "Hay casos que no se entienden con una sola explicación",
      description:
        "Cuando los signos persisten, cambian con el tiempo o no apuntan a una causa clara, hace falta una revisión más completa.",
    },
    {
      title: "Ayuda a entender mejor todo el caso",
      description:
        "No se trata solo de ver un síntoma o un estudio aislado, sino de juntar señales, antecedentes y evolución para decidir mejor qué sigue.",
    },
    {
      title: "El seguimiento puede ser tan importante como el primer hallazgo",
      description:
        "Muchos pacientes complejos necesitan revisiones, ajustes y reevaluación antes de que la mejor ruta quede realmente clara.",
    },
  ] as const;

export const internalMedicineDecisionContexts: readonly InternalMedicineSignal[] =
  [
    {
      title: "Signos persistentes que no terminan de aclararse",
      description:
        "Vómito recurrente, pérdida de peso, decaimiento o cambios digestivos y respiratorios pueden necesitar una revisión más amplia cuando no mejoran como se esperaba.",
    },
    {
      title: "Pacientes con una evolución lenta, cambiante o confusa",
      description:
        "Cuando el cuadro va y viene o no sigue un patrón claro, conviene ordenar mejor el caso antes de seguir probando caminos por separado.",
    },
    {
      title: "Estudios que todavía no explican bien el problema",
      description:
        "A veces ya hay análisis, imágenes o revisiones previas, pero todavía hace falta entender cómo encaja todo.",
    },
    {
      title: "Pacientes con varios problemas al mismo tiempo",
      description:
        "Cuando coinciden más de un signo o más de un sistema afectado, lo importante es decidir qué pesa más y qué debe atenderse primero.",
    },
    {
      title: "Casos que necesitan seguimiento más cercano",
      description:
        "Algunas mascotas no necesitan una urgencia ni una cirugía inmediata, pero sí una ruta médica que vigile su evolución y respuesta.",
    },
    {
      title: "Situaciones que pueden complicarse si no se ordenan a tiempo",
      description:
        "Una revisión integral ayuda a distinguir cuándo el caso todavía está estable y cuándo conviene pasar a hospitalización, oncología u otra área.",
    },
  ] as const;

export const internalMedicineCapabilities: readonly InternalMedicineCapability[] =
  [
    {
      title: "Revisión médica integral del caso",
      description:
        "La prioridad es reunir signos, antecedentes, evolución y hallazgos previos para entender mejor qué puede estar pasando con tu mascota.",
      icon: Stethoscope,
    },
    {
      title: "Integración de estudios y decisiones",
      description:
        "Ayuda a decidir qué falta revisar, qué puede esperar y cuál puede ser el siguiente paso más útil.",
      icon: ScanSearch,
    },
    {
      title: "Seguimiento para pacientes complejos",
      description:
        "Algunos casos necesitan más de una revisión para ver cómo cambian, qué responde y qué conviene ajustar con el tiempo.",
      icon: ShieldPlus,
    },
  ] as const;

export const internalMedicineSupportCards: readonly InternalMedicineSupportCard[] =
  [
    {
      title: "Relación con diagnóstico",
      description:
        "Los estudios aportan información, pero hace falta interpretarlos dentro del cuadro completo para decidir mejor qué sigue.",
      icon: Microscope,
      items: [
        "Leer estudios dentro del contexto clínico",
        "Definir qué falta aclarar",
        "Evitar conclusiones rápidas con datos sueltos",
      ],
    },
    {
      title: "Relación con oncología y otras áreas complejas",
      description:
        "Cuando aparece una sospecha más específica o el caso se vuelve más complejo, ayuda a pasar a otra área sin perder continuidad.",
      icon: Syringe,
      items: [
        "Detectar cuándo hace falta otra valoración especializada",
        "Ordenar mejor la transición del caso",
        "Mantener una lectura médica más completa",
      ],
    },
    {
      title: "Relación con hospitalización y prevención",
      description:
        "Algunas mascotas necesitan apoyo hospitalario temporal; otras necesitan seguimiento más cuidadoso para evitar que el cuadro avance.",
      icon: HeartPulse,
      items: [
        "Hospitalizar si el estado lo exige",
        "Dar seguimiento cuando todavía hay margen de maniobra",
        "Revisar la evolución antes de que aparezca una descompensación",
      ],
    },
  ] as const;

export const internalMedicineDifferentiators: readonly InternalMedicineCapability[] =
  [
    {
      title: "Ayuda a ordenar casos que no son simples",
      description:
        "Cuando el problema no encaja rápido en una sola ruta, una revisión integral ayuda a evitar decisiones por separado.",
      icon: Activity,
    },
    {
      title: "Integra mejor signos, estudios y evolución",
      description:
        "La diferencia está en juntar la información dispersa y decidir con más criterio qué pesa más en el cuadro.",
      icon: ScanSearch,
    },
    {
      title: "Reduce vueltas innecesarias entre áreas",
      description:
        "Una lectura médica más completa puede evitar que tu mascota pase por demasiadas decisiones desconectadas entre sí.",
      icon: ShieldPlus,
    },
    {
      title: "Acompaña mejor a pacientes que necesitan seguimiento",
      description:
        "El valor no está solo en la primera revisión, sino en entender cómo evoluciona el caso y qué conviene ajustar después.",
      icon: HeartPulse,
    },
  ] as const;