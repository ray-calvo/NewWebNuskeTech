import type { Metadata } from "next";
import Link from "next/link";
import { Bird, ShieldPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ClinicalBulletGrid,
  ClinicalSection,
} from "@/features/marketing/components/clinical/ClinicalSection";
import { ExoticosHero } from "@/features/marketing/components/exoticos/ExoticosHero";
import {
  exoticCapabilities,
  exoticDecisionContexts,
  exoticDifferentiators,
  exoticPhoneHref,
  exoticSupportCards,
  exoticWhatsAppHref,
} from "@/features/marketing/components/exoticos/data";

export const metadata: Metadata = {
  title: "Exóticos",
  description:
    "Valoración clínica, diagnóstico y manejo de aves, reptiles y pequeños mamíferos con criterio adaptado por especie en Nuskë Vet Center.",
};

export default function ExoticosPage() {
  return (
    <main className="bg-background">
      <ExoticosHero />

      <ClinicalSection
        badge="Por qué estos pacientes requieren otra lectura"
        title="En exóticos, esperar demasiado o valorar como si todas las especies fueran iguales puede cambiar el resultado"
        description="Aves, reptiles y pequeños mamíferos suelen mostrar enfermedad de forma distinta y a veces más tarde. Por eso conviene valorar con criterios adaptados por especie antes de que el deterioro sea más difícil de revertir."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {exoticDecisionContexts.map((signal) => (
            <section
              key={signal.title}
              className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Bird aria-hidden={true} className="h-5 w-5" />
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
        badge="Valoración, diagnóstico y manejo"
        title="La atención médica para exóticos combina lectura clínica, entorno controlado y decisiones ajustadas al paciente"
        description="No todos los casos necesitan lo mismo. Algunos requieren una valoración cuidadosa, otros estudios, observación más cercana, hospitalización o procedimientos para avanzar con seguridad."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {exoticCapabilities.map((capability) => {
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
                Menor estrés y manejo más seguro
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Diagnóstico, hospitalización y procedimientos se deciden según la especie y el estado real del paciente
              </h2>
              <p className="text-base leading-8 text-slate-100">
                En estos pacientes no conviene improvisar ni asumir que el
                cuadro seguirá la misma lógica que en perros o gatos. El valor
                está en explorar, estabilizar y decidir sin sumar estrés
                innecesario.
              </p>
              <ClinicalBulletGrid
                items={[
                  "Valorar primero qué tan estable llega el paciente",
                  "Elegir estudios o soporte según la especie y el cuadro",
                  "Hospitalizar si no es seguro continuar manejo en casa",
                  "Escalar a urgencias cuando hay descompensación aguda",
                ]}
                tone="dark"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {exoticSupportCards.map((card) => {
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
        title="Lo que cambia cuando estos pacientes se valoran con criterio propio"
        description="En exóticos, una buena valoración no consiste en hacer más por hacer más. Consiste en interpretar mejor, reducir estrés evitable y decidir antes de que el paciente se agote."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {exoticDifferentiators.map((item) => {
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
                Cuando el paciente no es convencional, la valoración tampoco puede serlo
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                Esta página orienta hacia valoración clínica de pacientes
                exóticos. Si el paciente ya está débil, con dificultad para
                respirar o claramente inestable, la prioridad sigue siendo
                urgencias.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-primary/10 bg-primary p-6 text-white shadow-[0_26px_80px_-52px_rgba(15,23,42,0.6)]">
              <h3 className="text-2xl font-semibold text-white">
                Acción recomendada
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Si necesitas valorar a un ave, reptil o pequeño mamífero,
                contacta al hospital. Si el paciente llega comprometido o con
                descompensación aguda, prioriza urgencias.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                >
                  <a href={exoticWhatsAppHref} target="_blank" rel="noreferrer">
                    Solicitar valoración
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <a href={exoticPhoneHref}>Llamar al hospital</a>
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
