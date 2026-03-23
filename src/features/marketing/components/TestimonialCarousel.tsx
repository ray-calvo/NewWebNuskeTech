"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPinned, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mapsReviewHref =
  "https://www.google.com/maps/place/?q=place_id:ChIJg_I7dfoNLYQR0FKMf-Gdx9Y";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjRTlFRkZGIi8+PC9zdmc+";

const testimonials = [
  {
    owner: "Familia de Luna",
    pet: "Luna, Bulldog Francés",
    quote:
      "Llegamos por urgencia y la cirugía salvó su vida. Eternamente agradecidos.",
    category: "Urgencias 24/7",
    imageSrc: "/marketing/testimonials/luna-bulldog.svg",
    imageAlt: "Retrato ilustrado de Luna, bulldog francés",
    itemClassName: "md:basis-[58%] xl:basis-[46%]",
    cardClassName:
      "border-primary/12 bg-white shadow-[0_28px_90px_-52px_rgba(29,63,104,0.28)]",
  },
  {
    owner: 'Familia de Toby',
    pet: "Toby, Golden Retriever",
    quote:
      "La endoscopía fue rápida y sin dolor. Gran tecnología.",
    category: "Alta Especialidad",
    imageSrc: "/marketing/testimonials/toby-golden.svg",
    imageAlt: "Retrato ilustrado de Toby, golden retriever",
    itemClassName: "md:basis-[42%] xl:basis-[27%]",
    cardClassName: "border-slate-100 bg-white",
  },
  {
    owner: "Familia de Coco",
    pet: "Coco, Loro",
    quote:
      "Excelente trato y conocimiento de especies exóticas.",
    category: "Exóticos",
    imageSrc: "/marketing/testimonials/coco-loro.svg",
    imageAlt: "Retrato ilustrado de Coco, loro",
    itemClassName: "md:basis-[42%] xl:basis-[27%]",
    cardClassName: "border-slate-100 bg-white",
  },
] as const;

export function TestimonialCarousel() {
  return (
    <section className="bg-muted/10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <Badge variant="secondary">Historias reales</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Casos que refuerzan la confianza clínica de Nuskë.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Desde urgencias que exigen respuesta inmediata hasta procedimientos de
            especialidad y atención a especies exóticas, estas historias reflejan
            el tipo de experiencia que las familias buscan en Morelia.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.pet}
                className={`pl-4 basis-[88%] sm:basis-[72%] ${testimonial.itemClassName}`}
              >
                <Card
                  className={`h-full border ${testimonial.cardClassName} transition-transform duration-300 hover:-translate-y-1`}
                >
                  <CardHeader className="gap-5">
                    <div className="flex items-start justify-between gap-4">
                      <Badge className="border-accent/20 bg-accent/10 text-primary">
                        {testimonial.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-[#FFC107]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={`${testimonial.pet}-${index}`}
                            className="h-4 w-4 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full border border-slate-200">
                        <Image
                          src={testimonial.imageSrc}
                          alt={testimonial.imageAlt}
                          fill
                          sizes="64px"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-lg text-slate-950">
                          {testimonial.owner}
                        </CardTitle>
                        <p className="text-sm font-medium text-slate-600">
                          {testimonial.pet}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex h-full flex-col justify-between gap-6">
                    <blockquote className="text-lg leading-8 text-slate-700">
                      “{testimonial.quote}”
                    </blockquote>

                    <Link
                      href={mapsReviewHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-primary"
                    >
                      <MapPinned className="h-4 w-4" aria-hidden="true" />
                      Ver referencia en Google Maps
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex items-center justify-end gap-3 pr-1">
            <CarouselPrevious className="static translate-y-0 border-slate-200 bg-white text-primary hover:bg-accent/10 disabled:opacity-40" />
            <CarouselNext className="static translate-y-0 border-slate-200 bg-white text-primary hover:bg-accent/10 disabled:opacity-40" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
