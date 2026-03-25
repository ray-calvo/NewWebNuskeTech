import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/app/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Nuskë Vet Center",
    template: "%s | Nuskë Vet Center",
  },
  description:
    "Hospital veterinario de alta especialidad con urgencias 24/7, mínima invasión y atención humana. Ubicados en Camelinas, Morelia.",
  icons: {
    icon: "/static/favicons/favicon.svg",
    shortcut: "/static/favicons/favicon.svg",
    apple: "/static/favicons/favicon.svg",
  },
  manifest: "/static/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={plusJakartaSans.variable}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
