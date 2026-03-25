import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjIwIiBmaWxsPSIjRUVGNFZGIi8+PC9zdmc+";

const authorityHighlights = [
  "Urgencias 24/7",
  "Cirugía avanzada",
  "Diagnóstico hospitalario",
  "Mínima invasión",
] as const;

const medicalDirector = {
  label: "Dirección Médica",
  name: "MVZ Dipl. Alexis Ramírez",
  role: "Director Médico · Cirugía Avanzada · Anestesiología Clínica",
  description:
    "Participa en decisiones quirúrgicas y anestésicas en pacientes que necesitan atención hospitalaria especializada y un manejo cuidadoso.",
  badges: ["Cirugía avanzada", "Anestesiología", "Paciente crítico"],
  ctaLabel: "Solicitar valoración especializada",
  ctaHref: "/contacto",
  imageSrc: "/marketing/team/Alexis.webp",
  imageAlt: "Retrato editorial del director médico de Nuskë Vet Center",
} as const;

const hospitalGuard = {
  label: "Guardia 24/7",
  name: "MVZ Dipl. Janine Lara",
  role: "Urgencias y Cuidados Intensivos",
  description:
    "Recibe y estabiliza pacientes con trauma, dolor intenso o cambios que requieren atención inmediata y vigilancia continua dentro del hospital.",
  badges: ["Emergencias 24/7", "Hospitalización", "Paciente crítico"],
  ctaLabel: "Solicitar atención inmediata",
  ctaHref: "/contacto",
  imageSrc: "/marketing/team/Janine.webp",
  imageAlt: "Retrato editorial de la médica de guardia hospitalaria de Nuskë Vet Center",
} as const;

const advancedSpecialties = [
  {
    label: "Alta Especialidad",
    name: "MVZ Dipl. Diana Zúñiga",
    role: "Endoscopía y Mínima Invasión",
    description:
      "Valora y trata casos en los que es posible resolver el problema con técnicas menos invasivas y una recuperación más controlada.",
    badges: ["Endoscopía", "Mínima invasión", "Diagnóstico avanzado"],
    ctaLabel: "Ver valoración especializada",
    ctaHref: "/servicios",
    imageSrc: "/marketing/team/Diana.webp",
    imageAlt: "Retrato editorial de la especialista en endoscopía y mínima invasión",
  },
  {
    label: "Alta Especialidad",
    name: "MVZ Dipl. Alondra Galán",
    role: "Cirugía de Tejidos Blandos",
    description:
      "Atiende pacientes que requieren procedimientos quirúrgicos precisos y seguimiento cercano dentro de un entorno hospitalario.",
    badges: ["Cirugía", "Tejidos blandos", "Manejo quirúrgico"],
    ctaLabel: "Solicitar valoración quirúrgica",
    ctaHref: "/contacto",
    imageSrc: "/marketing/team/Alondra.webp",
    imageAlt: "Retrato editorial de la especialista en cirugía de tejidos blandos",
  },
] as const;

function MemberImage({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className: string;
}) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        placeholder="blur"
        blurDataURL={blurDataURL}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover grayscale-[0.12]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent" />
    </div>
  );
}

function CapabilityBadges({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge
          key={item}
          variant="outline"
          className="border-primary/15 bg-primary/5 text-primary"
        >
          {item}
        </Badge>
      ))}
    </div>
  );
}

