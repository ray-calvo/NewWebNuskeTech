import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ClinicalBulletGrid,
  ClinicalSection,
} from "@/features/marketing/components/clinical/ClinicalSection";
import { CirugiaHero } from "@/features/marketing/components/cirugia/CirugiaHero";
import {
  anesthesiaCapabilities,
  surgeryCapabilities,
  surgerySupportCards,
  surgicalAssessmentSignals,
  surgicalDifferentiators,
} from "@/features/marketing/components/cirugia/data";
import { resolveClinicalUiConsumptionForPage } from "@/lib/clinical-runtime/application";

export const metadata: Metadata = {
  title: "Cirugía",
  description:
    "Cirugía veterinaria hospitalaria con control anestésico, monitoreo y seguimiento postoperatorio en Nuskë Vet Center.",
};

export default function CirugiaPage() {
  const { uiModel: clinicalUiModel, consumption: runtimeConsumption } =
    resolveClinicalUiConsumptionForPage({
      pathname: "/cirugia",
    });
  const finalPrimaryAction = runtimeConsumption.primaryCta;
  const finalSecondaryAction = runtimeConsumption.secondaryCta;

  return (
    <main className="bg-background">
      <CirugiaHero clinicalUiModel={clinicalUiModel} />

      <ClinicalSection
        badge="Cuándo puede necesitar cirugía"
        title="Hay casos en los que tu mascota puede necesitar una cirugía"
        description="No todos los pacientes llegan a cirugía por la misma razón. A veces aparece como una urgencia, otras como un problema que avanza con el tiempo o como un hallazgo que necesita resolverse con un procedimiento planeado."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {surgicalAssessmentSignals.map((signal) => (
            <section
              key={signal.title}
              className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
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
        badge="Capacidad quirúrgica"
        title="Cuando una mascota necesita cirugía, importa hacerlo con seguridad"
        description="No solo se trata de operar. También importa valorar bien al paciente, decidir el mejor momento y acompañar su recuperación dentro de un entorno hospitalario."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {surgeryCapabilities.map((capability) => {
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
                Seguridad anestésica y monitoreo
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Una cirugía segura también depende de la anestesia, la vigilancia y el control clínico
              </h2>
              <p className="text-base leading-8 text-slate-100">
                La seguridad de un procedimiento no depende solo de la cirugía en sí. También cuenta la evaluación previa, el monitoreo durante el procedimiento y el soporte que recibe tu mascota al recuperarse.
              </p>
              <ClinicalBulletGrid
                items={[
                  "Valoración prequirúrgica según el estado del paciente",
                  "Monitoreo continuo durante el procedimiento",
                  "Control de dolor y apoyo durante la recuperación",
                  "Decisiones médicas con criterio hospitalario antes, durante y después",
                ]}
                tone="dark"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {anesthesiaCapabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <section
                    key={capability.title}
                    className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon aria-hidden={true} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-100">
                      {capability.description}
                    </p>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ClinicalSection
        badge="Planeación y recuperación"
        title="La cirugía funciona mejor cuando también se planea y se acompaña bien"
        description="El procedimiento es solo una parte. También importa el apoyo diagnóstico, la preparación del caso y el seguimiento después de la cirugía."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {surgerySupportCards.map((card) => {
            const Icon = card.icon;
            return (
              <section
                key={card.title}
                className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Icon aria-hidden={true} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {card.description}
                </p>
                <div className="mt-5 space-y-2">
                  {card.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </ClinicalSection>

      <ClinicalSection
        badge="Lo que hace la diferencia"
        title="Cuando una cirugía se decide bien, cambia todo alrededor del procedimiento"
        description="Importa saber cuándo conviene operar, cómo se reduce el riesgo y cómo se vigila la recuperación para detectar a tiempo cualquier cambio importante."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {surgicalDifferentiators.map((item) => {
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
                No siempre se trata de operar de inmediato, sino de valorar bien y tomar la mejor decisión para tu mascota
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                Esta página te orienta cuando puede hacer falta una valoración quirúrgica. No significa que toda mascota vaya a requerir cirugía. Si el paciente llega inestable, con dolor intenso o tras un trauma, lo correcto puede ser comenzar por urgencias.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-primary/10 bg-primary p-6 text-white shadow-[0_26px_80px_-52px_rgba(15,23,42,0.6)]">
              <h3 className="text-2xl font-semibold text-white">
                Acción recomendada
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Si crees que tu mascota podría necesitar cirugía o quieres orientación sobre un procedimiento, ponte en contacto con el hospital. Si se ve descompensado o el caso parece urgente, entra directo por urgencias.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                >
                  {finalPrimaryAction.isExternal ? (
                    <a
                      href={finalPrimaryAction.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {finalPrimaryAction.label}
                    </a>
                  ) : (
                    <Link href={finalPrimaryAction.href}>
                      {finalPrimaryAction.label}
                    </Link>
                  )}
                </Button>
                {finalSecondaryAction ? (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                  >
                    {finalSecondaryAction.isExternal ? (
                      <a
                        href={finalSecondaryAction.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {finalSecondaryAction.label}
                      </a>
                    ) : (
                      <Link href={finalSecondaryAction.href}>
                        {finalSecondaryAction.label}
                      </Link>
                    )}
                  </Button>
                ) : null}
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