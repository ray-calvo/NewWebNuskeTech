import { Bird, HeartPulse, PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  exoticHeroHighlights,
  exoticPhoneHref,
  exoticWhatsAppHref,
} from "./data";

export function ExoticosHero() {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#eef4fa_100%)] p-6 shadow-[0_34px_110px_-62px_rgba(15,23,42,0.32)] md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">Pacientes no convencionales</Badge>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                Valoración adaptada por especie
              </div>
            </div>

            <div className="max-w-4xl space-y-4">
              <h1 className="text-4xl font-semibold tracking-[-0.05em] text-primary sm:text-5xl lg:text-6xl lg:leading-[0.98]">
                Exóticos y Pacientes No Convencionales
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Aves, reptiles y pequeños mamíferos necesitan una valoración
                médica adaptada a su especie. Aquí importa reconocer cambios a
                tiempo, decidir con criterio y manejar al paciente sin
                infantilizarlo ni tratarlo como una rareza.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
              >
                <a href={exoticWhatsAppHref} target="_blank" rel="noreferrer">
                  <Bird aria-hidden={true} className="h-4 w-4" />
                  Solicitar valoración
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-primary/15 bg-white text-primary hover:bg-primary/5"
              >
                <a href={exoticPhoneHref}>
                  <PhoneCall aria-hidden={true} className="h-4 w-4" />
                  Llamar al hospital
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {exoticHeroHighlights.map((highlight) => (
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
                Cuándo actuar más rápido
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Si el paciente está débil, con dificultad para respirar o
                claramente descompensado, la entrada correcta sigue siendo
                urgencias.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Esta página orienta la valoración clínica de pacientes
                exóticos. Cuando hay compromiso agudo, primero hay que
                estabilizar y luego decidir diagnóstico, hospitalización o
                procedimiento según el caso.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                <HeartPulse aria-hidden={true} className="h-4 w-4" />
                Soporte oportuno para pacientes frágiles
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
