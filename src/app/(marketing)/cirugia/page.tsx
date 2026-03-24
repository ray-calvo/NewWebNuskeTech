import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cirugía",
  description:
    "Cirugía hospitalaria y procedimientos especializados con control anestésico, seguridad clínica y seguimiento postoperatorio en Nuskë Vet Center.",
};

const surgeryWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20agendar%20una%20valoraci%C3%B3n%20quir%C3%BArgica%20para%20mi%20mascota.";

export default function CirugiaPage() {
  return (
    <main className="bg-background">
      <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-4xl space-y-4">
            <Badge variant="secondary">Cirugía hospitalaria</Badge>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              Cirugía Hospitalaria y Procedimientos Especializados
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Ruta madre para capacidad quirúrgica, control anestésico y manejo
              hospitalario integral. Aquí vivirá la profundidad clínica de
              cirugía, recuperación y submódulos quirúrgicos futuros.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                Narrativa quirúrgica futura
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para procedimientos, criterios de valoración y
                manejo quirúrgico integral.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                Soporte tecnológico futuro
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para seguridad anestésica, monitoreo y soporte de
                diagnóstico perioperatorio.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-semibold text-primary">
                CTA de valoración
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder para solicitud de valoración quirúrgica y contacto
                médico.
              </p>
            </section>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
            >
              <a href={surgeryWhatsAppHref} target="_blank" rel="noreferrer">
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
