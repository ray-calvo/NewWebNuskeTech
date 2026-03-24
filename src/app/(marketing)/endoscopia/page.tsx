import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ClinicalBulletGrid,
  ClinicalSection,
} from "@/features/marketing/components/clinical/ClinicalSection";
import { EndoscopiaHero } from "@/features/marketing/components/endoscopia/EndoscopiaHero";
import {
  endoscopyCapabilities,
  endoscopyDifferentiators,
  endoscopyPhoneHref,
  endoscopySupport,
  endoscopyUseCases,
  endoscopyWhatsAppHref,
} from "@/features/marketing/components/endoscopia/data";

export const metadata: Metadata = {
  title: "Endoscopía",
  description:
    "Endoscopía y mínima invasión veterinaria para diagnóstico y procedimientos con menor trauma y recuperación más ágil en Nuskë Vet Center.",
};

export default function EndoscopiaPage() {
  return (
    <main className="bg-background">
      <EndoscopiaHero />

      <ClinicalSection
        badge="Qué es y por qué importa"
        title="La endoscopía permite evaluar y, en algunos casos, resolver con menor agresión"
        description="La página madre de endoscopía debe explicar su valor clínico: visualizar mejor, intervenir con menor trauma en casos seleccionados y aportar una ruta menos invasiva cuando el paciente puede beneficiarse de ella."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {endoscopyUseCases.map((signal) => (
            <section
              key={signal.title}
              className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Camera aria-hidden={true} className="h-5 w-5" />
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
        badge="Capacidad especializada"
        title="Endoscopía como evaluación y resolución mínimamente invasiva"
        description="La endoscopía se presenta aquí como capacidad procedimental especializada que puede observar, apoyar decisiones y en ciertos casos resolver sin necesidad de un abordaje más agresivo."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {endoscopyCapabilities.map((capability) => {
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
                <Waves aria-hidden={true} className="h-4 w-4 text-accent" />
                Mínima invasión como valor clínico
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                El valor de la mínima invasión está en resolver con menos trauma cuando el caso lo permite
              </h2>
              <p className="text-base leading-8 text-slate-100">
                La mínima invasión ya no vive como página separada porque aquí
                encuentra su sentido clínico real: apoyar evaluación y
                tratamiento con un abordaje potencialmente más ágil y menos
                agresivo para pacientes bien seleccionados.
              </p>
              <ClinicalBulletGrid
                items={[
                  "Menor agresión de tejidos cuando el caso lo permite",
                  "Recuperación potencialmente más ágil",
                  "Mejor puente entre evaluación y resolución",
                  "Criterio procedimental dentro del entorno hospitalario",
                ]}
                tone="dark"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {endoscopySupport.map((card) => {
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
        title="Lo que esta página debe comunicar sobre la endoscopía dentro del hospital"
        description="La endoscopía no debe sonar a landing tecnológica ni a catálogo de procedimientos. Debe sonar a capacidad clínica especializada con valor procedimental propio."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {endoscopyDifferentiators.map((item) => {
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
                La decisión correcta no es “hacer endoscopía siempre”, sino saber cuándo aporta una ruta menos invasiva y más precisa
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                Esta página orienta hacia valoración especializada de
                endoscopía. Si el paciente está inestable, la ruta correcta
                puede empezar en urgencias. Si el caso requiere soporte
                diagnóstico más amplio o cirugía, esta capacidad se integra sin
                sustituirlas.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-primary/10 bg-primary p-6 text-white shadow-[0_26px_80px_-52px_rgba(15,23,42,0.6)]">
              <h3 className="text-2xl font-semibold text-white">
                Acción recomendada
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Si buscas orientación sobre endoscopía o una opción
                mínimamente invasiva para un caso complejo, contacta al
                hospital. Si el paciente está comprometido, prioriza urgencias.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                >
                  <a href={endoscopyWhatsAppHref} target="_blank" rel="noreferrer">
                    Solicitar valoración
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <a href={endoscopyPhoneHref}>Llamar al hospital</a>
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
