"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Quirófano de Alta Especialidad",
    description: "Flujo laminar y esterilización de grado quirúrgico.",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=80",
    alt: "Quirófano veterinario moderno y equipado",
  },
  {
    title: "Hospitalización",
    description: "Monitoreo constante y áreas clínicas para recuperación segura.",
    src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=80",
    alt: "Área hospitalaria veterinaria con equipamiento clínico",
  },
  {
    title: "Urgencias 24/7",
    description: "Triaje y estabilización inmediata para pacientes críticos.",
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1800&q=80",
    alt: "Sala de urgencias veterinarias con tecnología médica",
  },
] as const;

export function FacilitiesGallery() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2">
      <Carousel opts={{ align: "start", loop: true }} className="w-screen">
        <CarouselContent className="-ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.title} className="pl-0">
              <div className="relative aspect-[21/9] w-screen overflow-hidden bg-slate-950">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10 lg:px-16">
                  <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                      Instalaciones Nuskë
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                      {slide.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 hidden -translate-y-1/2 justify-between px-4 md:flex">
          <CarouselPrevious className="pointer-events-auto left-4 border-white/20 bg-white/90 text-primary backdrop-blur hover:bg-white" />
          <CarouselNext className="pointer-events-auto right-4 border-white/20 bg-white/90 text-primary backdrop-blur hover:bg-white" />
        </div>
      </Carousel>
    </div>
  );
}
