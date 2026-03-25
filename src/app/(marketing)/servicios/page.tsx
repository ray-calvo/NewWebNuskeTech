import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ServicesPageHero } from "@/features/marketing/components/services/ServicesPageHero";
import { ServiceCategorySection } from "@/features/marketing/components/services/ServiceCategorySection";
import { capabilityBlocks } from "@/features/marketing/components/services/data";
import { resolveClinicalUiModelForPage } from "@/lib/clinical-runtime/application";
import { selectClinicalUiConsumption } from "@/lib/clinical-runtime/ui-consumption";

export default function ServiciosPage() {
  const clinicalUiModel = resolveClinicalUiModelForPage({
    pathname: "/servicios",
  }).uiModel;
  const runtimeConsumption = selectClinicalUiConsumption(clinicalUiModel, {
    primaryPreference: ["emergency-route"],
    secondaryPreference: ["orientation-request", "valuation-request"],
  });
  const finalPrimaryAction = runtimeConsumption.primaryCta;
  const finalSecondaryAction = runtimeConsumption.secondaryCta;

  return (
    <main
      className="bg-background"
      style={{
        backgroundImage:
          "radial-gradient(circle at 12% 14%, rgb(166 181 251 / 0.14), transparent 24%), radial-gradient(circle at 88% 24%, rgb(166 181 251 / 0.12), transparent 22%), radial-gradient(circle at 50% 82%, rgb(166 181 251 / 0.12), transparent 26%)",
      }}
    >
      <ServicesPageHero />

      <div className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl space-y-14">
          {capabilityBlocks.map((block) => (
            <ServiceCategorySection key={block.title} block={block} />
          ))}

          <section className="rounded-[2rem] border border-primary/10 bg-white/85 p-6 shadow-[0_24px_80px_-56px_rgba(29,63,104,0.16)] sm:p-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Elegir la ruta correcta
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-primary">
                Si no sabes por dónde empezar, prioriza la situación clínica
              </h2>
              <p className="text-base leading-8 text-slate-600">
                Si el paciente está decaído, con dolor intenso, dificultad para
                respirar o una descompensación aguda, la entrada correcta sigue
                siendo urgencias. Si el cuadro permite valorar con más calma,
                usa la ruta clínica que mejor corresponda o contáctanos para
                orientarte.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
              >
                <Link href={finalPrimaryAction.href}>{finalPrimaryAction.label}</Link>
              </Button>
              {finalSecondaryAction ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-2xl border-primary/20 bg-white px-6 text-primary hover:bg-primary/5"
                >
                  <Link href={finalSecondaryAction.href}>
                    {finalSecondaryAction.label}
                  </Link>
                </Button>
              ) : null}
            </div>

            {runtimeConsumption.suggestedTransitions.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {runtimeConsumption.suggestedTransitions.slice(0, 2).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}
