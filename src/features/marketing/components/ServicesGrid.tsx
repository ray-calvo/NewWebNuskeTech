import Link from "next/link";
import {
  Dog,
  Microscope,
  ScanSearch,
  Stethoscope,
  Syringe,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Urgencias 24/7",
    description:
      "Atención inmediata, hospitalización continua y respuesta médica para pacientes críticos en cualquier momento del día.",
    badge: "Atención 24h",
    icon: Zap,
    className:
      "md:col-span-2 border-primary bg-primary text-white shadow-[0_28px_90px_-48px_rgba(29,63,104,0.85)]",
    badgeVariant: "outline" as const,
    badgeClassName: "border-accent/20 bg-white text-primary",
    iconWrapClassName: "bg-white/10 text-accent ring-1 ring-white/10",
    titleClassName: "text-white",
    descriptionClassName: "text-white",
    accent: (
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#ff0000] via-[#ff6b6b] to-transparent" />
    ),
    body: (
      <div className="space-y-4 pt-2">
        <div className="grid gap-3 text-sm text-white sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            Hospital Veterinario 24h Verificado
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            Monitoreo y protocolos de alta especialidad
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
          <p className="text-sm font-medium text-white">
            ¿No sabes qué tan urgente es lo que estás viendo?
          </p>
          <p className="mt-2 text-sm leading-6 text-white/80">
            Usa nuestro triage orientativo para recibir una guía inicial antes
            de decidir el siguiente paso.
          </p>
          <Link
            href="/triage?entrypoint=services-grid-urgencias"
            className="mt-3 inline-flex text-sm font-semibold text-white underline-offset-4 hover:underline"
          >
            Abrir triage orientativo
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Cirugía Especializada",
    description:
      "Procedimientos complejos con monitoreo multiparamétrico y protocolos de alta especialidad.",
    badge: "Especialidad",
    icon: Syringe,
    className: "aspect-square",
    badgeVariant: "default" as const,
    badgeClassName: "border-accent/20 bg-accent/10 text-primary",
    titleClassName: "text-slate-950",
    descriptionClassName: "text-slate-700",
  },
  {
    title: "Mínima Invasión",
    description:
      "Endoscopía y laparoscopía con recuperación acelerada y menor dolor para el paciente.",
    badge: "Alta Tecnología",
    icon: Stethoscope,
    className: "aspect-square",
    badgeVariant: "secondary" as const,
    badgeClassName: "border-accent/20 bg-accent/10 text-primary",
    titleClassName: "text-slate-950",
    descriptionClassName: "text-slate-700",
  },
  {
    title: "Imagenología",
    description:
      "Rayos X digitales y ultrasonido Doppler para decisiones diagnósticas oportunas en casos complejos.",
    badge: "Diagnóstico",
    icon: ScanSearch,
    className: "",
    badgeVariant: "secondary" as const,
    badgeClassName: "border-accent/20 bg-accent/10 text-primary",
    titleClassName: "text-slate-950",
    descriptionClassName: "text-slate-700",
  },
  {
    title: "Exóticos",
    description:
      "Atención clínica para especies no convencionales con protocolos y valoración especializada.",
    badge: "Casos Complejos",
    icon: Dog,
    className: "",
    badgeVariant: "outline" as const,
    badgeClassName: "border-accent/20 bg-accent/10 text-primary",
    titleClassName: "text-slate-950",
    descriptionClassName: "text-slate-700",
  },
  {
    title: "Laboratorio",
    description:
      "Pruebas de sangre, citologías y diagnósticos rápidos en sitio para apoyar urgencias y hospitalización.",
    badge: "In-house",
    icon: Microscope,
    className: "",
    badgeVariant: "outline" as const,
    badgeClassName: "border-accent/20 bg-accent/10 text-primary",
    titleClassName: "text-slate-950",
    descriptionClassName: "text-slate-700",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <Badge variant="secondary">Servicios de especialidad</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Servicios reales para resolver desde urgencias hasta casos complejos.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Nuskë integra urgencias 24h, cirugía especializada, mínima invasión,
            imagenología, laboratorio in-house y atención para especies exóticas en
            un mismo centro hospitalario.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className={[
                  "group relative overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-primary",
                  service.className,
                ].join(" ")}
              >
                {service.accent}
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <Badge
                      variant={service.badgeVariant}
                      className={service.badgeClassName}
                    >
                      {service.badge}
                    </Badge>
                    <div
                      className={[
                        "flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-105",
                        service.iconWrapClassName ?? "",
                      ].join(" ")}
                    >
                      <Icon className="h-8 w-8 opacity-100" aria-hidden="true" />
                    </div>
                  </div>
                  <CardTitle className={service.titleClassName}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription
                    className={["text-base", service.descriptionClassName ?? ""].join(
                      " "
                    )}
                  >
                    {service.description}
                  </CardDescription>
                  {service.body}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-start">
          <Link
            href="/servicios"
            className="inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Explorar todas las especialidades
          </Link>
        </div>
      </div>
    </section>
  );
}
