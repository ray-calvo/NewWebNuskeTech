import Image from "next/image";
import {
  Activity,
  Microscope,
  Monitor,
  ScanSearch,
} from "lucide-react";

import { FacilitiesGallery } from "@/features/marketing/components/FacilitiesGallery";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const equipment = [
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

export default function TecnologiaPage() {
  return (
    <main className="bg-background">
      <section className="px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="secondary">Nuskë Tech</Badge>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              Tecnología de Punta al Servicio de tu Mascota
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Infraestructura clínica, mínima invasión y herramientas diagnósticas
              que permiten actuar con precisión, rapidez y seguridad en cada caso.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <Badge variant="secondary">Equipamiento Médico</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Tecnología diseñada para diagnósticos rápidos y procedimientos más seguros.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Cada área técnica de Nuskë responde a una promesa concreta: resolver
              mejor los casos complejos con mayor visibilidad clínica y menor tiempo de respuesta.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {equipment.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="overflow-hidden border-primary/20 bg-white shadow-[0_24px_80px_-58px_rgba(29,63,104,0.35)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                  </div>

                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <Badge className="border-accent/20 bg-accent/10 text-primary">
                        Alta especialidad
                      </Badge>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <CardTitle className="text-slate-950">{item.title}</CardTitle>
                    <p className="text-base leading-7 text-slate-700">
                      {item.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {item.specs.map((spec) => (
                        <li
                          key={spec}
                          className="flex items-start gap-3 rounded-2xl bg-muted/10 px-4 py-3 text-sm leading-6 text-slate-700"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl space-y-3">
            <Badge variant="secondary">Recorrido por las Instalaciones</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Espacios hospitalarios pensados para intervenir, estabilizar y acompañar.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Desde el área de urgencias hasta hospitalización y quirófano, la experiencia
              debe transmitir confianza clínica desde el primer recorrido.
            </p>
          </div>
        </div>

        <FacilitiesGallery />
      </section>
    </main>
  );
}
