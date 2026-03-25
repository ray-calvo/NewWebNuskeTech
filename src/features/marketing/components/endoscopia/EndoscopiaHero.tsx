import Link from "next/link";
import { Camera, PhoneCall, Waves } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PageClinicalUiModel } from "@/lib/clinical-runtime/ui-adapter";
import { resolveClinicalUiConsumptionForModel } from "@/lib/clinical-runtime/ui-consumption";

import {
  endoscopyHeroHighlights,
  endoscopyPhoneHref,
  endoscopyWhatsAppHref,
} from "./data";

type EndoscopiaHeroProps = {
  clinicalUiModel?: PageClinicalUiModel;
};

export function EndoscopiaHero({ clinicalUiModel }: EndoscopiaHeroProps) {
  const runtimeConsumption = clinicalUiModel
    ? resolveClinicalUiConsumptionForModel({
        pathname: "/endoscopia",
        uiModel: clinicalUiModel,
      })
    : null;
  const primaryAction = runtimeConsumption?.primaryCta ?? {
    href: endoscopyWhatsAppHref,
    label: "Pedir orientación sobre endoscopía",
    kind: "specialized-valuation-request",
    isExternal: true,
  };
  const secondaryAction = runtimeConsumption?.secondaryCta ?? {
    href: endoscopyPhoneHref,
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
              <Badge variant="secondary">Endoscopía y mínima invasión</Badge>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                Ver mejor y actuar con menos invasión cuando el caso lo permite
              </div>
            </div>

            <div className="max-w-4xl space-y-4">
              <h1 className="text-4xl font-semibold tracking-[-0.05em] text-primary sm:text-5xl lg:text-6xl lg:leading-[0.98]">
                Endoscopía veterinaria para casos en los que conviene ver mejor y hacer menos invasión
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Cuando está bien indicada, la endoscopía puede ayudar a entender mejor
                qué está pasando y, en algunos pacientes, resolver el problema sin pasar
                primero por una cirugía abierta. No se trata solo de usar otra técnica,
                sino de elegir lo que más puede ayudar a tu mascota.
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
                    <Camera aria-hidden={true} className="h-4 w-4" />
                    {primaryAction.label}
                  </a>
                ) : (
                  <Link href={primaryAction.href}>
                    <Camera aria-hidden={true} className="h-4 w-4" />
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
            {endoscopyHeroHighlights.map((highlight) => (
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
                Cuando esta opción puede ayudar más
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Puede evitar una cirugía abierta en algunos casos, pero también ayuda
                a saber cuándo tu mascota sí necesita otro tipo de procedimiento o más apoyo.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                La clave está en usarla cuando realmente aporta más claridad, menos
                invasión y una mejor decisión para el caso.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                <Waves aria-hidden={true} className="h-4 w-4" />
                Menor invasión cuando está bien indicada
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}