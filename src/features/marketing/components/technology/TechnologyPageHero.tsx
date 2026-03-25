import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse, Microscope } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { technologyHeroImage } from "./data";

export function TechnologyPageHero() {
  return (
    <section className="px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-12 lg:pt-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_34px_110px_-62px_rgba(15,23,42,0.42)]">
        <div className="relative min-h-[520px]">
          <Image
            src={technologyHeroImage.src}
            alt={technologyHeroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,17,28,0.88)_0%,rgba(10,17,28,0.72)_48%,rgba(10,17,28,0.34)_100%)]" />

          <div className="relative z-10 flex min-h-[520px] items-end px-6 py-8 sm:px-8 lg:px-10">
            <div className="grid w-full gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div className="max-w-4xl space-y-5 text-white">
                <Badge className="border-white/15 bg-white/10 text-white">
                  Evidencia hospitalaria real
                </Badge>
                <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl lg:leading-[0.98]">
                  Tecnología e infraestructura que respaldan decisiones médicas más precisas
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-200">
                  Esta página no muestra un catálogo de equipos. Muestra el
                  entorno real donde el hospital puede diagnosticar, intervenir,
                  monitorizar y acompañar mejor a pacientes que necesitan más
                  que una atención básica.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                  >
                    <Link href="/contacto">
                      <Microscope aria-hidden={true} className="h-4 w-4" />
                      Solicitar valoración
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-2xl border-white/20 bg-white/10 px-6 text-white hover:bg-white/16 hover:text-white"
                  >
                    <Link href="/urgencias">
                      <HeartPulse aria-hidden={true} className="h-4 w-4" />
                      Ir a urgencias
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  "Diagnóstico hospitalario para tomar mejores decisiones sin perder tiempo clínico",
                  "Quirófano y áreas de procedimiento que respaldan resolución segura",
                  "Hospitalización, monitoreo y continuidad dentro del mismo entorno",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.6rem] border border-white/12 bg-white/10 p-5 text-sm font-medium leading-7 text-slate-100 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
                >
                  Ver rutas clínicas del hospital
                  <ArrowRight aria-hidden={true} className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
