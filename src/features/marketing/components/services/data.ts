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

const specialtyServices: readonly ServiceSection[] = [
  {
    title: "Cirugía de Tejidos Blandos y Ortopedia",
    category: "Especialidades",
    description:
      "Procedimientos complejos respaldados por monitoreo multiparamétrico, anestesia inhalada y protocolos de alta especialidad para resolver casos quirúrgicos con mayor seguridad.",
    imageSrc:
      "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Quirófano veterinario con instrumentación y monitorización avanzada",
    icon: Syringe,
    benefits: [
      "Procedimientos complejos con monitoreo multiparamétrico",
      "Anestesia inhalada y control avanzado de signos vitales",
      "Recuperación quirúrgica con vigilancia hospitalaria",
    ],
    whatsappMessage:
      "Hola Nuskë, solicito informes sobre una cirugía especializada para mi mascota...",
  },
  {
    title: "Mínima Invasión (Endoscopía y Laparoscopía)",
    category: "Especialidades",
    description:
      "La torre de endoscopía permite diagnosticar e intervenir sin grandes incisiones, con menos trauma quirúrgico, recuperación acelerada y menor dolor para el paciente.",
    imageSrc:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Equipo médico para procedimientos endoscópicos y mínima invasión",
    icon: Stethoscope,
    benefits: [
      "Recuperación acelerada y menor dolor",
      "Sin suturas externas en muchos casos",
      "Resultados diagnósticos y terapéuticos en 24h",
    ],
    whatsappMessage:
      "Hola Nuskë, me interesa conocer más sobre el procedimiento de mínima invasión...",
  },
  {
    title: "Imagenología Avanzada",
    category: "Especialidades",
    description:
      "Rayos X digitales de alta frecuencia y ultrasonido Doppler a color para apoyar decisiones diagnósticas más rápidas y mejor informadas en pacientes complejos.",
    imageSrc:
      "https://images.unsplash.com/photo-1583912267550-d4bcddac42b4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Equipo de imagenología y ultrasonido clínico",
    icon: ScanSearch,
    benefits: [
      "Rayos X de alta resolución",
      "Ultrasonido Doppler a color",
      "Soporte rápido a cirugía, urgencias y hospitalización",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera recibir información sobre estudios de imagenología para mi mascota...",
  },
  {
    title: "Laboratorio Clínico In-house",
    category: "Especialidades",
    description:
      "Pruebas de sangre, citologías y diagnósticos rápidos en sitio para respaldar urgencias, hospitalización y seguimiento clínico sin depender de tiempos externos.",
    imageSrc:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Laboratorio clínico con instrumentos diagnósticos",
    icon: Microscope,
    benefits: [
      "Biometrías y química sanguínea en minutos",
      "Diagnósticos rápidos sin salir del hospital",
      "Soporte inmediato a decisiones críticas",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera información sobre estudios de laboratorio clínico para mi mascota...",
  },
  {
    title: "Medicina de Animales Exóticos",
    category: "Especialidades",
    description:
      "Nuskë cuenta con especialistas certificados para aves, reptiles y pequeños mamíferos, ofreciendo valoración clínica, ambiente controlado y protocolos adaptados a especies no convencionales.",
    imageSrc:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Consulta clínica para especies exóticas en un entorno veterinario controlado",
    icon: Stethoscope,
    benefits: [
      "Manejo clínico especializado para aves y reptiles",
      "Ambiente controlado para reducir estrés",
      "Protocolos adaptados a especies no convencionales",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera agendar una consulta para mi ejemplar exótico...",
  },
] as const;

const urgentServices: readonly ServiceSection[] = [
  {
    title: "Urgencias y Triage",
    category: "Urgencias",
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
    category: "Urgencias",
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
    category: "Urgencias",
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

const preventiveServices: readonly ServiceSection[] = [
  {
    title: "Odontología Veterinaria",
    category: "Preventivos",
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
  {
    title: "Estética Veterinaria y Guardería",
    category: "Preventivos",
    description:
      "Servicios de grooming y daycare para acompañar el bienestar cotidiano de cada mascota en un entorno seguro y controlado.",
    imageSrc:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Espacio seguro de guardería y grooming veterinario",
    icon: Stethoscope,
    benefits: [
      "Baño y corte profesional",
      "Espacio seguro para estancia diaria",
      "Rutinas de cuidado complementarias al seguimiento médico",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera información sobre grooming o guardería para mi mascota...",
  },
] as const;

export const digitalServices: readonly DigitalService[] = [
  {
    title: "Portal del Propietario",
    description:
      "Acceso a historial médico y resultados de laboratorio en línea para que cada familia pueda revisar información clínica sin esperar llamadas o impresiones físicas.",
    whatsappMessage:
      "Hola Nuskë, quisiera más información sobre el Portal del Propietario...",
  },
  {
    title: "Telemedicina",
    description:
      "Consultas por video para triaje y seguimientos médicos cuando el contexto del paciente permite una orientación remota segura.",
    whatsappMessage:
      "Hola Nuskë, me interesa agendar una consulta de telemedicina...",
  },
] as const;

export const categoryBlocks: readonly ServiceCategoryBlock[] = [
  {
    title: "Especialidades",
    description:
      "Tecnología, cirugía, mínima invasión y diagnóstico para casos que exigen precisión clínica y seguimiento experto.",
    services: specialtyServices,
  },
  {
    title: "Urgencias",
    description:
      "Atención hospitalaria continua para estabilizar, monitorear y acompañar a pacientes en estado delicado.",
    services: urgentServices,
  },
  {
    title: "Preventivos",
    description:
      "Servicios pensados para acompañar la salud diaria, reducir riesgos y construir bienestar a largo plazo.",
    services: preventiveServices,
  },
] as const;
