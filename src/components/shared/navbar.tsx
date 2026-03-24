import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { MobileMenu } from "@/components/shared/MobileMenu";

const navigationItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Tecnología", href: "/tecnologia" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-[4.5rem] z-50 border-b border-white/60 bg-slate-50/88 backdrop-blur-xl lg:top-[4.125rem]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-11 w-[220px]">
            <Logo className="h-full w-full" />
          </div>
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <Button
            asChild
            className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground shadow-[0_12px_30px_-18px_rgba(29,63,104,0.9)] hover:bg-secondary"
          >
            <a href="https://wa.me/524433369624" target="_blank" rel="noreferrer">
              Agendar Cita
            </a>
          </Button>
        </div>

        <MobileMenu navigationItems={navigationItems} />
      </div>
    </header>
  );
}
