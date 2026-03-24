import Link from "next/link";
import {
  Activity,
  BadgeCheck,
  HeartPulse,
  ScanSearch,
  Stethoscope,
  Syringe,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const hospitalCapabilities = [
  {
    title: "Atención Veterinaria de Emergencias 24/7",
    description:
      "Manejo inmediato de pacientes con trauma, dolor agudo, descompensación sistémica o riesgo vital.",
    label: "Paciente crítico",
    icon: Zap,
    accent: "critical" as const,
    ctaLabel: "Emergencia ahora",
    ctaHref: "tel:+524433246136",
    items: [
      "Estabilización inicial",
      "Hospitalización",
      "Monitoreo continuo",
      "Manejo del dolor",
      "Manejo de shock",
    ],
    supportingCopy:
      "Respuesta hospitalaria para pacientes que requieren intervención inmediata y continuidad clínica.",
  },
  {
    title: "Cirugía Veterinaria Especializada",
    description:
      "Intervenciones quirúrgicas hospitalarias con control anestésico avanzado y seguimiento postoperatorio.",
    label: "Cirugía hospitalaria",
    icon: Syringe,
    accent: "primary" as const,
    ctaLabel: "Valoración quirúrgica",
    ctaHref: "/contacto",
    items: [
      "Cirugía tejidos blandos",
      "Procedimientos complejos",
      "Manejo quirúrgico integral",
      "Anestesia hospitalaria",
      "Recuperación controlada",
    ],
  },
  {
    title: "Diagnóstico Médico Avanzado",
    description:
      "Evaluación clínica integral mediante herramientas diagnósticas hospitalarias.",
    label: "Resolución diagnóstica",
    icon: ScanSearch,
    accent: "light" as const,
    ctaLabel: "Evaluar diagnóstico",
    ctaHref: "/servicios",
    items: [
      "Imagenología",
      "Ultrasonido",
      "Endoscopía diagnóstica",
      "Evaluación clínica completa",
    ],
  },
  {
    title: "Procedimientos de Mínima Invasión",
    description:
      "Alternativas terapéuticas y diagnósticas que reducen trauma y aceleran recuperación.",
    label: "Abordaje menos invasivo",
    icon: Stethoscope,
    accent: "light" as const,
    ctaLabel: "Conocer opciones",
    ctaHref: "/servicios",
    items: [
      "Endoscopía",
      "Procedimientos guiados",
      "Recuperación rápida",
    ],
  },
  {
    title: "Atención Integral y Preventiva",
    description:
      "Seguimiento médico continuo para mantener la salud del paciente a largo plazo.",
    label: "Continuidad clínica",
    icon: Activity,
    accent: "light" as const,
    ctaLabel: "Agendar consulta",
    ctaHref: "/contacto",
    items: [
      "Consulta médica",
      "Vacunación",
      "Nutrición",
      "Control preventivo",
    ],
  },
] as const;

function CapabilityList({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className={[
            "flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium",
            dark
              ? "border-white/10 bg-white/8 text-white"
              : "border-slate-200 bg-slate-50 text-slate-700",
          ].join(" ")}
        >
          <BadgeCheck
            aria-hidden={true}
            className={["h-4 w-4 shrink-0", dark ? "text-accent" : "text-primary"].join(" ")}
          />
          {item}
        </div>
      ))}
    </div>
  );
}

