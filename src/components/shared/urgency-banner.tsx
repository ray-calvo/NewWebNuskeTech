import { MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const fixedPhoneHref = "tel:+524433246136";
const whatsappHref = "https://wa.me/524433369624";
const mapsHref =
  "https://maps.google.com/?q=Retorno+Juan+Antonio+Ria%C3%B1o+21+Camelinas+Morelia+Michoac%C3%A1n+M%C3%A9xico+58290";

export function UrgencyBanner() {
  return (
    <div className="sticky top-0 z-[60] border-b border-white/10 bg-[#a60f14] text-white shadow-[0_18px_40px_-22px_rgba(103,8,12,0.85)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm font-semibold tracking-[0.02em] text-white sm:text-base">
          Urgencias veterinarias 24/7 · Atención inmediata
        </p>

        <div className="flex flex-wrap gap-2">
          <Button
            asChild
            size="sm"
            className="h-8 rounded-2xl bg-white text-[#8d1014] shadow-none hover:bg-white/90"
          >
            <a href={fixedPhoneHref}>
              <Phone aria-hidden={true} className="h-4 w-4" />
              Llamar ahora
            </a>
          </Button>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="h-8 rounded-2xl border-white/25 bg-white/10 text-white hover:bg-white/16 hover:text-white"
          >
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden={true} className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="h-8 rounded-2xl border-white/25 bg-white/10 text-white hover:bg-white/16 hover:text-white"
          >
            <a href={mapsHref} target="_blank" rel="noreferrer">
              <MapPin aria-hidden={true} className="h-4 w-4" />
              Cómo llegar
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
