import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ShieldPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ClinicalBulletGrid,
  ClinicalSection,
} from "@/features/marketing/components/clinical/ClinicalSection";
import { OncologiaHero } from "@/features/marketing/components/oncologia/OncologiaHero";
import {
  oncologyCapabilities,
  oncologyDecisionContexts,
  oncologyDifferentiators,
  oncologySupportCards,
} from "@/features/marketing/components/oncologia/data";
import { resolveClinicalUiModelForPage } from "@/lib/clinical-runtime/application";
import { selectClinicalUiConsumption } from "@/lib/clinical-runtime/ui-consumption";

export const metadata: Metadata = {
  title: "Oncología",
  description:
    "Valoración oncológica, estudios, seguimiento y coordinación clínica para pacientes con sospecha o diagnóstico oncológico en Nuskë Vet Center.",
};

export default function OncologiaPage() {
  const clinicalUiModel = resolveClinicalUiModelForPage({
    pathname: "/oncologia",
  }).uiModel;
  const runtimeConsumption = selectClinicalUiConsumption(clinicalUiModel, {
    primaryPreference: [
      "specialized-valuation-request",
      "followup-request",
    ],
    secondaryPreference: ["call-now", "followup-request"],
  });
  const finalPrimaryAction = runtimeConsumption.primaryCta;
  const finalSecondaryAction = runtimeConsumption.secondaryCta;

  return (
    <main className="bg-background">
      <OncologiaHero clinicalUiModel={clinicalUiModel} />

      <ClinicalSection
        badge="Cuándo conviene valoración oncológica"
        title="Masas, cambios progresivos o hallazgos persistentes merecen una lectura más cuidadosa"
        description="No toda sospecha oncológica implica el mismo pronóstico ni la misma ruta. Lo importante es valorar a tiempo cuándo conviene estudiar más, vigilar con más atención o definir otro paso clínico."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {oncologyDecisionContexts.map((signal) => (
            <section
              key={signal.title}
              className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Activity aria-hidden={true} className="h-5 w-5" />
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
        badge="Valoración, decisión y seguimiento"
        title="La oncología clínica ayuda a entender el caso y ordenar mejor lo que sigue"
        description="El valor no está en prometer una sola salida, sino en decidir con más criterio qué hace falta estudiar, intervenir, acompañar o controlar según el estado real del paciente."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {oncologyCapabilities.map((capability) => {
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
                Coordinación clínica y continuidad
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Diagnóstico, cirugía, hospitalización y acompañamiento se coordinan según la evolución del caso
              </h2>
              <p className="text-base leading-8 text-slate-100">
                En oncología, una buena decisión suele depender de varios
                pasos: aclarar el hallazgo, definir si hace falta intervenir,
                sostener al paciente cuando está más frágil y vigilar de cerca
                cómo evoluciona.
              </p>
              <ClinicalBulletGrid
                items={[
                  "Estudiar mejor antes de decidir demasiado rápido",
                  "Valorar si cirugía u hospitalización tienen sentido en ese momento",
                  "Acompañar evolución, confort y respuesta del paciente",
                  "Escalar a urgencias si aparece descompensación aguda",
                ]}
                tone="dark"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {oncologySupportCards.map((card) => {
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
        title="Lo que cambia cuando estos casos se valoran con más criterio y menos improvisación"
        description="En oncología, acompañar bien también es parte del manejo. La diferencia suele estar en estudiar mejor, ordenar prioridades y no perder de vista al paciente mientras el caso evoluciona."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {oncologyDifferentiators.map((item) => {
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
                Una valoración oncológica útil no promete de más: ayuda a decidir mejor
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                Esta página orienta hacia estudio, seguimiento y coordinación
                clínica en pacientes con sospecha o diagnóstico oncológico. Si
                el paciente ya está descompensado o inestable, la prioridad
                sigue siendo urgencias.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-primary/10 bg-primary p-6 text-white shadow-[0_26px_80px_-52px_rgba(15,23,42,0.6)]">
              <h3 className="text-2xl font-semibold text-white">
                Acción recomendada
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Si necesitas valorar una masa, un hallazgo persistente o el
                seguimiento de un paciente oncológico, contacta al hospital. Si
                el paciente presenta deterioro agudo, prioriza urgencias.
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