function SectionCta({
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

export function MedicalTeam() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#eef4fb_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-4xl space-y-4">
          <Badge variant="secondary">Cuerpo médico hospitalario</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Médicos que pueden actuar cuando la salud de tu mascota se complica
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Tu mascota será atendida por profesionales que reciben urgencias,
            realizan procedimientos complejos y acompañan la recuperación dentro
            del hospital cuando el caso lo necesita.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {authorityHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-primary/10 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-[0_18px_40px_-28px_rgba(15,23,42,0.24)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <Card className="overflow-hidden border-primary/10 bg-white shadow-[0_36px_100px_-54px_rgba(15,23,42,0.4)]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <MemberImage
              src={medicalDirector.imageSrc}
              alt={medicalDirector.imageAlt}
              priority
              className="relative min-h-[420px] bg-slate-200"
            />

            <CardContent className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Badge className="border-primary/15 bg-primary/5 text-primary">
                    {medicalDirector.label}
                  </Badge>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                      {medicalDirector.name}
                    </h3>
                    <p className="text-base font-medium text-primary sm:text-lg">
                      {medicalDirector.role}
                    </p>
                    <p className="max-w-2xl text-base leading-8 text-slate-600">
                      {medicalDirector.description}
                    </p>
                  </div>
                </div>

                <CapabilityBadges items={medicalDirector.badges} />
              </div>

              <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-7 text-slate-500">
                  Su experiencia ayuda a tomar decisiones seguras cuando el
                  paciente está delicado y necesita algo más que una atención
                  básica.
                </p>
                <SectionCta
                  href={medicalDirector.ctaHref}
                  label={medicalDirector.ctaLabel}
                />
              </div>
            </CardContent>
          </div>
        </Card>

        <div className="space-y-5">
          <div className="max-w-3xl space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Guardia Hospitalaria
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Médicos que reciben, estabilizan y acompañan los casos más
              delicados
            </h3>
          </div>

          <Card className="overflow-hidden border-slate-200 bg-white shadow-[0_28px_80px_-48px_rgba(15,23,42,0.28)]">
            <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
              <MemberImage
                src={hospitalGuard.imageSrc}
                alt={hospitalGuard.imageAlt}
                className="relative min-h-[340px] bg-slate-200"
              />

              <CardContent className="space-y-6 p-6 sm:p-8">
                <div className="space-y-3">
                  <Badge
                    variant="outline"
                    className="border-primary/15 bg-primary/5 text-primary"
                  >
                    {hospitalGuard.label}
                  </Badge>
                  <h4 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {hospitalGuard.name}
                  </h4>
                  <p className="text-base font-medium text-primary">
                    {hospitalGuard.role}
                  </p>
                  <p className="max-w-2xl text-base leading-8 text-slate-600">
                    {hospitalGuard.description}
                  </p>
                </div>

                <CapabilityBadges items={hospitalGuard.badges} />

                <SectionCta
                  href={hospitalGuard.ctaHref}
                  label={hospitalGuard.ctaLabel}
                  variant="outline"
                />
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <div className="max-w-3xl space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Alta complejidad
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Especialidades médicas que ayudan cuando el caso necesita una
              evaluación más profunda
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {advancedSpecialties.map((member) => (
              <Card
                key={member.name}
                className="overflow-hidden border-slate-200 bg-white shadow-[0_24px_70px_-46px_rgba(15,23,42,0.24)]"
              >
                <div className="grid gap-0 sm:grid-cols-[0.78fr_1.22fr]">
                  <MemberImage
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    className="relative min-h-[300px] bg-slate-200"
                  />

                  <CardContent className="flex flex-col justify-between gap-6 p-6">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <Badge
                          variant="outline"
                          className="border-primary/15 bg-primary/5 text-primary"
                        >
                          {member.label}
                        </Badge>
                        <div className="space-y-2">
                          <h4 className="text-2xl font-semibold tracking-tight text-slate-950">
                            {member.name}
                          </h4>
                          <p className="text-base font-medium text-primary">
                            {member.role}
                          </p>
                          <p className="text-base leading-8 text-slate-600">
                            {member.description}
                          </p>
                        </div>
                      </div>

                      <CapabilityBadges items={member.badges} />
                    </div>

                    <SectionCta
                      href={member.ctaHref}
                      label={member.ctaLabel}
                      variant="outline"
                    />
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-primary/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Aquí encontrarás médicos que pueden ayudarte cuando la condición de
            tu mascota exige experiencia, criterio y atención hospitalaria real.
          </p>
          <SectionCta href="/contacto" label="Solicitar valoración médica" />
        </div>
      </div>
    </section>
  );
}