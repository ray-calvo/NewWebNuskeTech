import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Building2,
  HeartPulse,
  Microscope,
  PhoneCall,
  ScanSearch,
  ShieldPlus,
  Siren,
  Syringe,
  Waves,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ClinicalBulletGrid,
  ClinicalSection,
} from "@/features/marketing/components/clinical/ClinicalSection";
import { Hero } from "@/features/marketing/components/Hero";
import { MedicalTeam } from "@/features/marketing/components/MedicalTeam";
import { TestimonialCarousel } from "@/features/marketing/components/TestimonialCarousel";

const resolutionCards = [
  {
    badge: "Urgencias y estabilización",
    title: "Recibir al paciente crítico y actuar antes de que el cuadro empeore",
    description:
      "Cuando hay trauma, dificultad respiratoria, convulsiones o deterioro rápido, la prioridad es estabilizar, decidir y sostener al paciente dentro del hospital.",
    icon: Siren,
    href: "/urgencias",
    ctaLabel: "Ir a urgencias",
    tone: "critical" as const,
    items: [
      "Atención inmediata 24/7",
      "Estabilización hospitalaria",
      "Vigilancia y reevaluación temprana",
    ],
  },
  {
    badge: "Diagnóstico hospitalario",
    title: "Aclarar el caso cuando una consulta básica no basta",
    description:
      "No todos los pacientes se resuelven con exploración inicial. A veces la diferencia está en estudiar mejor para decidir a tiempo.",
    icon: ScanSearch,
    href: "/diagnostico",
    ctaLabel: "Ver diagnóstico",
    tone: "default" as const,
    items: [
      "Imagenología y laboratorio",
      "Correlación clínica más precisa",
      "Menos decisiones a ciegas",
    ],
  },
  {
    badge: "Cirugía y hospitalización",
    title: "Resolver casos que requieren intervención y soporte continuo",
    description:
      "Si el paciente necesita cirugía, monitoreo o recuperación hospitalaria, aquí existe un entorno real para hacerlo con más control.",
    icon: Syringe,
    href: "/cirugia",
    ctaLabel: "Ver cirugía",
    tone: "default" as const,
    items: [
      "Decisión quirúrgica con criterio",
      "Seguridad anestésica y monitoreo",
      "Continuidad postoperatoria",
    ],
  },
] as const;

const diagnosticSignals = [
  "Vómito persistente, decaimiento o dolor sin causa clara",
  "Hallazgos que requieren confirmar si el caso puede esperar",
  "Pacientes que cambian rápido y necesitan decidir mejor el siguiente paso",
  "Cuadros complejos que ya no se explican con consulta básica",
] as const;

const surgeryHighlights = [
  "Operar a tiempo cambia pronóstico en muchos casos",
  "La seguridad no depende solo del procedimiento, sino del entorno hospitalario completo",
  "La recuperación necesita control, reevaluación y capacidad de sostén si el paciente no puede irse a casa",
] as const;

const hospitalizationPoints = [
  "Pacientes que necesitan observación estrecha después de urgencia o cirugía",
  "Control del dolor, fluidoterapia y monitoreo cuando el cuadro no está resuelto",
  "Continuidad del manejo sin cortar el seguimiento al salir del consultorio",
] as const;

const complexCaseRoutes = [
  {
    badge: "Medicina interna",
    title: "Casos que no encajan en una sola etiqueta rápida",
    description:
      "Cuando el problema es persistente, cambiante o difícil de integrar, medicina interna ayuda a ordenar signos, estudios y evolución clínica.",
    href: "/medicina-interna",
    icon: BrainCircuit,
  },
  {
    badge: "Oncología",
    title: "Masas, hallazgos persistentes y decisiones que requieren más criterio",
    description:
      "La oncología clínica no empieza prometiendo tratamiento; empieza estudiando mejor, ordenando prioridades y acompañando la evolución del paciente.",
    href: "/oncologia",
    icon: Activity,
  },
  {
    badge: "Endoscopía",
    title: "Evaluar o resolver con mínima invasión cuando el caso lo permite",
    description:
      "Hay pacientes en los que una ruta mínimamente invasiva puede confirmar, actuar antes o evitar un abordaje mayor.",
    href: "/endoscopia",
    icon: Waves,
  },
] as const;

const technologyBullets = [
  "RX, ultrasonido y laboratorio ayudan a decidir con menos demora",
  "Quirófano y áreas de procedimiento sostienen resolución clínica real",
  "Hospitalización y monitoreo continuo aumentan control del caso",
] as const;

