import Link from "next/link";
import { Microscope, PhoneCall, ScanSearch } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PageClinicalUiModel } from "@/lib/clinical-runtime/ui-adapter";
import { selectClinicalUiConsumption } from "@/lib/clinical-runtime/ui-consumption";

import {
  diagnosticsHeroHighlights,
  diagnosticsPhoneHref,
  diagnosticsWhatsAppHref,
} from "./data";

type DiagnosticoHeroProps = {
  clinicalUiModel?: PageClinicalUiModel;
};

export function DiagnosticoHero({ clinicalUiModel }: DiagnosticoHeroProps) {
  const runtimeConsumption = clinicalUiModel
    ? selectClinicalUiConsumption(clinicalUiModel, {
        primaryPreference: ["valuation-request", "orientation-request"],
        secondaryPreference: ["call-now", "route-transition"],
      })
    : null;
  const primaryAction = runtimeConsumption?.primaryCta ?? {
    href: diagnosticsWhatsAppHref,
    label: "Solicitar valoración",
    kind: "valuation-request",
    isExternal: true,
  };
  const secondaryAction = runtimeConsumption?.secondaryCta ?? {
    href: diagnosticsPhoneHref,
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
              <Badge variant="secondary">Diagnóstico hospitalario</Badge>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                Aclarar el cuadro y decidir mejor
              </div>
            </div>

            <div className="max-w-4xl space-y-4">
              <h1 className="text-4xl font-semibold tracking-[-0.05em] text-primary sm:text-5xl lg:text-6xl lg:leading-[0.98]">
                Diagnóstico Hospitalario para Casos Complejos
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Cuando la exploración no basta, el diagnóstico ayuda a entender
                mejor el cuadro, priorizar riesgos y decidir qué tratamiento o
                procedimiento conviene seguir. No se trata de pedir estudios
                por pedirlos, sino de tomar mejores decisiones.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
              >
                {primaryAction.isExternal ? (
                  <a
                    href={primaryAction.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Microscope aria-hidden={true} className="h-4 w-4" />
                    {primaryAction.label}
                  </a>
                ) : (
                  <Link href={primaryAction.href}>
                    <Microscope aria-hidden={true} className="h-4 w-4" />
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
            {diagnosticsHeroHighlights.map((highlight) => (
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
                Cuando hace falta más claridad
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                El diagnóstico ayuda a decidir mejor, pero no reemplaza una
                cirugía o un procedimiento cuando el caso necesita resolverse.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Su papel es reducir incertidumbre: aclarar el cuadro, confirmar
                riesgos y orientar el siguiente paso con menos duda.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                <ScanSearch aria-hidden={true} className="h-4 w-4" />
                Apoyo a decisiones clínicas
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
