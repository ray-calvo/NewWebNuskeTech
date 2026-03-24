import Link from "next/link";
import { HeartPulse, MapPin, PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { heroHighlights, mapsHref, urgentPhoneHref, urgentWhatsAppHref } from "./data";

export function UrgenciasHero() {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#eef4fa_100%)] p-6 shadow-[0_34px_110px_-62px_rgba(15,23,42,0.32)] md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">Urgencias y paciente crítico</Badge>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Guardia hospitalaria activa 24/7
              </div>
            </div>

            <div className="max-w-4xl space-y-4">
              <h1 className="text-4xl font-semibold tracking-[-0.05em] text-primary sm:text-5xl lg:text-6xl lg:leading-[0.98]">
                Urgencias Veterinarias y Paciente Crítico 24/7
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Atención inmediata para pacientes que llegan con trauma, dolor
                agudo, compromiso respiratorio, descompensación sistémica o
                deterioro rápido. La urgencia se aborda como proceso
                hospitalario completo: valoración, estabilización, monitoreo y
                continuidad clínica.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-2xl bg-[#a60f14] px-6 text-white shadow-[0_18px_46px_-24px_rgba(103,8,12,0.9)] hover:bg-[#8d1014]"
              >
                <a href={urgentPhoneHref}>
                  <PhoneCall aria-hidden={true} className="h-4 w-4" />
                  Llamar ahora
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-primary/15 bg-white text-primary hover:bg-primary/5"
              >
                <a href={urgentWhatsAppHref} target="_blank" rel="noreferrer">
                  <HeartPulse aria-hidden={true} className="h-4 w-4" />
                  WhatsApp inmediato
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-primary/15 bg-white text-primary hover:bg-primary/5"
              >
                <a href={mapsHref} target="_blank" rel="noreferrer">
                  <MapPin aria-hidden={true} className="h-4 w-4" />
                  Cómo llegar
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {heroHighlights.map((highlight) => (
              <section
                key={highlight.title}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
              >
                <h2 className="text-lg font-semibold text-primary">
                  {highlight.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {highlight.description}
                </p>
              </section>
            ))}

            <section className="rounded-[1.6rem] border border-primary/10 bg-primary p-5 text-white shadow-[0_20px_60px_-36px_rgba(15,23,42,0.5)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Orientación inicial
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Si aún no sabes si debes salir de inmediato, usa el triage como
                apoyo secundario.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                El triage no sustituye valoración médica, pero puede ayudarte a
                priorizar la acción cuando el cuadro todavía no es claro.
              </p>
              <Link
                href="/triage?entrypoint=urgencias-page-hero"
                className="mt-4 inline-flex text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                Abrir triage orientativo
              </Link>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
