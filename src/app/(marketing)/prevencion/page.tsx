import type { Metadata } from "next";
import Link from "next/link";
import { HeartPulse, ShieldPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ClinicalBulletGrid,
  ClinicalSection,
} from "@/features/marketing/components/clinical/ClinicalSection";
import { PrevencionHero } from "@/features/marketing/components/prevencion/PrevencionHero";
import {
  preventionCapabilities,
  preventionDecisionContexts,
  preventionDifferentiators,
  preventionPhoneHref,
  preventionSupportCards,
  preventionWhatsAppHref,
} from "@/features/marketing/components/prevencion/data";

export const metadata: Metadata = {
  title: "Prevención",
  description:
    "Prevención clínica, seguimiento oportuno, vacunas y control preventivo veterinario para reducir urgencias y complicaciones evitables en Nuskë Vet Center.",
};

export default function PrevencionPage() {
  return (
    <main className="bg-background">
      <PrevencionHero />

      <ClinicalSection
        badge="Por qué prevenir cambia el curso del caso"
        title="Actuar antes puede evitar deterioro, urgencias y decisiones tardías"
        description="La prevención importa porque ayuda a detectar cambios antes de que el paciente se descompense, necesite una intervención mayor o llegue tarde a la valoración."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {preventionDecisionContexts.map((signal) => (
            <section
              key={signal.title}
              className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <HeartPulse aria-hidden={true} className="h-5 w-5" />
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
        badge="Cuidado anticipado"
        title="Prevención como detección oportuna, seguimiento y control responsable"
        description="La prevención clínica combina valoración médica, vacunas, desparasitación y monitoreo para decidir a tiempo qué conviene ajustar y qué vale la pena vigilar más de cerca."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {preventionCapabilities.map((capability) => {
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
                <ShieldPlus aria-hidden={true} className="h-4 w-4 text-accent" />
                Vacunas, control y seguimiento
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Vacunas, desparasitación, revisiones y monitoreo siguen una misma lógica: adelantarse al problema
              </h2>
              <p className="text-base leading-8 text-slate-100">
                La prevención bien llevada no se limita a aplicar algo o
                “venir al control”. Ayuda a revisar riesgos, ordenar prioridades
                y dar seguimiento a pacientes que conviene vigilar con más
                cuidado.
              </p>
              <ClinicalBulletGrid
                items={[
                  "Vacunar y desparasitar según etapa y riesgo",
                  "Revisar cambios antes de que se vuelvan urgencia",
                  "Detectar pacientes que necesitan seguimiento más cercano",
                  "Actuar antes de que el problema exija escalar",
                ]}
                tone="dark"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {preventionSupportCards.map((card) => {
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
        title="Lo que cambia cuando la prevención se toma en serio"
        description="Prevenir bien ayuda a actuar antes, reducir deterioro evitable y decidir con más criterio qué paciente necesita seguir de cerca y cuál no."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {preventionDifferentiators.map((item) => {
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
                Prevenir no es “hacer menos”, sino decidir antes de que el caso se complique
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                Esta página orienta hacia valoración preventiva y seguimiento.
                Si el paciente ya está descompensado, la ruta correcta sigue
                siendo urgencias. Si todavía hay margen para anticiparse, aquí
                conviene actuar antes.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-primary/10 bg-primary p-6 text-white shadow-[0_26px_80px_-52px_rgba(15,23,42,0.6)]">
              <h3 className="text-2xl font-semibold text-white">
                Acción recomendada
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Si necesitas una valoración preventiva, revisión clínica o
                seguimiento oportuno para tu mascota, contacta al hospital. Si
                el paciente presenta deterioro agudo, prioriza urgencias.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                >
                  <a href={preventionWhatsAppHref} target="_blank" rel="noreferrer">
                    Solicitar valoración
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <a href={preventionPhoneHref}>Llamar al hospital</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <Link href="/urgencias">Ir a urgencias 24/7</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