function CapabilityCard({
  title,
  description,
  label,
  icon: Icon,
  items,
  ctaHref,
  ctaLabel,
  accent,
}: {
  title: string;
  description: string;
  label: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  items: readonly string[];
  ctaHref: string;
  ctaLabel: string;
  accent: "primary" | "light";
}) {
  const isPrimary = accent === "primary";

  return (
    <Card
      className={[
        "overflow-hidden border-slate-200 shadow-[0_26px_70px_-46px_rgba(15,23,42,0.22)]",
        isPrimary ? "bg-primary text-white" : "bg-white",
      ].join(" ")}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <Badge
            variant={isPrimary ? "outline" : "secondary"}
            className={
              isPrimary
                ? "border-white/15 bg-white text-primary"
                : "border-primary/15 bg-primary/5 text-primary"
            }
          >
            {label}
          </Badge>
          <div
            className={[
              "flex h-14 w-14 items-center justify-center rounded-2xl ring-1",
              isPrimary
                ? "bg-white/10 text-white ring-white/10"
                : "bg-primary/8 text-primary ring-primary/10",
            ].join(" ")}
          >
            <Icon aria-hidden={true} className="h-7 w-7" />
          </div>
        </div>

        <div className="space-y-3">
          <CardTitle className={isPrimary ? "text-white" : "text-slate-950"}>
            {title}
          </CardTitle>
          <CardDescription
            className={isPrimary ? "text-slate-100" : "text-base text-slate-600"}
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <CapabilityList items={items} dark={isPrimary} />

        <Button
          asChild
          size="lg"
          variant={isPrimary ? "outline" : "default"}
          className={[
            "h-11 rounded-2xl px-6",
            isPrimary
              ? "border-white/15 bg-white text-primary hover:bg-white/92"
              : "bg-primary text-primary-foreground hover:bg-secondary",
          ].join(" ")}
        >
          {ctaHref.startsWith("tel:") ? (
            <a href={ctaHref}>{ctaLabel}</a>
          ) : (
            <Link href={ctaHref}>{ctaLabel}</Link>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export function ServicesGrid() {
  const emergencyCapability = hospitalCapabilities[0];
  const surgeryCapability = hospitalCapabilities[1];
  const diagnosisCapability = hospitalCapabilities[2];
  const minimallyInvasiveCapability = hospitalCapabilities[3];
  const preventiveCapability = hospitalCapabilities[4];
  const EmergencyIcon = emergencyCapability.icon;
  const PreventiveIcon = preventiveCapability.icon;

  return (
    <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-4xl space-y-4">
          <Badge variant="secondary">Capacidades hospitalarias</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Respuesta médica integral para urgencias, cirugía y continuidad clínica.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Más que un listado de servicios, Nuskë opera como un centro
            hospitalario veterinario capaz de estabilizar, intervenir,
            diagnosticar y dar seguimiento a pacientes complejos en una sola
            ruta de atención.
          </p>
        </div>

        <Card className="overflow-hidden border-primary/10 bg-[linear-gradient(135deg,#1d3f68_0%,#16314f_70%,#11263d_100%)] text-white shadow-[0_34px_110px_-58px_rgba(15,23,42,0.58)]">
          <div className="grid gap-0 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="border-white/15 bg-white text-primary">
                  {emergencyCapability.label}
                </Badge>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white">
                  <HeartPulse aria-hidden={true} className="h-4 w-4 text-accent" />
                  Guardia hospitalaria activa
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                    <EmergencyIcon aria-hidden={true} className="h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                    {emergencyCapability.title}
                  </h3>
                </div>

                <p className="max-w-3xl text-base leading-8 text-slate-100 sm:text-lg">
                  {emergencyCapability.description}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-slate-200">
                  {emergencyCapability.supportingCopy}
                </p>
              </div>

              <CapabilityList items={emergencyCapability.items} dark />

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-11 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                >
                  <a href={emergencyCapability.ctaHref}>{emergencyCapability.ctaLabel}</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <Link href="/contacto">Hablar con el hospital</Link>
                </Button>
              </div>
            </div>

            <div className="border-t border-white/10 p-6 xl:border-l xl:border-t-0 xl:p-8">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                  Orientación inicial
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  ¿No sabes qué tan urgente es lo que estás viendo?
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Usa nuestro triage orientativo para recibir una guía inicial
                  antes de decidir el siguiente paso. No sustituye valoración
                  médica, pero ayuda a priorizar la acción más adecuada.
                </p>
                <Link
                  href="/triage?entrypoint=services-grid-urgencias"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-white underline-offset-4 hover:underline"
                >
                  Abrir triage orientativo
                </Link>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1fr]">
          <CapabilityCard {...surgeryCapability} />
          <CapabilityCard {...diagnosisCapability} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <CapabilityCard {...minimallyInvasiveCapability} />

          <Card className="overflow-hidden border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f3f7fb_100%)] shadow-[0_24px_70px_-46px_rgba(15,23,42,0.2)]">
            <CardHeader className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <Badge variant="secondary" className="border-primary/15 bg-primary/5 text-primary">
                  {preventiveCapability.label}
                </Badge>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary ring-1 ring-primary/10">
                  <PreventiveIcon aria-hidden={true} className="h-7 w-7" />
                </div>
              </div>

              <div className="space-y-3">
                <CardTitle className="text-slate-950">
                  {preventiveCapability.title}
                </CardTitle>
                <CardDescription className="text-base text-slate-600">
                  {preventiveCapability.description}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <CapabilityList items={preventiveCapability.items} />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-7 text-slate-600">
                  La continuidad preventiva permite detectar cambios clínicos a
                  tiempo, sostener la recuperación y disminuir riesgo de
                  descompensación futura.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
                >
                  <Link href={preventiveCapability.ctaHref}>
                    {preventiveCapability.ctaLabel}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-start">
          <Link
            href="/servicios"
            className="inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Explorar la capacidad clínica completa
          </Link>
        </div>
      </div>
    </section>
  );
}
