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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    title: "Atención inmediata cuando el estado del paciente no puede esperar",
    description:
      "Si tu mascota llega grave, con dolor intenso o empeora rápido, necesita un hospital que pueda recibirla, estabilizarla y comenzar el tratamiento sin demora.",
    icon: Siren,
    href: "/urgencias",
    ctaLabel: "Ir a urgencias",
    tone: "critical" as const,
    items: [
      "Atención hospitalaria 24/7",
      "Estabilización desde el primer momento",
      "Vigilancia cercana mientras el paciente sigue delicado",
    ],
  },
  {
    badge: "Diagnóstico hospitalario",
    title: "Estudios clínicos cuando el problema no se entiende a simple vista",
    description:
      "No todo se resuelve en una consulta básica. A veces hace falta estudiar mejor para saber qué tiene tu mascota y decidir el tratamiento correcto.",
    icon: ScanSearch,
    href: "/diagnostico",
    ctaLabel: "Ver diagnóstico",
    tone: "default" as const,
    items: [
      "Imagenología y laboratorio con enfoque médico",
      "Más claridad antes de decidir",
      "Menos tiempo perdido en suposiciones",
    ],
  },
  {
    badge: "Cirugía y hospitalización",
    title: "Tratamiento quirúrgico y vigilancia médica cuando el caso lo requiere",
    description:
      "Hay pacientes que necesitan cirugía, monitoreo o recuperación dentro del hospital para poder recibir un manejo más seguro y completo.",
    icon: Syringe,
    href: "/cirugia",
    ctaLabel: "Ver cirugía",
    tone: "default" as const,
    items: [
      "Cirugía con respaldo médico",
      "Monitoreo durante el procedimiento",
      "Recuperación dentro del hospital",
    ],
  },
] as const;

const diagnosticSignals = [
  "Vómitos repetidos, decaimiento o dolor sin causa clara",
  "Cambios que no se explican con una revisión rápida",
  "Pacientes que empeoran y requieren decidir pronto qué hacer",
  "Problemas que siguen sin una respuesta clara después de una primera consulta",
] as const;

const surgeryHighlights = [
  "En algunos casos, esperar más puede empeorar el problema",
  "La seguridad de la cirugía también depende del monitoreo y del equipo que acompaña al paciente",
  "Después de operar, algunos pacientes necesitan quedarse en observación y tratamiento dentro del hospital",
] as const;

const hospitalizationPoints = [
  "Pacientes que siguen delicados después de una urgencia o una cirugía",
  "Casos que necesitan control del dolor, fluidos, medicación o vigilancia continua",
  "Mascotas que todavía no están listas para regresar a casa con seguridad",
] as const;

const complexCaseRoutes = [
  {
    badge: "Medicina interna",
    title: "Cuando el problema persiste y no se entiende con una sola revisión",
    description:
      "Ayuda a valorar casos que cambian con el tiempo, no mejoran como se esperaba o necesitan integrar síntomas, estudios y evolución clínica.",
    href: "/medicina-interna",
    icon: BrainCircuit,
  },
  {
    badge: "Oncología",
    title: "Cuando aparece una masa o un hallazgo que necesita estudiarse mejor",
    description:
      "Permite valorar el caso con más profundidad, ordenar prioridades y decidir el siguiente paso con mayor claridad para el paciente.",
    href: "/oncologia",
    icon: Activity,
  },
  {
    badge: "Endoscopía",
    title: "Cuando es posible evaluar o tratar con una opción menos invasiva",
    description:
      "En algunos pacientes, la endoscopía ayuda a confirmar el problema o actuar con menos agresión y una recuperación más controlada.",
    href: "/endoscopia",
    icon: Waves,
  },
] as const;

