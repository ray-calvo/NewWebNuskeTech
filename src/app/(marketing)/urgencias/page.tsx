import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Urgencias",
  description:
    "Atención veterinaria inmediata para pacientes críticos, estabilización, hospitalización y respuesta hospitalaria 24/7 en Nuskë Vet Center.",
};

const urgentPhoneHref = "tel:+524433246136";
const urgentWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20tengo%20una%20urgencia%20veterinaria%20y%20necesito%20atenci%C3%B3n%20inmediata.";

export default function UrgenciasPage() {
  return (
    <main className="bg-background">
      <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-4xl space-y-4">
            <Badge variant="secondary">Urgencias y paciente crítico</Badge>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              Urgencias Veterinarias y Paciente Crítico 24/7
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Ruta madre para atención inmediata, estabilización inicial y
              capacidad hospitalaria crítica. Aquí vivirá la narrativa clínica
              profunda de urgencias, hospitalización y respuesta 24 horas.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                Narrativa clínica futura
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para protocolo de emergencia, señales de alerta y
                flujo de estabilización.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                Soporte hospitalario futuro
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para hospitalización, monitoreo continuo y paciente
                crítico.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                CTA hospitalaria
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para llamada, WhatsApp y orientación inmediata.
              </p>
            </section>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
            >
              <a href={urgentPhoneHref}>Llamar ahora</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-2xl border-accent bg-accent/10 px-6 text-secondary hover:bg-accent/20 hover:text-primary"
            >
              <a href={urgentWhatsAppHref} target="_blank" rel="noreferrer">
                Escribir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