function SectionAction({
  href,
  label,
  variant = "default",
}: {
  href: string;
  label: string;
  variant?: "default" | "outline";
}) {
  return (
    <Button
      asChild
      size="lg"
      variant={variant}
      className="h-11 rounded-2xl px-6"
    >
      <Link href={href}>
        {label}
        <ArrowRight aria-hidden={true} className="h-4 w-4" />
      </Link>
    </Button>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <ClinicalSection
        badge="Capacidad de resolución"
        title="Aquí no solo se recibe al paciente: aquí se decide, se interviene y se sostiene el caso"
        description="La homepage debe dejar claro que este hospital puede recibir urgencias, aclarar cuadros complejos, intervenir cuando hace falta y acompañar la evolución clínica sin perder continuidad."
      >
        <div className="grid gap-5 xl:grid-cols-[1.15fr_0.925fr_0.925fr]">
          {resolutionCards.map((card) => {
            const Icon = card.icon;
            const isCritical = card.tone === "critical";

            return (
              <Card
                key={card.title}
                className={
                  isCritical
                    ? "border-primary/10 bg-[linear-gradient(135deg,#1d3f68_0%,#16314f_70%,#11263d_100%)] text-white shadow-[0_34px_110px_-58px_rgba(15,23,42,0.58)]"
                    : "bg-white"
                }
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <Badge
                      variant={isCritical ? "outline" : "secondary"}
                      className={
                        isCritical
                          ? "border-white/15 bg-white text-primary"
                          : undefined
                      }
                    >
                      {card.badge}
                    </Badge>
                    <div
                      className={
                        isCritical
                          ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white"
                          : "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary"
                      }
                    >
                      <Icon aria-hidden={true} className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <CardTitle className={isCritical ? "text-white" : "text-slate-950"}>
                      {card.title}
                    </CardTitle>
                    <CardDescription
                      className={isCritical ? "text-slate-100" : "text-base text-slate-600"}
                    >
                      {card.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ClinicalBulletGrid items={card.items} tone={isCritical ? "dark" : "default"} />
                  <Button
                    asChild
                    size="lg"
                    variant={isCritical ? "outline" : "default"}
                    className={
                      isCritical
                        ? "h-11 rounded-2xl border-white/15 bg-white text-primary hover:bg-white/92"
                        : "h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
                    }
                  >
                    <Link href={card.href}>
                      {card.ctaLabel}
                      <ArrowRight aria-hidden={true} className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ClinicalSection>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,#1d3f68_0%,#16314f_70%,#11263d_100%)] p-6 text-white shadow-[0_34px_110px_-58px_rgba(15,23,42,0.58)] md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <Badge className="border-white/15 bg-white text-primary">
                Triage clínico orientativo
              </Badge>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                No saber exactamente qué tiene tu mascota es normal. Esperar de más, no siempre.
              </h2>
              <p className="text-lg leading-8 text-slate-100">
                El triage ayuda a ordenar la urgencia, orientar el siguiente paso y decidir si conviene actuar ahora, valorar hoy mismo o seguir una ruta clínica más precisa.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-11 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                >
                  <Link href="/triage?entrypoint=home-triage-central">
                    Abrir triage
                    <ArrowRight aria-hidden={true} className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <a href="tel:+524433246136">
                    <PhoneCall aria-hidden={true} className="h-4 w-4" />
                    Llamar si es urgente
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.7rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <HeartPulse aria-hidden={true} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  Si hay duda, el hospital puede orientar
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-100">
                  No hace falta llegar con un diagnóstico para actuar bien. El primer objetivo es no perder tiempo clínico útil.
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Siren aria-hidden={true} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  Si el caso se ve mal, la ruta cambia
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-100">
                  El triage no reemplaza valoración médica, pero sí puede ayudar a priorizar urgencias cuando no conviene esperar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClinicalSection
        badge="Diagnóstico hospitalario"
        title="No todo se resuelve con una consulta básica: estudiar bien cambia decisiones"
        description="La autoridad diagnóstica no viene de listar estudios, sino de mostrar que el hospital puede aclarar mejor el caso cuando lo que se ve no basta para decidir."
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <ClinicalBulletGrid items={diagnosticSignals} />
            <div className="rounded-[1.7rem] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Microscope aria-hidden={true} className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-950">
                    Estudiar a tiempo evita errores de dirección
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    La diferencia muchas veces está en saber si el paciente necesita intervenirse, vigilarse, hospitalizarse o escalar a otra ruta clínica sin improvisar.
                  </p>
                </div>
              </div>
            </div>
            <SectionAction href="/diagnostico" label="Explorar diagnóstico hospitalario" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)] sm:col-span-2">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/marketing/tech/Laboratorio.webp"
                  alt="Área de laboratorio hospitalario veterinario"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/marketing/tech/Consultorio.webp"
                  alt="Consultorio clínico para valoración hospitalaria"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/marketing/tech/Laboratorio1.webp"
                  alt="Apoyo diagnóstico hospitalario dentro de Nuskë Vet Center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </ClinicalSection>

      <ClinicalSection
        badge="Cirugía hospitalaria"
        title="La cirugía aquí se presenta como resolución clínica, no como catálogo de procedimientos"
        description="La percepción correcta no es “hacen cirugía”, sino “saben cuándo intervenir, cómo reducir riesgo y cómo sostener al paciente antes y después”."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_0.92fr]">
          <div className="rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,#1d3f68_0%,#16314f_70%,#11263d_100%)] p-6 text-white shadow-[0_34px_110px_-58px_rgba(15,23,42,0.58)] md:p-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <Syringe aria-hidden={true} className="h-4 w-4 text-accent" />
                Resolución quirúrgica con soporte hospitalario
              </div>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Decidir bien cuándo operar importa tanto como operar bien
              </h3>
              <p className="text-base leading-8 text-slate-100">
                Una cirugía hospitalaria bien indicada reduce decisiones apresuradas, mejora control anestésico y deja al paciente dentro de un entorno donde la recuperación puede sostenerse.
              </p>
              <ClinicalBulletGrid items={surgeryHighlights} tone="dark" />
              <SectionAction href="/cirugia" label="Ver cirugía hospitalaria" variant="outline" />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/marketing/tech/Quirofano.webp"
                  alt="Quirófano veterinario hospitalario"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
            <Card className="bg-white">
              <CardHeader>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <ShieldPlus aria-hidden={true} className="h-5 w-5" />
                </div>
                <CardTitle className="text-slate-950">
                  Seguridad perioperatoria y soporte posterior
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  El valor hospitalario aparece cuando anestesia, monitoreo, control del dolor y observación postoperatoria se mantienen dentro de la misma ruta clínica.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </ClinicalSection>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.2)] md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <div className="space-y-5">
              <Badge variant="secondary">Hospitalización y monitoreo</Badge>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">
                Algunos pacientes no deberían irse a casa todavía
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                La hospitalización aumenta el valor percibido del hospital porque deja claro que aquí también se puede observar, reevaluar y sostener tratamiento cuando una visita breve no alcanza.
              </p>
              <ClinicalBulletGrid items={hospitalizationPoints} />
              <div className="flex flex-col gap-3 sm:flex-row">
                <SectionAction href="/urgencias" label="Ver atención hospitalaria" />
                <SectionAction href="/contacto" label="Solicitar valoración médica" variant="outline" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)] sm:col-span-2">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/marketing/tech/Hospital.webp"
                    alt="Área hospitalaria para monitoreo y observación clínica"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <Card className="bg-slate-50">
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <HeartPulse aria-hidden={true} className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-slate-950">
                    Vigilar también es tratar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    El monitoreo continuo permite detectar cambios, ajustar manejo y decidir alta con más seguridad clínica.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-slate-50">
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Building2 aria-hidden={true} className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-slate-950">
                    Continuidad dentro del mismo entorno
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    Urgencias, cirugía y recuperación ganan coherencia cuando el paciente no se fragmenta entre lugares distintos.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ClinicalSection
        badge="Casos complejos"
        title="Si tu mascota no se resolvió en otro lugar, aquí existen rutas clínicas para pensar mejor el caso"
        description="Los casos complejos no necesitan una sola etiqueta comercial. Necesitan un hospital que sepa cuándo integrar medicina interna, oncología o mínima invasión para avanzar con más criterio."
      >
        <div className="grid gap-5 xl:grid-cols-3">
          {complexCaseRoutes.map((route) => {
            const Icon = route.icon;

            return (
              <Card key={route.title} className="bg-white">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant="secondary">{route.badge}</Badge>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon aria-hidden={true} className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-slate-950">{route.title}</CardTitle>
                    <CardDescription className="text-base text-slate-600">
                      {route.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <SectionAction href={route.href} label="Explorar ruta clínica" variant="outline" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ClinicalSection>

      <section className="bg-muted/10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5">
            <Badge variant="secondary">Tecnología al servicio de la decisión clínica</Badge>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">
              La tecnología importa aquí porque ayuda a decidir mejor, no porque sea protagonista
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              En la homepage la tecnología debe quedar subordinada a urgencias, diagnóstico, cirugía y hospitalización. Su valor aparece cuando mejora tiempo, precisión y control del caso.
            </p>
            <ClinicalBulletGrid items={technologyBullets} />
            <SectionAction href="/tecnologia" label="Ver infraestructura clínica" variant="outline" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)] sm:col-span-2">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/marketing/tech/Fachada.webp"
                  alt="Instalaciones reales de Nuskë Vet Center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/marketing/tech/Lobby.webp"
                  alt="Lobby hospitalario veterinario"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/marketing/tech/Quirofano.webp"
                  alt="Quirófano hospitalario veterinario"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <MedicalTeam />

      <section className="px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-18">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,#1d3f68_0%,#16314f_70%,#11263d_100%)] p-6 text-white shadow-[0_34px_110px_-58px_rgba(15,23,42,0.58)] md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="space-y-4">
              <Badge className="border-white/15 bg-white text-primary">
                Acción recomendada
              </Badge>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Si es serio, actúa. Si no está claro, el hospital puede orientarte.
              </h2>
              <p className="text-lg leading-8 text-slate-100">
                Esta homepage no termina en exploración pasiva. Debe cerrar con una salida clara para urgencias, valoración médica o triage cuando todavía falta certeza.
              </p>
            </div>

            <div className="grid gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
              >
                <a href="tel:+524433246136">
                  <PhoneCall aria-hidden={true} className="h-4 w-4" />
                  Llamar por urgencia
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
              >
                <Link href="/contacto">
                  Solicitar valoración médica
                  <ArrowRight aria-hidden={true} className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
              >
                <Link href="/triage?entrypoint=home-final-cta">
                  Abrir triage
                  <ArrowRight aria-hidden={true} className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
