"use client";

import { Check, Shield, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type Species = "caninos" | "felinos";
type Stage = "cachorros" | "adultos";

type Plan = {
  name: string;
  price: string;
  savings: string;
  benefits: string[];
  highlight?: boolean;
};

const commonBenefits = [
  "Consultas ilimitadas con revisión física",
  "12 MSI con IVA incluido",
];

const plansByStage: Record<Stage, Plan[]> = {
  cachorros: [
    {
      name: "Primario",
      price: "$432/mes",
      savings: "Cobertura esencial",
      benefits: [...commonBenefits, "Vacunas básicas", "Check-up inicial"],
    },
    {
      name: "Básico",
      price: "$506/mes",
      savings: "Procedimiento incluido",
      benefits: [
        ...commonBenefits,
        "Vacunas y seguimiento preventivo",
        "Incluye esterilización/castración (OVH)",
      ],
    },
  ],
  adultos: [
    {
      name: "Básico",
      price: "$506/mes",
      savings: "10% de descuento",
      benefits: [
        ...commonBenefits,
        "10% de descuento en otros servicios",
        "Seguimiento preventivo continuo",
      ],
    },
    {
      name: "Básico+",
      price: "$619/mes",
      savings: "15% de descuento",
      benefits: [
        ...commonBenefits,
        "15% de descuento en otros servicios",
        "Limpieza dental anual",
      ],
    },
    {
      name: "Óptimo+",
      price: "$782/mes",
      savings: "20% de descuento",
      benefits: [
        ...commonBenefits,
        "20% de descuento en otros servicios",
        "Electrocardiograma y radiografías",
      ],
      highlight: true,
    },
  ],
};

const speciesMeta: Record<
  Species,
  { label: string; singular: string; description: string }
> = {
  caninos: {
    label: "Caninos",
    singular: "Perro",
    description:
      "Planes pensados para cachorros y perros adultos con seguimiento preventivo y beneficios clínicos continuos.",
  },
  felinos: {
    label: "Felinos",
    singular: "Gato",
    description:
      "Coberturas adaptadas a gatitos y gatos adultos con enfoque preventivo y visitas ilimitadas de revisión física.",
  },
};

function PlanCard({
  plan,
  species,
}: {
  plan: Plan;
  species: Species;
}) {
  const whatsappHref = `https://wa.me/524433369624?text=${encodeURIComponent(
    `Hola Nuskë, quiero contratar el ${plan.name} para mi ${speciesMeta[species].singular}`
  )}`;

  return (
    <Card
      className={[
        "h-full rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_-56px_rgba(15,23,42,0.2)]",
        plan.highlight
          ? "border-transparent bg-[linear-gradient(white,white),linear-gradient(135deg,rgba(29,63,104,0.55),rgba(135,153,220,0.45),rgba(166,181,251,0.55))] bg-origin-border bg-clip-padding"
          : "",
      ].join(" ")}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge className="border-accent/20 bg-accent/10 text-primary">
              {plan.name}
            </Badge>
            <CardTitle className="text-slate-950">{plan.name}</CardTitle>
          </div>
          <div
            className={[
              "flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20",
              plan.highlight ? "bg-primary/10 text-primary ring-primary/15" : "",
            ].join(" ")}
          >
            {plan.highlight ? (
              <Sparkles className="h-5 w-5" aria-hidden={true} />
            ) : (
              <Shield className="h-5 w-5" aria-hidden={true} />
            )}
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-4xl font-semibold tracking-tight text-primary">
            {plan.price}
          </p>
          <p className="text-sm font-medium text-slate-600">{plan.savings}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <ul className="space-y-3">
          {plan.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                <Check className="h-4 w-4" aria-hidden={true} />
              </span>
              <span className="text-sm leading-7 text-slate-700">{benefit}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          size="lg"
          className="h-11 w-full rounded-2xl bg-primary text-primary-foreground hover:bg-secondary"
        >
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            Lo quiero
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

function StagePanel({
  species,
  stage,
}: {
  species: Species;
  stage: Stage;
}) {
  const plans = plansByStage[stage];

  return (
    <div className="space-y-5">
      <p className="max-w-3xl text-sm leading-7 text-slate-600">
        {speciesMeta[species].description}
      </p>

      <div className="md:hidden">
        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent className="-ml-4">
            {plans.map((plan) => (
              <CarouselItem
                key={`${species}-${stage}-${plan.name}`}
                className="basis-[88%] pl-4 sm:basis-[70%]"
              >
                <PlanCard plan={plan} species={species} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-5 flex items-center justify-end gap-3">
            <CarouselPrevious className="static translate-y-0 border-slate-200 bg-white text-primary hover:bg-accent/10 disabled:opacity-40" />
            <CarouselNext className="static translate-y-0 border-slate-200 bg-white text-primary hover:bg-accent/10 disabled:opacity-40" />
          </div>
        </Carousel>
      </div>

      <div className="hidden grid-cols-1 gap-6 md:grid lg:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard
            key={`${species}-${stage}-${plan.name}`}
            plan={plan}
            species={species}
          />
        ))}
      </div>
    </div>
  );
}

export function WellnessSelector() {
  return (
    <section className="bg-muted/10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <Badge variant="secondary">Nuskë Wellness</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Planes de salud diseñados para cada especie y etapa de vida
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Filtra por especie y edad para encontrar la cobertura preventiva más
            adecuada. Cada plan conserva la lógica hospitalaria de Nuskë y una
            contratación inmediata por WhatsApp.
          </p>
        </div>

        <Tabs defaultValue="caninos" className="space-y-6">
          <TabsList className="w-full max-w-md justify-start overflow-x-auto">
            <TabsTrigger value="caninos">Caninos</TabsTrigger>
            <TabsTrigger value="felinos">Felinos</TabsTrigger>
          </TabsList>

          {(["caninos", "felinos"] as const).map((species) => (
            <TabsContent key={species} value={species} className="space-y-6">
              <Tabs defaultValue="cachorros" className="space-y-6">
                <TabsList className="w-full max-w-xl justify-start overflow-x-auto">
                  <TabsTrigger value="cachorros">Cachorros (&lt;6 meses)</TabsTrigger>
                  <TabsTrigger value="adultos">Adultos</TabsTrigger>
                </TabsList>

                <TabsContent value="cachorros">
                  <StagePanel species={species} stage="cachorros" />
                </TabsContent>
                <TabsContent value="adultos">
                  <StagePanel species={species} stage="adultos" />
                </TabsContent>
              </Tabs>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
