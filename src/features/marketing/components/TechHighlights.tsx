import {
  Activity,
  Building2,
  HeartPulse,
  ScanHeart,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const highlights = [
  {
    title: "Cirugia Avanzada",
    description:
      "Procedimientos con equipamiento moderno para intervenciones mas precisas y seguras.",
    icon: Activity,
  },
  {
    title: "Diagnostico Digital",
    description:
      "Imagenologia y pruebas clinicas con resultados oportunos para decisiones medicas mejor informadas.",
    icon: ScanHeart,
  },
  {
    title: "Hospitalizacion 24/7",
    description:
      "Monitoreo continuo para pacientes criticos con seguimiento constante del equipo medico.",
    icon: HeartPulse,
  },
  {
    title: "Infraestructura Especializada",
    description:
      "Espacios pensados para una experiencia veterinaria moderna, limpia y confiable.",
    icon: Building2,
  },
];

export function TechHighlights() {
  return (
    <section className="bg-muted/10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-secondary">
            Tecnología y confianza
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Autoridad clínica respaldada por tecnología veterinaria de primer nivel.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Cada área de Nuskë está pensada para ofrecer diagnósticos confiables,
            atención continua y una experiencia que transmite seguridad a cada familia.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="bg-white/92 backdrop-blur transition-transform duration-200 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d3f68]/8 text-[#1d3f68] ring-1 ring-[#1d3f68]/12">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-slate-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
