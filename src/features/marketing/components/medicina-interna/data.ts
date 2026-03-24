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
      title: "Hay casos que no se explican con una sola etiqueta",
      description:
        "Cuando los signos persisten, cambian con el tiempo o no encajan en una causa evidente, hace falta una valoración médica más integral.",
    },
    {
      title: "Medicina interna ayuda a integrar mejor el caso",
      description:
        "No sustituye diagnóstico ni oncología: conecta signos, estudios, evolución y contexto para decidir con más fundamento qué sigue.",
    },
    {
      title: "La continuidad importa tanto como el hallazgo inicial",
      description:
        "Muchos pacientes complejos necesitan seguimiento, ajustes y reevaluación antes de que la ruta correcta se vuelva realmente clara.",
    },
  ] as const;

export const internalMedicineDecisionContexts: readonly InternalMedicineSignal[] =
  [
    {
      title: "Signos persistentes que no terminan de aclararse",
      description:
        "Vómito recurrente, pérdida de peso, decaimiento, cambios digestivos o respiratorios pueden requerir una lectura más amplia cuando no mejoran como se esperaba.",
    },
    {
      title: "Pacientes con evolución lenta, variable o confusa",
      description:
        "Cuando el cuadro cambia de forma intermitente o no sigue un patrón claro, conviene ordenar mejor el caso antes de seguir probando rutas aisladas.",
    },
    {
      title: "Resultados de estudios que necesitan integrarse mejor",
      description:
        "A veces ya existen análisis, imágenes o valoraciones previas, pero todavía hace falta entender cómo encajan entre sí.",
    },
    {
      title: "Pacientes con varios problemas al mismo tiempo",
      description:
        "Cuando coinciden más de un signo o más de un sistema afectado, la prioridad es decidir qué pesa más y qué debe atenderse primero.",
    },
    {
      title: "Casos que requieren seguimiento más estrecho",
      description:
        "Algunos pacientes no necesitan una urgencia ni una cirugía inmediata, pero sí una ruta médica que vigile evolución y respuesta.",
    },
    {
      title: "Situaciones que podrían escalar si no se ordenan a tiempo",
      description:
        "Una valoración integral puede ayudar a detectar cuándo un caso todavía es estable y cuándo conviene escalar a hospitalización, oncología u otra ruta.",
    },
  ] as const;

export const internalMedicineCapabilities: readonly InternalMedicineCapability[] =
  [
    {
      title: "Valoración médica integral del caso",
      description:
        "La prioridad es reunir signos, antecedentes, evolución y hallazgos previos para entender mejor qué puede estar pasando.",
      icon: Stethoscope,
    },
    {
      title: "Integración de estudios y decisiones",
      description:
        "Medicina interna ayuda a decidir qué falta estudiar, qué puede esperarse y qué ruta clínica conviene seguir después.",
      icon: ScanSearch,
    },
    {
      title: "Seguimiento para pacientes complejos",
      description:
        "Algunos casos necesitan más de una revisión para ver cómo cambian, qué responde y qué debe ajustarse con el tiempo.",
      icon: ShieldPlus,
    },
  ] as const;

export const internalMedicineSupportCards: readonly InternalMedicineSupportCard[] =
  [
    {
      title: "Relación con diagnóstico",
      description:
        "El diagnóstico aporta datos; medicina interna ayuda a interpretarlos dentro del cuadro completo para decidir mejor la siguiente ruta.",
      icon: Microscope,
      items: [
        "Leer estudios dentro del contexto clínico",
        "Definir qué falta aclarar",
        "Evitar saltar de un dato suelto a una conclusión rápida",
      ],
    },
    {
      title: "Relación con oncología y otras rutas complejas",
      description:
        "Cuando aparece una sospecha específica o el caso se vuelve más complejo, medicina interna ayuda a ordenar el paso hacia oncología u otras áreas sin perder continuidad.",
      icon: Syringe,
      items: [
        "Detectar cuándo hace falta otra ruta especializada",
        "Coordinar mejor la transición del caso",
        "Sostener una lectura clínica más completa",
      ],
    },
    {
      title: "Relación con hospitalización y prevención",
      description:
        "Algunos pacientes necesitan soporte hospitalario temporal; otros necesitan seguimiento más cuidadoso para evitar que el cuadro termine escalando.",
      icon: HeartPulse,
      items: [
        "Hospitalizar si el estado lo exige",
        "Dar seguimiento cuando todavía hay margen",
        "Revisar evolución antes de que aparezca una descompensación",
      ],
    },
  ] as const;

export const internalMedicineDifferentiators: readonly InternalMedicineCapability[] =
  [
    {
      title: "Ayuda a ordenar casos que no son simples ni inmediatos",
      description:
        "Cuando el problema no encaja rápido en una sola ruta, una valoración integral puede evitar decisiones fragmentadas.",
      icon: Activity,
    },
    {
      title: "Integra mejor signos, estudios y evolución",
      description:
        "La diferencia está en unir la información dispersa y decidir con más criterio qué pesa más en el cuadro.",
      icon: ScanSearch,
    },
    {
      title: "Reduce vueltas innecesarias entre rutas parciales",
      description:
        "Una lectura médica más completa puede evitar que el paciente pase por demasiadas decisiones desconectadas entre sí.",
      icon: ShieldPlus,
    },
    {
      title: "Acompaña mejor a pacientes que requieren seguimiento",
      description:
        "El valor no está solo en la primera consulta, sino en revisar cómo evoluciona el caso y qué conviene ajustar después.",
      icon: HeartPulse,
    },
  ] as const;
