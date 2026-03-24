"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type NavigationItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  navigationItems: NavigationItem[];
};

export function MobileMenu({ navigationItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="border-[#1d3f68]/20 bg-white/80 text-[#1d3f68] hover:bg-[#1d3f68]/5"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-4 top-[6.1rem] rounded-[1.75rem] border border-white/70 bg-white/95 p-4 shadow-[0_28px_90px_-52px_rgba(15,23,42,0.55)] backdrop-blur"
        >
          <nav aria-label="Principal móvil" className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#1d3f68]/5 hover:text-[#1d3f68]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 h-11 bg-[#1d3f68] text-white hover:bg-[#16314f]"
            >
              <Link
                href="https://wa.me/524433369624"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Agendar Cita
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
