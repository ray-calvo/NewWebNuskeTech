import {
  Activity,
  Bird,
  ClipboardCheck,
  HeartPulse,
  ScanSearch,
  Stethoscope,
  Syringe,
  Waves,
} from "lucide-react";

import type { ServiceCategoryBlock } from "@/features/marketing/components/services/types";

export const capabilityBlocks: readonly ServiceCategoryBlock[] = [
  {
    badge: "Servicios principales",
    title: "Las áreas que más ayudan cuando tu mascota necesita atención médica",
    description:
      "Si hoy estás buscando ayuda para tu mascota, aquí están los servicios principales del hospital y el tipo de casos en los que pueden orientarte mejor.",
    services: [
      {
        title: "Urgencias",
        category: "Servicios principales",
        description:
          "Es la mejor opción cuando hay dolor intenso, trauma, dificultad para respirar, descompensación o cualquier cambio que no puede esperar.",
        icon: HeartPulse,
        bullets: [
          "Actuar sin perder tiempo",
          "Atender primero lo más grave",
          "Definir rápido si hacen falta estudios o cirugía",
        ],
        href: "/urgencias",
        ctaLabel: "Ir a urgencias",
        status: "published",
      },
      {
        title: "Cirugía",
        category: "Servicios principales",
        description:
          "Ayuda cuando tu mascota podría necesitar un procedimiento y hace falta decidir si conviene operar, cómo prepararla y cómo acompañar su recuperación.",
        icon: Syringe,
        bullets: [
          "Valorar si la cirugía es la mejor opción",
          "Planear el procedimiento con más seguridad",
          "Dar seguimiento después de operar",
        ],
        href: "/cirugia",
        ctaLabel: "Ver cirugía",
        status: "published",
      },
      {
        title: "Diagnóstico",
        category: "Servicios principales",
        description:
          "Ayuda cuando todavía no está claro qué está causando el problema y hacen falta más estudios para decidir mejor qué sigue.",
        icon: ScanSearch,
        bullets: [
          "Entender mejor lo que está pasando",
          "Reducir dudas antes de decidir",
          "Elegir con más claridad el siguiente paso",
        ],
        href: "/diagnostico",
        ctaLabel: "Ver diagnóstico",
        status: "published",
      },
      {
        title: "Endoscopía",
        category: "Servicios principales",
        description:
          "Puede ayudar cuando una opción menos invasiva permite observar mejor, confirmar el problema o incluso resolverlo sin empezar por una cirugía abierta.",
        icon: Waves,
        bullets: [
          "Valorar si una opción menos invasiva puede ayudar",
          "Evitar abrir cuando no hace falta",
          "Decidir mejor qué conviene hacer después",
        ],
        href: "/endoscopia",
        ctaLabel: "Ver endoscopía",
        status: "published",
      },
    ],
  },
  {
    badge: "Prevención y seguimiento",
    title: "Atención para cuidar, revisar y detectar a tiempo",
    description:
      "No todo empieza en una urgencia. Cuando todavía hay margen para anticiparse, esta parte ayuda a dar seguimiento y reducir problemas que podrían complicarse después.",
    services: [
      {
        title: "Prevención",
        category: "Prevención y seguimiento",
        description:
          "Incluye revisiones, vacunas, desparasitación y seguimiento oportuno para cuidar mejor a tu mascota antes de que aparezcan problemas mayores.",
        icon: ClipboardCheck,
        bullets: [
          "Detectar cambios antes de que avancen",
          "Dar seguimiento a pacientes sanos o con riesgo",
          "Reducir urgencias que pueden prevenirse",
        ],
        href: "/prevencion",
        ctaLabel: "Ver prevención",
        status: "published",
      },
    ],
  },
  {
    badge: "Servicios complementarios",
    title: "Áreas que amplían la atención del hospital",
    description:
      "Estos servicios ya están disponibles y ayudan en casos que necesitan una valoración más específica, sin perder de vista las áreas centrales del hospital.",
    services: [
      {
        title: "Exóticos",
        category: "Servicio complementario",
        description:
          "Atención para aves, reptiles y pequeños mamíferos que necesitan una revisión adaptada a su especie y a la forma en que presentan la enfermedad.",
        icon: Bird,
        bullets: [
          "Valorar señales que cambian según la especie",
          "Decidir estudios, soporte o seguimiento con menos demora",
          "Atender pacientes que necesitan otra lectura médica",
        ],
        href: "/exoticos",
        ctaLabel: "Ver exóticos",
        status: "published",
      },
      {
        title: "Oncología",
        category: "Servicio complementario",
        description:
          "Ayuda cuando hay sospecha o diagnóstico de cáncer y hace falta estudiar mejor el caso, ordenar prioridades y dar seguimiento con más claridad.",
        icon: Stethoscope,
        bullets: [
          "Valorar masas o cambios que avanzan con el tiempo",
          "Coordinar estudios, cirugía u hospitalización si hace falta",
          "Dar continuidad a casos complejos",
        ],
        href: "/oncologia",
        ctaLabel: "Ver oncología",
        status: "published",
      },
      {
        title: "Medicina interna",
        category: "Servicio complementario",
        description:
          "Ayuda en pacientes con signos persistentes, evolución incierta o cuadros complejos que necesitan integrar mejor síntomas, estudios y seguimiento.",
        icon: ScanSearch,
        bullets: [
          "Entender mejor casos que no son tan claros",
          "Integrar estudios, evolución y contexto clínico",
          "Decidir si conviene continuar, cambiar o escalar la atención",
        ],
        href: "/medicina-interna",
        ctaLabel: "Ver medicina interna",
        status: "published",
      },
    ],
  },
  {
    badge: "Otros servicios",
    title: "Líneas que no son el eje clínico principal de esta página",
    description:
      "Estas áreas también forman parte del hospital, pero aquí no ocupan el primer plano porque la prioridad es ayudarte a ubicar atención médica.",
    services: [
      {
        title: "Servicios complementarios no médicos",
        category: "Otros servicios",
        description:
          "Grooming, pensión y otras líneas existen, pero esta página está enfocada primero en orientar la atención clínica de tu mascota.",
        icon: Activity,
        bullets: [
          "No son el enfoque principal de esta sección",
          "La prioridad aquí es la atención médica",
          "Pueden consultarse después según lo que necesites",
        ],
        status: "subordinate",
      },
    ],
  },
] as const;