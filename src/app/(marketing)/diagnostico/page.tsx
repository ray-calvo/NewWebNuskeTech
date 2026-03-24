import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Diagnóstico",
  description:
    "Diagnóstico hospitalario para casos complejos, soporte clínico, imagenología y laboratorio veterinario en Nuskë Vet Center.",
};

const diagnosticsWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20informaci%C3%B3n%20sobre%20estudios%20diagn%C3%B3sticos%20para%20mi%20mascota.";

export default function DiagnosticoPage() {
  return (
    <main className="bg-background">
      <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-4xl space-y-4">
            <Badge variant="secondary">Diagnóstico hospitalario</Badge>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              Diagnóstico Hospitalario para Casos Complejos
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Ruta madre para estudios diagnósticos, criterio médico y soporte
              a decisiones clínicas. Aquí vivirá la profundidad de imagenología,
              laboratorio y evaluación hospitalaria.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                Narrativa diagnóstica futura
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para criterios de indicación, lectura clínica y
                soporte diagnóstico hospitalario.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                Bloques tecnológicos futuros
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para imagenología, laboratorio y comparativas de
                estudios.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                CTA diagnóstica
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para agendar estudios, pedir orientación y contactar
                al hospital.
              </p>
            </section>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
            >
              <a href={diagnosticsWhatsAppHref} target="_blank" rel="noreferrer">
                Solicitar orientación
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-2xl border-accent bg-accent/10 px-6 text-secondary hover:bg-accent/20 hover:text-primary"
            >
              <a href="/contacto">Contactar al hospital</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
