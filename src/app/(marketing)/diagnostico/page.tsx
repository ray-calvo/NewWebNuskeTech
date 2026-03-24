import type { Metadata } from "next";
import Link from "next/link";
import { Microscope, ScanSearch } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ClinicalBulletGrid,
  ClinicalSection,
} from "@/features/marketing/components/clinical/ClinicalSection";
import { DiagnosticoHero } from "@/features/marketing/components/diagnostico/DiagnosticoHero";
import {
  diagnosticCapabilities,
  diagnosticDifferentiators,
  diagnosticsDecisionContexts,
  diagnosticsPhoneHref,
  diagnosticsWhatsAppHref,
  transversalSupport,
} from "@/features/marketing/components/diagnostico/data";

export const metadata: Metadata = {
  title: "Diagnóstico",
  description:
    "Diagnóstico hospitalario para casos complejos, soporte clínico, imagenología y laboratorio veterinario en Nuskë Vet Center.",
};

export default function DiagnosticoPage() {
  return (
    <main className="bg-background">
      <DiagnosticoHero />

      <ClinicalSection
        badge="Por qué cambia decisiones clínicas"
        title="El diagnóstico hospitalario cambia el rumbo del caso cuando la clínica sola no alcanza"
        description="Cuando la exploración no basta para entender el problema, contar con mejor información ayuda a decidir con más seguridad qué hacer primero y qué puede esperar."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {diagnosticsDecisionContexts.map((signal) => (
            <section
              key={signal.title}
              className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <ScanSearch aria-hidden={true} className="h-5 w-5" />
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
        badge="Capacidad diagnóstica"
        title="Imagenología, laboratorio y evaluación complementaria como sistema integrado"
        description="Imagenología, laboratorio y evaluación complementaria ayudan a confirmar sospechas, ajustar prioridades y reducir la incertidumbre cuando el caso es más complejo."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {diagnosticCapabilities.map((capability) => {
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
                <Microscope aria-hidden={true} className="h-4 w-4 text-accent" />
                Capacidad transversal del hospital
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                El diagnóstico sostiene urgencias, cirugía, hospitalización y seguimiento
              </h2>
              <p className="text-base leading-8 text-slate-100">
                La página diagnóstica debe comunicar que su valor no está en
                separar al paciente en estudios, sino en articular la lectura
                clínica del caso a lo largo de su evolución dentro del hospital.
              </p>
              <ClinicalBulletGrid
                items={[
                  "Apoya decisiones en cuadros agudos y pacientes inestables",
                  "Permite planificar mejor procedimientos e intervenciones",
                  "Ayuda a reevaluar evolución y respuesta clínica",
                  "Sostiene continuidad entre hospitalización y seguimiento",
                ]}
                tone="dark"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {transversalSupport.map((card) => {
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
        title="Lo que cambia cuando el caso se entiende mejor"
        description="Una mejor correlación diagnóstica ayuda a evitar intervenciones innecesarias, acelerar el tratamiento correcto y decidir con menos duda."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {diagnosticDifferentiators.map((item) => {
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
                La pregunta correcta no es solo qué estudio hacer, sino qué decisión clínica necesita el paciente
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                Esta página orienta hacia una valoración diagnóstica
                hospitalaria y la lectura clínica del caso. Si el paciente
                está inestable, prioriza urgencias. Si la necesidad es
                procedimental, esta ruta acompaña pero no reemplaza cirugía o
                endoscopía.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-primary/10 bg-primary p-6 text-white shadow-[0_26px_80px_-52px_rgba(15,23,42,0.6)]">
              <h3 className="text-2xl font-semibold text-white">
                Acción recomendada
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Si necesitas una valoración diagnóstica o orientación clínica
                para un caso complejo, contacta al hospital. Si el paciente
                está descompensado, la ruta correcta sigue siendo urgencias.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                >
                  <a
                    href={diagnosticsWhatsAppHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solicitar valoración
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <a href={diagnosticsPhoneHref}>Llamar al hospital</a>
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
