import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  HeartPulse,
  PhoneCall,
  ShieldPlus,
  Siren,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const heroImage =
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=80";

const authorityPoints = [
  "Cuidados intensivos y vigilancia hospitalaria continua",
  "Cirugía avanzada para pacientes complejos y críticos",
  "Diagnóstico hospitalario para respuesta clínica oportuna",
];

export function Hero() {
  return (
    <section className="px-4 pb-10 pt-5 sm:px-6 lg:px-8 lg:pb-12 lg:pt-6">
      <div className="mx-auto grid max-w-7xl gap-6 overflow-hidden rounded-[2.2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(237,243,250,0.94))] p-5 shadow-[0_36px_120px_-76px_rgba(15,23,42,0.56)] md:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(460px,1fr)] lg:items-center lg:gap-10 lg:p-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full border border-primary/15 bg-primary/8 px-4 py-1 text-sm font-semibold text-primary">
                Hospital veterinario 24/7
              </span>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Guardia hospitalaria activa 24/7
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-primary sm:text-5xl lg:text-[4.35rem] lg:leading-[0.94]">
                Alta especialidad veterinaria para casos críticos
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Hospital veterinario 24/7 con cirugía avanzada, cuidados
                intensivos y diagnóstico hospitalario. Diseñado para responder
                con velocidad clínica, criterio médico y continuidad de atención
                en pacientes complejos.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-2xl bg-[#a60f14] px-6 text-white shadow-[0_18px_46px_-24px_rgba(103,8,12,0.9)] hover:bg-[#8d1014]"
            >
              <a href="tel:+524433246136">
                <PhoneCall aria-hidden={true} className="h-4 w-4" />
                Emergencia ahora
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-2xl border-primary/15 bg-white text-primary hover:bg-primary/5"
            >
              <Link href="/contacto">
                Agendar valoración
                <ArrowRight aria-hidden={true} className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-3">
            {authorityPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.18)]"
              >
                <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-12 hidden h-40 w-40 rounded-full bg-primary/10 blur-3xl lg:block" />
          <div className="absolute -right-6 bottom-10 hidden h-44 w-44 rounded-full bg-destructive/10 blur-3xl lg:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-950 shadow-[0_34px_100px_-62px_rgba(15,23,42,0.6)]">
            <div className="relative min-h-[560px]">
              <Image
                src={heroImage}
                alt="Área hospitalaria veterinaria con equipo médico y entorno clínico de alta complejidad"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,17,28,0.18),rgba(9,17,28,0.74))]" />
            </div>

            <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 border-b border-white/10 bg-slate-950/42 px-6 py-4 text-white backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Siren className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
                    Respuesta crítica
                  </p>
                  <p className="text-sm text-white/75">
                    Guardia hospitalaria y estabilización inmediata
                  </p>
                </div>
              </div>
              <div className="hidden rounded-full border border-emerald-300/30 bg-emerald-400/12 px-4 py-2 text-sm font-semibold text-emerald-100 sm:inline-flex">
                Activo 24/7
              </div>
            </div>

            <div className="absolute inset-x-6 bottom-6 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/78 p-5 text-white backdrop-blur">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <HeartPulse className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                      Capacidad hospitalaria
                    </p>
                    <p className="text-base font-semibold text-white">
                      Atención inmediata para pacientes críticos
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-200">
                  Equipo médico preparado para urgencias, hospitalización,
                  vigilancia intensiva y continuidad quirúrgica en casos de alta
                  complejidad.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/12 bg-white/92 p-5 text-slate-900 backdrop-blur">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Activity className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                      Operación clínica
                    </p>
                    <p className="text-base font-semibold text-slate-950">
                      Cirugía avanzada y diagnóstico hospitalario
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm leading-6 text-slate-600">
                  <div className="flex items-start gap-2">
                    <ShieldPlus className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    Protocolos médicos para estabilización, monitoreo y decisión rápida.
                  </div>
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    Resolución hospitalaria desde urgencias hasta procedimientos complejos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
