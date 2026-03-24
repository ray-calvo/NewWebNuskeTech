import {
  Check,
  HeartPulse,
  Microscope,
  Monitor,
  ScanSearch,
  ShieldPlus,
  Stethoscope,
  Syringe,
} from "lucide-react";

import type {
  DigitalService,
  ServiceCategoryBlock,
  ServiceSection,
} from "@/features/marketing/components/services/types";

const surgeryServices: readonly ServiceSection[] = [
  {
    title: "Cirugía Hospitalaria y Manejo Quirúrgico Integral",
    category: "Cirugía especializada",
    description:
      "Intervenciones quirúrgicas respaldadas por control anestésico avanzado, monitoreo intraoperatorio y continuidad clínica durante la recuperación.",
    imageSrc:
      "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Quirófano veterinario con instrumentación y monitorización avanzada",
    icon: Syringe,
    benefits: [
      "Cirugía de tejidos blandos y procedimientos complejos",
      "Anestesia hospitalaria con control avanzado de signos vitales",
      "Recuperación controlada y seguimiento postoperatorio",
    ],
    whatsappMessage:
      "Hola Nuskë, solicito una valoración quirúrgica para mi mascota...",
  },
];

const diagnosticServices: readonly ServiceSection[] = [
  {
    title: "Imagenología Avanzada",
    category: "Diagnóstico avanzado",
    description:
      "Rayos X digitales de alta frecuencia y ultrasonido Doppler a color para apoyar decisiones diagnósticas rápidas en pacientes complejos.",
    imageSrc:
      "https://images.unsplash.com/photo-1583912267550-d4bcddac42b4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Equipo de imagenología y ultrasonido clínico",
    icon: ScanSearch,
    benefits: [
      "Imagenología para decisiones clínicas oportunas",
      "Ultrasonido y evaluación complementaria",
      "Soporte rápido a urgencias, cirugía y hospitalización",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera información sobre estudios diagnósticos para mi mascota...",
  },
  {
    title: "Laboratorio Clínico In-house",
    category: "Diagnóstico avanzado",
    description:
      "Pruebas de sangre, citologías y diagnósticos rápidos en sitio para respaldar estabilización, hospitalización y seguimiento clínico sin depender de tiempos externos.",
    imageSrc:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Laboratorio clínico con instrumentos diagnósticos",
    icon: Microscope,
    benefits: [
      "Biometrías y química sanguínea en minutos",
      "Diagnóstico rápido sin salir del hospital",
      "Apoyo inmediato a decisiones médicas críticas",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera información sobre estudios de laboratorio para mi mascota...",
  },
  {
    title: "Valoración Clínica para Pacientes No Convencionales",
    category: "Diagnóstico avanzado",
    description:
      "Atención clínica y evaluación médica especializada para aves, reptiles y pequeños mamíferos dentro de una lógica hospitalaria controlada.",
    imageSrc:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Consulta clínica para especies exóticas en un entorno veterinario controlado",
    icon: Stethoscope,
    benefits: [
      "Valoración clínica adaptada por especie",
      "Ambiente controlado para reducir estrés",
      "Seguimiento médico especializado",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera agendar una valoración para mi ejemplar exótico...",
  },
] as const;

const urgentServices: readonly ServiceSection[] = [
  {
    title: "Urgencias, Estabilización y Triage Hospitalario",
    category: "Paciente crítico",
    description:
      "Disponibilidad total los 365 días del año para estabilizar, priorizar y orientar con rapidez a cada paciente desde su llegada.",
    imageSrc:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Área veterinaria de urgencias con personal médico y equipamiento clínico",
    icon: HeartPulse,
    benefits: [
      "Atención sin cita previa las 24 horas",
      "Triaje y estabilización inmediata",
      "Laboratorio y apoyo diagnóstico en sitio",
    ],
    whatsappMessage:
      "Hola Nuskë, tengo una emergencia con mi mascota y voy en camino...",
  },
  {
    title: "Hospitalización Especializada",
    category: "Paciente crítico",
    description:
      "Seguimiento continuo para pacientes que requieren vigilancia clínica, recuperación supervisada y menor estrés durante su estancia.",
    imageSrc:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Área hospitalaria veterinaria con camas y equipamiento clínico",
    icon: ShieldPlus,
    benefits: [
      "Áreas separadas por especie",
      "Monitoreo continuo para recuperación segura",
      "Enfoque Fear-Free para reducir el estrés",
    ],
    whatsappMessage:
      "Hola Nuskë, necesito información sobre hospitalización para mi mascota...",
  },
  {
    title: "Cuidados Intensivos",
    category: "Paciente crítico",
    description:
      "Monitoreo constante y soporte hospitalario avanzado para pacientes críticos que necesitan vigilancia intensiva y respuesta inmediata.",
    imageSrc:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Monitor clínico y área de cuidados intensivos veterinarios",
    icon: Monitor,
    benefits: [
      "Monitoreo constante de signos vitales",
      "Respuesta hospitalaria para casos críticos",
      "Soporte integral durante fases de mayor riesgo",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera orientación sobre cuidados intensivos para mi mascota...",
  },
] as const;

const minimallyInvasiveServices: readonly ServiceSection[] = [
  {
    title: "Endoscopía y Procedimientos de Mínima Invasión",
    category: "Mínima invasión",
    description:
      "Alternativas diagnósticas y terapéuticas que reducen trauma quirúrgico, dolor y tiempo de recuperación en pacientes seleccionados.",
    imageSrc:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Equipo médico para procedimientos endoscópicos y mínima invasión",
    icon: Stethoscope,
    benefits: [
      "Endoscopía diagnóstica y terapéutica",
      "Procedimientos guiados con menor trauma",
      "Recuperación más rápida y seguimiento clínico cercano",
    ],
    whatsappMessage:
      "Hola Nuskë, me interesa conocer opciones de mínima invasión para mi mascota...",
  },
] as const;

const preventiveServices: readonly ServiceSection[] = [
  {
    title: "Consulta Médica y Seguimiento Preventivo",
    category: "Continuidad clínica",
    description:
      "Valoración médica continua para detectar cambios clínicos a tiempo, ajustar manejo y sostener la salud del paciente a largo plazo.",
    imageSrc:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Consulta veterinaria preventiva en un entorno clínico moderno",
    icon: Check,
    benefits: [
      "Consulta médica",
      "Vacunación",
      "Nutrición",
      "Control preventivo",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera agendar una consulta preventiva para mi mascota...",
  },
  {
    title: "Odontología Veterinaria",
    category: "Continuidad clínica",
    description:
      "Limpieza ultrasónica y valoración de salud oral para prevenir dolor, infecciones y complicaciones sistémicas asociadas al deterioro dental.",
    imageSrc:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Atención odontológica veterinaria en una clínica moderna",
    icon: Check,
    benefits: [
      "Limpieza ultrasónica profesional",
      "Prevención de enfermedad periodontal",
      "Salud oral como parte del bienestar general",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera informes sobre odontología veterinaria para mi mascota...",
  },
] as const;

export const digitalServices: readonly DigitalService[] = [
  {
    title: "Portal del Propietario",
    description:
      "Acceso a historial médico y resultados de laboratorio en línea para acompañar continuidad clínica y seguimiento informado del paciente.",
    whatsappMessage:
      "Hola Nuskë, quisiera más información sobre el Portal del Propietario...",
  },
  {
    title: "Telemedicina",
    description:
      "Consultas por video para orientación clínica y seguimientos médicos cuando el contexto del paciente permite una revisión remota segura.",
    whatsappMessage:
      "Hola Nuskë, me interesa agendar una consulta de telemedicina...",
  },
] as const;

export const capabilityBlocks: readonly ServiceCategoryBlock[] = [
  {
    title: "Urgencias y Paciente Crítico",
    description:
      "Capacidad hospitalaria central para estabilizar, monitorizar y sostener pacientes con mayor riesgo clínico.",
    services: urgentServices,
  },
  {
    title: "Cirugía Veterinaria Especializada",
    description:
      "Intervenciones quirúrgicas respaldadas por control anestésico avanzado y recuperación hospitalaria.",
    services: surgeryServices,
  },
  {
    title: "Diagnóstico Médico Avanzado",
    description:
      "Herramientas clínicas y diagnósticas para entender mejor al paciente y decidir con mayor precisión.",
    services: diagnosticServices,
  },
  {
    title: "Procedimientos de Mínima Invasión",
    description:
      "Capacidad diferenciadora para resolver e intervenir con menos trauma y una recuperación más ágil.",
    services: minimallyInvasiveServices,
  },
  {
    title: "Atención Integral y Preventiva",
    description:
      "Continuidad médica y seguimiento clínico para sostener salud, prevención y control a largo plazo.",
    services: preventiveServices,
  },
] as const;
