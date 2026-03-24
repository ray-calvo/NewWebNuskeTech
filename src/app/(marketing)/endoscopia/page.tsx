import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Endoscopía",
  description:
    "Endoscopía y mínima invasión veterinaria para diagnóstico y procedimientos con menor trauma y recuperación más ágil en Nuskë Vet Center.",
};

const endoscopyWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20informaci%C3%B3n%20sobre%20endoscop%C3%ADa%20o%20m%C3%ADnima%20invasi%C3%B3n%20para%20mi%20mascota.";

export default function EndoscopiaPage() {
  return (
    <main className="bg-background">
      <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-4xl space-y-4">
            <Badge variant="secondary">Endoscopía y mínima invasión</Badge>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              Endoscopía y Mínima Invasión Veterinaria
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Ruta madre para procedimientos de mínima invasión, evaluación
              endoscópica y diferenciación hospitalaria de alta complejidad.
              Aquí vivirá la narrativa clínica profunda de esta capacidad.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                Narrativa clínica futura
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para indicaciones, señales de alerta y escenarios de
                uso clínico.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                Diferenciación tecnológica futura
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para ventajas de mínima invasión, menor trauma y
                recuperación más ágil.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                CTA especializada
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para valoración especializada y contacto médico.
              </p>
            </section>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
            >
              <a href={endoscopyWhatsAppHref} target="_blank" rel="noreferrer">
                Solicitar valoración
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-2xl border-accent bg-accent/10 px-6 text-secondary hover:bg-accent/20 hover:text-primary"
            >
              <a href="/contacto">Agendar contacto</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
