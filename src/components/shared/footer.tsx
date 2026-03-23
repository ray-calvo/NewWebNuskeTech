import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Smartphone } from "lucide-react";

const fixedPhoneHref = "tel:+524433246136";
const whatsappHref = "https://wa.me/524433369624";
const emailHref = "mailto:contacto@nuskevetcenter.com";
const mapsHref =
  "https://maps.google.com/?q=Retorno+Juan+Antonio+Ria%C3%B1o+21+Camelinas+Morelia+Michoac%C3%A1n+M%C3%A9xico+58290";
const facebookHref = "https://www.facebook.com/CivetNuske";
const instagramHref = "https://www.instagram.com/nuskeveterinaria";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-[#1d3f68]">Nuskë Vet Center</p>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            Centro veterinario de alta especialidad con urgencias 24/7, mínima
            invasión, diagnóstico avanzado y atención humana en Camelinas, Morelia.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={facebookHref}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1d3f68]/8 text-[#1d3f68] transition-colors hover:bg-[#1d3f68]/12"
              aria-label="Facebook de Nuskë Vet Center"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1d3f68]/8 text-[#1d3f68] transition-colors hover:bg-[#1d3f68]/12"
              aria-label="Instagram de Nuskë Vet Center"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1d3f68]/8 text-[#1d3f68]">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-slate-900">Dirección</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Retorno Juan Antonio Riaño 21, Camelinas, Morelia, Michoacán, México.
              CP 58290.
            </p>
          </a>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1d3f68]/8 text-[#1d3f68]">
              <Phone className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-slate-900">Teléfono fijo</p>
            <a href={fixedPhoneHref} className="mt-1 block text-sm text-slate-600 hover:text-[#1d3f68]">
              +52 443 324 6136
            </a>
            <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1d3f68]/8 text-[#1d3f68]">
              <Smartphone className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-900">WhatsApp / móvil</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-sm text-slate-600 hover:text-[#1d3f68]"
            >
              443 336 9624
            </a>
          </div>

          <a
            href={emailHref}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1d3f68]/8 text-[#1d3f68]">
              <Mail className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-slate-900">Correo</p>
            <p className="mt-1 text-sm text-slate-600">contacto@nuskevetcenter.com</p>
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Nuskë Vet Center. Todos los derechos reservados.</p>
          <Link href="/" className="text-[#1d3f68] hover:underline">
            Inicio
          </Link>
        </div>
      </div>
    </footer>
  );
}