const technologyBullets = [
  "Imagenología y laboratorio ayudan a entender mejor qué está pasando",
  "Quirófano y áreas de procedimiento permiten actuar con mayor precisión",
  "Hospitalización y monitoreo continuo ayudan a responder mejor cuando el paciente cambia",
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
        badge="Atención hospitalaria"
        title="Cuando la salud de tu mascota se complica, necesita un hospital que pueda actuar de inmediato."
        description="Atendemos urgencias, aclaramos diagnósticos difíciles y realizamos intervenciones cuando el tratamiento lo requiere. Además, acompañamos la evolución del paciente dentro del hospital hasta lograr mayor estabilidad."
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
                    <CardTitle
                      className={isCritical ? "text-white" : "text-slate-950"}
                    >
                      {card.title}
                    </CardTitle>
                    <CardDescription
                      className={
                        isCritical
                          ? "text-slate-100"
                          : "text-base text-slate-600"
                      }
                    >
                      {card.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ClinicalBulletGrid
                    items={card.items}
                    tone={isCritical ? "dark" : "default"}
                  />
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
                Chequeo clínico inicial
              </Badge>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                No siempre es fácil saber si tu mascota necesita atención urgente
              </h2>
              <p className="text-lg leading-8 text-slate-100">
                El chequeo inicial te ayuda a decidir mejor cuando no tienes claro
                si debes actuar de inmediato, solicitar una valoración médica o
                seguir una ruta más específica.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-11 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                >
                  <Link href="/triage?entrypoint=home-triage-central">
                    Iniciar chequeo clínico
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
                  La duda también necesita orientación
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-100">
                  No hace falta saber exactamente qué tiene tu mascota para dar el
                  siguiente paso. Lo importante es no perder tiempo cuando necesita
                  atención.
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Siren aria-hidden={true} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  Si el caso se ve grave, es mejor actuar ahora
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-100">
                  Este chequeo no sustituye a un médico, pero sí puede ayudarte a
                  identificar cuándo ya no conviene esperar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClinicalSection
        badge="Diagnóstico hospitalario"
        title="Entender qué tiene tu mascota permite decidir el tratamiento correcto"
        description="Cuando el problema no se entiende a simple vista, los estudios ayudan a saber qué está pasando y a elegir el tratamiento con mayor seguridad."
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
                    Un estudio a tiempo puede cambiar el rumbo del tratamiento
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    A veces el siguiente paso consiste en operar, hospitalizar o
                    vigilar de cerca al paciente. Lo importante es saber cuándo
                    hacerlo y contar con un hospital preparado para ello.
                  </p>
                </div>
              </div>
            </div>
            <SectionAction
              href="/diagnostico"
              label="Explorar diagnóstico hospitalario"
            />
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
        title="Hay situaciones en las que operar es necesario para salvar o mejorar la vida del paciente"
        description="Cada caso se evalúa de forma individual para decidir si la cirugía es la mejor opción, considerando los riesgos, el estado general del paciente y el seguimiento posterior dentro del hospital."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_0.92fr]">
          <div className="rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,#1d3f68_0%,#16314f_70%,#11263d_100%)] p-6 text-white shadow-[0_34px_110px_-58px_rgba(15,23,42,0.58)] md:p-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <Syringe aria-hidden={true} className="h-4 w-4 text-accent" />
                Cirugía con respaldo hospitalario
              </div>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Cuando hay que intervenir, importa hacerlo con seguridad y en el
                momento correcto
              </h3>
              <p className="text-base leading-8 text-slate-100">
                Hay pacientes en los que operar no puede retrasarse, y otros en
                los que la preparación y el monitoreo hacen toda la diferencia
                para su recuperación.
              </p>
              <ClinicalBulletGrid items={surgeryHighlights} tone="dark" />
              <SectionAction
                href="/cirugia"
                label="Ver cirugía hospitalaria"
                variant="outline"
              />
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
                  Seguridad antes, durante y después del procedimiento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  La cirugía no termina en el quirófano. El monitoreo, el control
                  del dolor y la recuperación también forman parte del tratamiento.
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
                Algunos pacientes necesitan permanecer bajo vigilancia médica
                antes de regresar a casa
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                La hospitalización permite observar la evolución del paciente,
                ajustar tratamientos y actuar rápidamente si el estado cambia
                durante la recuperación.
              </p>
              <ClinicalBulletGrid items={hospitalizationPoints} />
              <div className="flex flex-col gap-3 sm:flex-row">
                <SectionAction
                  href="/urgencias"
                  label="Ver atención hospitalaria"
                />
                <SectionAction
                  href="/contacto"
                  label="Solicitar valoración médica"
                  variant="outline"
                />
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
                    Vigilar también forma parte del tratamiento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    Observar de cerca al paciente ayuda a detectar cambios,
                    responder a tiempo y decidir cuándo es seguro darle de alta.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-slate-50">
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Building2 aria-hidden={true} className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-slate-950">
                    El paciente sigue atendido dentro del mismo hospital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    Eso permite dar continuidad al tratamiento sin perder tiempo
                    ni fragmentar el manejo entre lugares distintos.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ClinicalSection
        badge="Casos complejos"
        title="Cuando el problema no mejora o es difícil de entender, es necesario evaluar el caso con mayor profundidad"
        description="Algunos pacientes requieren integrar distintas áreas médicas para definir el tratamiento más adecuado y avanzar con mayor claridad en su recuperación."
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
                    <CardTitle className="text-slate-950">
                      {route.title}
                    </CardTitle>
                    <CardDescription className="text-base text-slate-600">
                      {route.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <SectionAction
                    href={route.href}
                    label="Explorar valoración"
                    variant="outline"
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ClinicalSection>

      <section className="bg-muted/10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5">
            <Badge variant="secondary">
              Tecnología al servicio de la atención médica
            </Badge>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">
              La tecnología es útil cuando permite diagnosticar mejor y tratar
              con mayor precisión
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              En este hospital, la tecnología no reemplaza el criterio médico.
              Su valor está en ayudar a entender mejor el caso y dar al paciente
              una atención más precisa.
            </p>
            <ClinicalBulletGrid items={technologyBullets} />
            <SectionAction
              href="/tecnologia"
              label="Ver infraestructura clínica"
              variant="outline"
            />
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
                Atención médica hospitalaria
              </Badge>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Si tu mascota necesita atención médica, estamos preparados para
                ayudarte
              </h2>
              <p className="text-lg leading-8 text-slate-100">
                Si el caso es urgente, actúa ahora. Si no tienes claro qué está
                pasando, podemos orientarte para decidir el siguiente paso con
                mayor seguridad.
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
                  Iniciar chequeo clínico
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