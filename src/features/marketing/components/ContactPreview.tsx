import { Clock, Mail, MapPin, Phone, Smartphone } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fixedPhoneHref = "tel:+524433246136";
const whatsappHref = "https://wa.me/524433369624";
const emailHref = "mailto:contacto@nuskevetcenter.com";
const mapsEmbedSrc =
  "https://www.google.com/maps?q=Nusk%C3%AB+Vet+Center,+Juan+Antonio+Ria%C3%B1o+21,+Camelinas,+58290+Morelia,+Mich.,+M%C3%A9xico&z=17&output=embed";
const mapsExternalHref =
  "https://maps.google.com/?q=Juan+Antonio+Ria%C3%B1o+21,+Camelinas,+58290+Morelia,+Mich.,+M%C3%A9xico";

const contactItems = [
  {
    label: "Dirección",
    value:
      "Retorno Juan Antonio Riaño 21, Camelinas, Morelia, Michoacán, México. CP 58290.",
    href: mapsExternalHref,
    icon: MapPin,
  },
  {
    label: "Teléfono fijo",
    value: "+52 443 324 6136",
    href: fixedPhoneHref,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "443 336 9624",
    href: whatsappHref,
    icon: Smartphone,
  },
  {
    label: "Email",
    value: "contacto@nuskevetcenter.com",
    href: emailHref,
    icon: Mail,
  },
];

export function ContactPreview() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          <span className="inline-flex rounded-full bg-primary/8 px-4 py-1 text-sm font-semibold text-primary">
            Contacto y ubicación
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Estamos en Camelinas, Morelia, listos para atenderte.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Aquí tienes accesos directos para llamada, WhatsApp, correo y la ubicación
            exacta de Nuskë Vet Center para una atención inmediata en Morelia.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-primary/25"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.value}</p>
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.35)]">
            <iframe
              title="Mapa de Nuskë Vet Center en Camelinas, Morelia"
              src={mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-place-id="ChIJg_I7dfoNLYQR0FKMf-Gdx9Y"
              className="h-[450px] w-full rounded-3xl grayscale shadow-2xl transition-all duration-700 hover:grayscale-0"
            />
          </div>

          <Card className="border border-red-100/80 bg-[linear-gradient(180deg,rgba(255,0,0,0.05),rgba(255,255,255,1))]">
            <CardHeader className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-[#ff0000]">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <CardTitle className="text-2xl text-primary">
                  Atención Médica 24/7
                </CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Estamos listos para atender cualquier emergencia en Morelia, los
                  365 días del año.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
                <p className="text-sm font-semibold text-slate-900">Dirección exacta</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Retorno Juan Antonio Riaño 21, Camelinas, Morelia, Michoacán, México.
                  CP 58290.
                </p>
              </div>

              <a
                href={fixedPhoneHref}
                className="flex min-h-14 w-full items-center justify-center rounded-2xl bg-[#ff0000] px-5 text-center text-sm font-bold uppercase tracking-[0.05em] text-white shadow-[0_18px_40px_-18px_rgba(255,0,0,0.9)] transition-transform duration-200 hover:scale-[1.01] hover:bg-[#e10000]"
              >
                LLAMAR A URGENCIAS: +52 443 324 6136
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-primary hover:underline"
              >
                O escríbenos por WhatsApp
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
