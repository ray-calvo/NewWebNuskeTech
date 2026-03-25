import Link from "next/link";
import { HeartPulse, PhoneCall, ScanSearch } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PageClinicalUiModel } from "@/lib/clinical-runtime/ui-adapter";
import { resolveClinicalUiConsumptionForModel } from "@/lib/clinical-runtime/ui-consumption";

import {
  oncologyHeroHighlights,
  oncologyPhoneHref,
  oncologyWhatsAppHref,
} from "./data";

type OncologiaHeroProps = {
  clinicalUiModel?: PageClinicalUiModel;
};

export function OncologiaHero({ clinicalUiModel }: OncologiaHeroProps) {
  const runtimeConsumption = clinicalUiModel
    ? resolveClinicalUiConsumptionForModel({
        pathname: "/oncologia",
        uiModel: clinicalUiModel,
      })
    : null;
  const primaryAction = runtimeConsumption?.primaryCta ?? {
    href: oncologyWhatsAppHref,
    label: "Pedir orientación oncológica",
    kind: "specialized-valuation-request",
    isExternal: true,
  };
  const secondaryAction = runtimeConsumption?.secondaryCta ?? {
    href: oncologyPhoneHref,
    label: "Llamar al hospital",
    kind: "call-now",
    isExternal: false,
  };

  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-10 lg:pt-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#eef4fa_100%)] p-5 shadow-[0_34px_110px_-62px_rgba(15,23,42,0.32)] md:p-7 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-7">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">Oncología y casos complejos</Badge>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                Estudiar mejor, decidir mejor y acompañar mejor
              </div>
            </div>

            <div className="max-w-4xl space-y-4">
              <h1 className="text-4xl font-semibold tracking-[-0.05em] text-primary sm:text-5xl lg:text-6xl lg:leading-[0.98]">
                Oncología veterinaria para pacientes que necesitan una valoración más clara y seguimiento cercano
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Cuando aparece una masa, un cambio que sigue avanzando o un hallazgo
                que preocupa, lo importante es entender mejor qué está pasando y
                decidir qué sigue para tu mascota con más claridad y menos
                improvisación.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
              >
                {primaryAction.isExternal ? (
                  <a href={primaryAction.href} target="_blank" rel="noreferrer">
                    <ScanSearch aria-hidden={true} className="h-4 w-4" />
                    {primaryAction.label}
                  </a>
                ) : (
                  <Link href={primaryAction.href}>
                    <ScanSearch aria-hidden={true} className="h-4 w-4" />
                    {primaryAction.label}
                  </Link>
                )}
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-primary/15 bg-white text-primary hover:bg-primary/5"
              >
                {secondaryAction.isExternal ? (
                  <a
                    href={secondaryAction.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PhoneCall aria-hidden={true} className="h-4 w-4" />
                    {secondaryAction.label}
                  </a>
                ) : (
                  <Link href={secondaryAction.href}>
                    <PhoneCall aria-hidden={true} className="h-4 w-4" />
                    {secondaryAction.label}
                  </Link>
                )}
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {oncologyHeroHighlights.map((highlight) => (
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
                Cuándo ir por urgencias primero
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Si tu mascota está descompensada, le cuesta respirar, tiene un
                sangrado importante o empeora rápido, primero necesita atención de urgencias.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Esta página orienta la valoración oncológica. Cuando el estado del
                paciente ya es delicado, lo correcto es estabilizar primero y
                después decidir si necesita estudios, cirugía, hospitalización o
                seguimiento más cercano.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                <HeartPulse aria-hidden={true} className="h-4 w-4" />
                Atención oportuna si el paciente ya está inestable
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}