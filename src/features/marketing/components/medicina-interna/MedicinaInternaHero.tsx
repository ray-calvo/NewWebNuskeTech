import { HeartPulse, PhoneCall, Stethoscope } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  internalMedicineHeroHighlights,
  internalMedicinePhoneHref,
  internalMedicineWhatsAppHref,
} from "./data";

export function MedicinaInternaHero() {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-10 lg:pt-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#eef4fa_100%)] p-5 shadow-[0_34px_110px_-62px_rgba(15,23,42,0.32)] md:p-7 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-7">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">Medicina interna y casos complejos</Badge>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                Integrar mejor el caso
              </div>
            </div>

            <div className="max-w-4xl space-y-4">
              <h1 className="text-4xl font-semibold tracking-[-0.05em] text-primary sm:text-5xl lg:text-6xl lg:leading-[0.98]">
                Medicina Interna y Valoración Médica Integral
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Hay pacientes que no encajan en una sola respuesta rápida.
                Esta ruta ayuda a valorar cuadros persistentes, cambios
                progresivos o evoluciones poco claras para decidir mejor qué
                estudiar, qué seguir y cuándo conviene escalar.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
              >
                <a
                  href={internalMedicineWhatsAppHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Stethoscope aria-hidden={true} className="h-4 w-4" />
                  Solicitar valoración
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-primary/15 bg-white text-primary hover:bg-primary/5"
              >
                <a href={internalMedicinePhoneHref}>
                  <PhoneCall aria-hidden={true} className="h-4 w-4" />
                  Llamar al hospital
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {internalMedicineHeroHighlights.map((highlight) => (
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
                Cuándo priorizar urgencias
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Si el paciente está descompensado, con dificultad para respirar,
                dolor intenso o deterioro agudo, primero hay que estabilizar.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Esta página orienta casos complejos pero estables o de
                evolución incierta. Cuando el cuadro ya compromete al paciente,
                la entrada correcta sigue siendo urgencias y luego se ordena la
                siguiente ruta clínica.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                <HeartPulse aria-hidden={true} className="h-4 w-4" />
                Soporte oportuno si el caso ya se agudizó
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
