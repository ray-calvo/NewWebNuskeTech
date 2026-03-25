import Link from "next/link";
import { HeartPulse, MapPin, PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PageClinicalUiModel } from "@/lib/clinical-runtime/ui-adapter";
import { resolveClinicalUiConsumptionForModel } from "@/lib/clinical-runtime/ui-consumption";

import { heroHighlights, mapsHref, urgentPhoneHref, urgentWhatsAppHref } from "./data";

type UrgenciasHeroProps = {
  clinicalUiModel?: PageClinicalUiModel;
};

export function UrgenciasHero({ clinicalUiModel }: UrgenciasHeroProps) {
  const runtimeConsumption = clinicalUiModel
    ? resolveClinicalUiConsumptionForModel({
        pathname: "/urgencias",
        uiModel: clinicalUiModel,
      })
    : null;
  const primaryAction = runtimeConsumption?.primaryCta ?? {
    href: urgentPhoneHref,
    label: "Llamar ahora",
    kind: "call-now",
  };
  const secondaryAction = runtimeConsumption?.secondaryCta ?? {
    href: urgentWhatsAppHref,
    label: "WhatsApp inmediato",
    kind: "open-whatsapp",
  };
  const PrimaryIcon =
    primaryAction.kind === "open-whatsapp" ? HeartPulse : PhoneCall;
  const SecondaryIcon =
    secondaryAction.kind === "open-whatsapp" ? HeartPulse : PhoneCall;

  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-10 lg:pt-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#eef4fa_100%)] p-5 shadow-[0_34px_110px_-62px_rgba(15,23,42,0.32)] md:p-7 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-7">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">Urgencias y paciente crítico</Badge>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Hospital con atención activa 24/7
              </div>
            </div>

            <div className="max-w-4xl space-y-4">
              <h1 className="text-4xl font-semibold tracking-[-0.05em] text-primary sm:text-5xl lg:text-6xl lg:leading-[0.98]">
                Urgencias veterinarias 24/7 para mascotas que no pueden esperar
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Si tu mascota llega con dolor intenso, dificultad para respirar,
                sangrado, trauma o empeora rápido, lo importante es revisarla y
                empezar a actuar sin perder tiempo. En estos casos, cada minuto
                cuenta.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-2xl bg-[#a60f14] px-6 text-white shadow-[0_18px_46px_-24px_rgba(103,8,12,0.9)] hover:bg-[#8d1014]"
              >
                <a href={primaryAction.href}>
                  <PrimaryIcon aria-hidden={true} className="h-4 w-4" />
                  {primaryAction.label}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-primary/15 bg-white text-primary hover:bg-primary/5"
              >
                <a href={secondaryAction.href} target="_blank" rel="noreferrer">
                  <SecondaryIcon aria-hidden={true} className="h-4 w-4" />
                  {secondaryAction.label}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-primary/15 bg-white text-primary hover:bg-primary/5"
              >
                <a href={mapsHref} target="_blank" rel="noreferrer">
                  <MapPin aria-hidden={true} className="h-4 w-4" />
                  Cómo llegar
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {heroHighlights.map((highlight) => (
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
                Si todavía tienes duda
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Si no tienes claro qué tan urgente es lo que está pasando, el triage puede orientarte.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                El triage no reemplaza una revisión médica, pero puede ayudarte a decidir
                más rápido cuando todavía no sabes si debes salir de inmediato.
              </p>
              <Link
                href="/triage?entrypoint=urgencias-page-hero"
                className="mt-4 inline-flex text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                Abrir triage orientativo
              </Link>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}