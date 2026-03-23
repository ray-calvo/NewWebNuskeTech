import {
  Activity,
  Microscope,
  Monitor,
  ScanSearch,
} from "lucide-react";

import type { TechnologyEquipmentItem } from "@/features/marketing/components/technology/types";

export const equipment: readonly TechnologyEquipmentItem[] = [
  {
    title: "Torre de Endoscopía Mínima Invasión",
    description:
      "Diagnóstico e intervención con menos trauma quirúrgico y recuperación más ágil para el paciente.",
    imageSrc:
      "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Torre de endoscopía y equipamiento médico avanzado",
    icon: ScanSearch,
    specs: [
      "Diagnóstico y cirugía sin bisturí",
      "Menos dolor y sin suturas externas",
      "Resultados clínicos en 24h",
    ],
  },
  {
    title: "Imagenología Digital Doppler",
    description:
      "Resolución diagnóstica para tomar decisiones oportunas en casos complejos y pacientes críticos.",
    imageSrc:
      "https://images.unsplash.com/photo-1583912267550-d4bcddac42b4?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Equipo de imagenología y ultrasonido clínico",
    icon: Activity,
    specs: [
      "Rayos X de alta resolución",
      "Ultrasonido Doppler a color",
      "Evaluación rápida para urgencias",
    ],
  },
  {
    title: "Laboratorio Clínico In-situ",
    description:
      "Procesamiento inmediato para acelerar el diagnóstico y la estabilización del paciente.",
    imageSrc:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Laboratorio clínico con instrumentos diagnósticos",
    icon: Microscope,
    specs: [
      "Biometrías hemáticas",
      "Química sanguínea en 15 minutos",
      "Soporte inmediato a hospitalización",
    ],
  },
  {
    title: "Monitoreo Multiparamétrico",
    description:
      "Control anestésico y vigilancia continua con estándares de seguridad de nivel humano.",
    imageSrc:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Monitor médico multiparamétrico en entorno clínico",
    icon: Monitor,
    specs: [
      "Anestesia inhalada",
      "Control de signos vitales en tiempo real",
      "Seguridad avanzada para cirugía y casos críticos",
    ],
  },
] as const;
