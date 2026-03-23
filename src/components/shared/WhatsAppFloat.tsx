import { MessageCircle } from "lucide-react";

const whatsappHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20necesito%20informaci%C3%B3n...";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp de Nuskë Vet Center"
      className="fixed bottom-6 right-6 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-white text-[#25D366] shadow-[0_20px_50px_-18px_rgba(15,23,42,0.35)] ring-1 ring-slate-200 transition-transform duration-200 hover:scale-105 hover:bg-slate-50"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
