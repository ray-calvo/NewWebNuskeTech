import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjIwIiBmaWxsPSIjRUVGNFZGIi8+PC9zdmc+";

const medicalTeam = [
  {
    name: "Dra. Mariana Nuskë",
    role: "Director Médico",
    specialty: "Cirugía de Alta Especialidad",
    achievement: "Certificación PROCERVET y liderazgo clínico en procedimientos complejos.",
    imageSrc: "/marketing/team/director-cirugia.svg",
    imageAlt: "Retrato editorial de la directora médica de Nuskë Vet Center",
  },
  {
    name: "Dr. Andrés Serrano",
    role: "Especialista",
    specialty: "Endoscopía y Mínima Invasión",
    achievement: "Experiencia en técnicas menos invasivas con recuperación más ágil para el paciente.",
    imageSrc: "/marketing/team/especialista-endoscopia.svg",
    imageAlt: "Retrato editorial del especialista en endoscopía y mínima invasión",
  },
  {
    name: "Dra. Sofía Calderón",
    role: "Especialista",
    specialty: "Medicina de Especies Exóticas",
    achievement: "Valoración y manejo clínico enfocado en especies no convencionales y casos delicados.",
    imageSrc: "/marketing/team/especialista-exoticos.svg",
    imageAlt: "Retrato editorial de la especialista en medicina de especies exóticas",
  },
] as const;

export function MedicalTeam() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <Badge variant="secondary">Equipo médico</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Expertos dedicados a la salud de tu mascota
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Un equipo orientado a cirugía, mínima invasión y atención clínica avanzada
            para acompañar a cada familia con criterio médico y calidez humana.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {medicalTeam.map((member) => (
            <Card
              key={member.name}
              className="group overflow-hidden rounded-3xl border-slate-100 bg-white shadow-[0_24px_60px_-48px_rgba(15,23,42,0.26)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl bg-muted/20">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="object-cover grayscale-[0.28] transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
              </div>

              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.08em] text-slate-500">
                    {member.role}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-primary">
                    {member.name}
                  </h3>
                </div>

                <Badge className="border-accent/20 bg-accent/10 text-primary">
                  {member.specialty}
                </Badge>

                <p className="text-base leading-7 text-slate-700">
                  {member.achievement}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
