import {
  Activity,
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
    badge: "Núcleo hospitalario",
    title: "Rutas clínicas principales del hospital",
    description:
      "Si tu mascota necesita atención hoy, estas son las rutas clínicas que ya están publicadas y mejor explican cada tipo de decisión.",
    services: [
      {
        title: "Urgencias",
        category: "Núcleo hospitalario",
        description:
          "Es la entrada correcta cuando hay dolor intenso, trauma, dificultad para respirar, descompensación o cualquier cambio que no puede esperar.",
        icon: HeartPulse,
        bullets: [
          "Actuar sin perder tiempo",
          "Estabilizar y priorizar lo más urgente",
          "Definir rápido si hace falta diagnóstico o cirugía",
        ],
        href: "/urgencias",
        ctaLabel: "Ir a urgencias",
        status: "published",
      },
      {
        title: "Cirugía",
        category: "Núcleo hospitalario",
        description:
          "Conviene cuando el caso puede necesitar intervención, hay que decidir si operar y se requiere una ruta segura antes, durante y después del procedimiento.",
        icon: Syringe,
        bullets: [
          "Valorar si operar cambia el pronóstico",
          "Planear la intervención con menos riesgo",
          "Dar continuidad al postoperatorio",
        ],
        href: "/cirugia",
        ctaLabel: "Ver cirugía",
        status: "published",
      },
      {
        title: "Diagnóstico",
        category: "Núcleo hospitalario",
        description:
          "Ayuda cuando todavía no está claro qué está causando el problema y hace falta decidir con más certeza qué sigue para el paciente.",
        icon: ScanSearch,
        bullets: [
          "Aclarar el cuadro antes de intervenir",
          "Reducir incertidumbre clínica",
          "Acelerar la siguiente decisión útil",
        ],
        href: "/diagnostico",
        ctaLabel: "Ver diagnóstico",
        status: "published",
      },
      {
        title: "Endoscopía",
        category: "Núcleo hospitalario",
        description:
          "Sirve cuando una vía mínimamente invasiva puede ayudar a observar, confirmar o incluso resolver sin pasar de entrada a una cirugía abierta.",
        icon: Waves,
        bullets: [
          "Valorar si la mínima invasión aplica",
          "Evitar abrir cuando no hace falta",
          "Tomar una mejor decisión terapéutica",
        ],
        href: "/endoscopia",
        ctaLabel: "Ver endoscopía",
        status: "published",
      },
    ],
  },
  {
    badge: "Continuidad clínica",
    title: "Prevención y seguimiento con criterio clínico",
    description:
      "No todo empieza en una urgencia. Cuando todavía hay margen para anticiparse, esta ruta ayuda a vigilar, ajustar y reducir complicaciones evitables.",
    services: [
      {
        title: "Prevención",
        category: "Continuidad clínica",
        description:
          "Reúne revisiones, vacunas, desparasitación y seguimiento oportuno dentro de una misma decisión de cuidado anticipado.",
        icon: ClipboardCheck,
        bullets: [
          "Detectar antes de que el problema escale",
          "Acompañar pacientes sanos o con riesgo",
          "Reducir urgencias evitables",
        ],
        href: "/prevencion",
        ctaLabel: "Ver prevención",
        status: "published",
      },
    ],
  },
  {
    badge: "Publicación posterior",
    title: "Líneas clínicas y servicios que se abrirán más adelante",
    description:
      "Estas áreas forman parte del desarrollo del sitio, pero hoy no deben distraer de las rutas clínicas ya publicadas.",
    services: [
      {
        title: "Exóticos",
        category: "Publicación posterior",
        description:
          "Se abrirá cuando pueda explicarse con claridad cómo se valora y acompaña a especies no convencionales sin volverlo una categoría ambigua.",
        icon: Activity,
        bullets: [
          "Todavía no tiene ruta propia",
          "Necesita contenido clínico más sólido",
          "No debe competir con el núcleo ya publicado",
        ],
        status: "planned",
      },
      {
        title: "Oncología",
        category: "Publicación posterior",
        description:
          "Se publicará cuando el contenido permita orientar evaluación, seguimiento y tratamiento sin sonar a brochure especializado.",
        icon: Stethoscope,
        bullets: [
          "Aún no tiene página publicada",
          "Necesita narrativa clínica propia",
          "Por ahora queda fuera del protagonismo principal",
        ],
        status: "planned",
      },
      {
        title: "Medicina interna",
        category: "Publicación posterior",
        description:
          "Debe abrirse solo cuando pueda definirse como una ruta clara para casos complejos, no como un cajón general de problemas.",
        icon: ScanSearch,
        bullets: [
          "Todavía no tiene frontera clínica suficiente",
          "Necesita una ruta mejor definida",
          "Se mantiene subordinada por ahora",
        ],
        status: "planned",
      },
      {
        title: "Comercial subordinado",
        category: "Subordinado",
        description:
          "Grooming, pensión y otras líneas comerciales existen, pero no deben marcar la lectura principal de la experiencia hospitalaria.",
        icon: Activity,
        bullets: [
          "No forman parte del núcleo clínico",
          "No deben ocupar el primer plano del hub",
          "Su exposición seguirá siendo controlada",
        ],
        status: "subordinate",
      },
    ],
  },
] as const;
