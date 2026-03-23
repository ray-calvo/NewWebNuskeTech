import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactPreview } from "@/features/marketing/components/ContactPreview";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para agendar una cita, solicitar atención médica o ubicar Nuskë Vet Center en Camelinas, Morelia.",
};

const fixedPhoneHref = "tel:+524433246136";
const whatsappHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20agendar%20una%20cita%20o%20recibir%20orientaci%C3%B3n.";

export default function ContactoPage() {
  return (
    <main className="bg-background">
      <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl space-y-4">
            <Badge variant="secondary">Contacto Nuskë</Badge>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              Agenda una cita o recibe orientación inmediata para tu mascota.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Si necesitas atención médica, seguimiento o ayuda para llegar a
              Nuskë Vet Center, aquí tienes los canales principales de contacto
              y ubicación en Camelinas, Morelia.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Escribir por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-2xl border-accent bg-accent/10 px-6 text-secondary hover:bg-accent/20 hover:text-primary"
            >
              <a href={fixedPhoneHref}>Llamar ahora</a>
            </Button>
          </div>
        </div>
      </section>

      <ContactPreview />
    </main>
  );
}
