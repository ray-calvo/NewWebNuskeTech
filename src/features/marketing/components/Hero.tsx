import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, HeartPulse, ShieldPlus, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";

const heroImage = "/marketing/hero/hero-placeholder.svg";

const authorityPoints = [
  "Alta especialidad para pacientes complejos",
  "Tecnología de mínima invasión y diagnóstico digital",
  "Atención humana con respuesta de urgencias 24/7",
];

export function Hero() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-white/70 bg-white/82 p-6 shadow-[0_30px_120px_-70px_rgba(15,23,42,0.55)] backdrop-blur md:p-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)] lg:items-center lg:gap-12 lg:p-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-primary/15 bg-primary/8 px-4 py-1 text-sm font-semibold text-primary">
              Expertos en casos complejos
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-[4.2rem] lg:leading-[0.96]">
                Alta especialidad veterinaria con enfoque humano y tecnología de mínima invasión.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                En Nuskë Vet Center atendemos pacientes que requieren precisión,
                experiencia médica y equipamiento avanzado. Unimos cirugía de alta
                especialidad, imagenología digital y mínima invasión con una atención
                cercana para tu mascota y tu familia.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 bg-primary px-6 text-primary-foreground hover:bg-secondary"
            >
              <Link href="/contacto">Agendar Cita</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-accent bg-accent/10 text-secondary hover:bg-accent/20 hover:text-primary"
            >
              <Link href="/servicios">Ver Servicios</Link>
            </Button>
          </div>

          <div className="grid gap-3">
            {authorityPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3"
              >
                <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-10 hidden h-36 w-36 rounded-full bg-muted/30 blur-3xl lg:block" />
          <div className="absolute -right-6 bottom-8 hidden h-40 w-40 rounded-full bg-primary/18 blur-3xl lg:block" />

          <div className="relative rounded-[2rem] border border-slate-200/70 bg-slate-950 p-3 shadow-[0_30px_100px_-60px_rgba(2,132,199,0.6)]">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                src={heroImage}
                alt="Equipo veterinario en una clínica moderna atendiendo a un paciente con tecnología especializada"
                width={1400}
                height={1200}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
            </div>

            <div className="absolute inset-x-8 bottom-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/82 p-4 text-white backdrop-blur">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/45 text-white">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Mínima Invasión
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Endoscopía y procedimientos menos dolorosos con recuperación más ágil.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/92 p-4 text-slate-900 backdrop-blur">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                    <HeartPulse className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Urgencias 24/7</p>
                    <p className="text-xs text-slate-500">Respuesta inmediata y monitoreo continuo</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <ShieldPlus className="h-4 w-4 text-primary" aria-hidden="true" />
                  Certificación PROCERVET y protocolos de alta especialidad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
