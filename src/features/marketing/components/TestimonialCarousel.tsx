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
    owner: "Alexis G Moranchel S",
    pet: "Molly, Salchicha",
    quote:
      "Tuvimos una emergencia en domingo de madrugada y respondieron muy rápido. Operaron a Molly por piometra, la internaron, le hicieron los estudios necesarios y nos mantuvieron informados en todo momento hasta que se recuperó por completo.",
    category: "Urgencia y cirugía",
    imageSrc: "/marketing/testimonials/hombre.png",
    imageAlt: "Retrato ilustrado de Molly, perrita salchicha",
    itemClassName: "md:basis-[58%] xl:basis-[46%]",
    cardClassName:
      "border-primary/12 bg-white shadow-[0_28px_90px_-52px_rgba(29,63,104,0.28)]",
  },
  {
    owner: "Tatiana Zapién",
    pet: "Gatita rescatada",
    quote:
      "La operaron en fin de semana cuando en otros lugares me pedían esperar varios días. Le hicieron los estudios a tiempo, me explicaron con claridad el proceso y los costos, y desde entonces he vuelto para más servicios con toda confianza.",
    category: "Atención en fin de semana",
    imageSrc: "/marketing/testimonials/mujer.png",
    imageAlt: "Retrato ilustrado de una gatita rescatada",
    itemClassName: "md:basis-[42%] xl:basis-[27%]",
    cardClassName: "border-slate-100 bg-white",
  },
  {
    owner: "Alma García",
    pet: "Perrito",
    quote:
      "Mi perrito estaba muy grave y aquí encontraron la causa de sus problemas. Fueron profesionales, acertados y nos dieron la tranquilidad de entender por fin qué estaba pasando.",
    category: "Diagnóstico preciso",
    imageSrc: "/marketing/testimonials/mujer.png",
    imageAlt: "Retrato ilustrado de un perrito",
    itemClassName: "md:basis-[42%] xl:basis-[27%]",
    cardClassName: "border-slate-100 bg-white",
  },
  {
    owner: "Lety Esteva",
    pet: "Gatita y Husky",
    quote:
      "Hemos llegado con varias urgencias y siempre nos explicaron claramente el problema y el tratamiento a seguir. Nos ayudaron en una obstrucción intestinal, en tumores complicados y en otras cirugías, siempre con resultados muy buenos y mucha confianza.",
    category: "Casos complejos",
    imageSrc: "/marketing/testimonials/mujer.png",
    imageAlt: "Retrato ilustrado de mascotas atendidas en urgencias y cirugía",
    itemClassName: "md:basis-[48%] xl:basis-[30%]",
    cardClassName: "border-slate-100 bg-white",
  },
  {
    owner: "Hannah Najera",
    pet: "Perrita",
    quote:
      "Mi perrita llegó grave por la mordida de un perro callejero. La atendieron muy bien y me fueron explicando paso a paso qué harían y por qué, lo que me dio mucha tranquilidad durante todo el tratamiento.",
    category: "Hospitalización y seguimiento",
    imageSrc: "/marketing/testimonials/mujer.png",
    imageAlt: "Retrato ilustrado de una perrita atendida tras una mordida",
    itemClassName: "md:basis-[48%] xl:basis-[30%]",
    cardClassName: "border-slate-100 bg-white",
  },
  {
    owner: "Fernanda R",
    pet: "Pug",
    quote:
      "Desde que llegué, la atención fue inmediata, amable y profesional. Me explicaron el diagnóstico con claridad y me mantuvieron actualizada sobre el estado de mi perrito durante todo el tiempo que estuvo bajo cuidado.",
    category: "Atención y comunicación",
    imageSrc: "/marketing/testimonials/mujer.png",
    imageAlt: "Retrato ilustrado de un pug",
    itemClassName: "md:basis-[48%] xl:basis-[30%]",
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
            Familias que encontraron atención, claridad y seguimiento cuando sus
            mascotas más lo necesitaban
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Estas experiencias reflejan lo que más valoran nuestros clientes:
            atención oportuna, explicaciones claras, estudios a tiempo y un
            equipo que acompaña todo el proceso.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={`${testimonial.owner}-${testimonial.pet}`}
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
                            key={`${testimonial.owner}-${index}`}
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
                      Ver reseñas en Google Maps
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