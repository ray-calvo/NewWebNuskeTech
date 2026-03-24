import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ClinicalBulletGrid,
  ClinicalSection,
} from "@/features/marketing/components/clinical/ClinicalSection";
import {
  criticalCareCapabilities,
  differentiators,
  finalActions,
  immediateSignals,
  mapsHref,
  supportCards,
  urgentPhoneHref,
  urgentWhatsAppHref,
} from "@/features/marketing/components/urgencias/data";
import { UrgenciasHero } from "@/features/marketing/components/urgencias/UrgenciasHero";

export const metadata: Metadata = {
  title: "Urgencias",
  description:
    "Atención veterinaria inmediata para pacientes críticos, estabilización, hospitalización y respuesta hospitalaria 24/7 en Nuskë Vet Center.",
};

export default function UrgenciasPage() {
  return (
    <main className="bg-background">
      <UrgenciasHero />

      <ClinicalSection
        badge="Cuándo acudir de inmediato"
        title="Situaciones que requieren acción inmediata"
        description="Si observas cualquiera de estas señales, no conviene esperar a una consulta programada. La prioridad es mover al paciente hacia valoración médica inmediata."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {immediateSignals.map((signal) => (
            <section
              key={signal.title}
              className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#a60f14]/10 text-[#a60f14]">
                  <TriangleAlert aria-hidden={true} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {signal.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {signal.description}
              </p>
            </section>
          ))}
        </div>
      </ClinicalSection>

      <ClinicalSection
        badge="Paciente crítico"
        title="Atención hospitalaria para estabilizar y sostener al paciente crítico"
        description="La urgencia no termina en la recepción. La página madre debe comunicar que Nuskë puede evaluar, estabilizar, monitorear y decidir el siguiente paso clínico dentro de una lógica hospitalaria continua."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {criticalCareCapabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <section
                key={capability.title}
                className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Icon aria-hidden={true} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {capability.description}
                </p>
              </section>
            );
          })}
        </div>
      </ClinicalSection>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[linear-gradient(135deg,#1d3f68_0%,#16314f_70%,#11263d_100%)] p-6 text-white shadow-[0_34px_110px_-62px_rgba(15,23,42,0.58)] md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <Monitor aria-hidden={true} className="h-4 w-4 text-accent" />
                Hospitalización y monitoreo continuo
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Submódulo hospitalario para pacientes que necesitan quedarse bajo vigilancia
              </h2>
              <p className="text-base leading-8 text-slate-100">
                No todos los pacientes críticos se resuelven en la primera
                intervención. Algunos requieren observación, reevaluación,
                control de dolor, terapia de soporte y seguimiento estrecho
                antes de decidir alta, cirugía o siguiente intervención.
              </p>
              <ClinicalBulletGrid
                items={[
                  "Observación clínica continua",
                  "Reevaluación según evolución",
                  "Menor fricción entre urgencias y tratamiento",
                  "Continuidad dentro del mismo entorno hospitalario",
                ]}
                tone="dark"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {supportCards.map((card) => {
                const Icon = card.icon;
                return (
                  <section
                    key={card.title}
                    className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon aria-hidden={true} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-100">
                      {card.description}
                    </p>
                    <div className="mt-5 space-y-2">
                      {card.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-medium text-white"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ClinicalSection
        badge="Diferenciadores hospitalarios"
        title="Lo que esta página debe comunicar sobre la capacidad real del hospital"
        description="La urgencia debe sentirse como operación clínica seria, no como anuncio aislado. Estos diferenciadores sostienen la lectura premium y hospitalaria de Nuskë."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <section
                key={item.title}
                className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Icon aria-hidden={true} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </section>
            );
          })}
        </div>
      </ClinicalSection>

      <section className="px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.2)] md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">
                Si el cuadro parece urgente, reduce pasos y contacta al hospital de inmediato
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                El objetivo de esta página es orientar a la acción correcta:
                llamar, escribir, llegar o usar triage como apoyo secundario
                cuando todavía no hay claridad.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {finalActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <section
                      key={action.title}
                      className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-primary">
                        <Icon aria-hidden={true} className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-primary">
                        {action.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {action.description}
                      </p>
                    </section>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-primary/10 bg-primary p-6 text-white shadow-[0_26px_80px_-52px_rgba(15,23,42,0.6)]">
              <h3 className="text-2xl font-semibold text-white">
                Acción inmediata
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Si tu mascota tiene deterioro rápido, dificultad respiratoria,
                trauma importante o dolor agudo intenso, prioriza contacto y
                traslado.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                >
                  <a href={urgentPhoneHref}>Llamar ahora</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <a
                    href={urgentWhatsAppHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp inmediato
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <a href={mapsHref} target="_blank" rel="noreferrer">
                    Cómo llegar
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <Link href="/triage?entrypoint=urgencias-page-final-cta">
                    Abrir triage orientativo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
