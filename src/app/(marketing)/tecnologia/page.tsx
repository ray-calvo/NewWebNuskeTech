import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  technologyEvidenceSections,
} from "@/features/marketing/components/technology/data";
import { TechnologyEvidenceSection } from "@/features/marketing/components/technology/TechnologyEvidenceSection";
import { TechnologyPageHero } from "@/features/marketing/components/technology/TechnologyPageHero";

export default function TecnologiaPage() {
  return (
    <main className="bg-background">
      <TechnologyPageHero />

      {technologyEvidenceSections.map((section, index) => (
        <TechnologyEvidenceSection
          key={section.id}
          section={section}
          reverse={index % 2 === 1}
        />
      ))}

      <section className="px-4 pb-12 pt-2 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.2)] md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">
                Cuando la infraestructura clínica es real, también cambia la confianza en la decisión médica
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                Esta página existe para mostrar el contexto hospitalario donde
                se valoran, estudian, intervienen y acompañan mejor los casos.
                Si el paciente está inestable, la prioridad sigue siendo
                urgencias. Si necesitas orientar la ruta clínica correcta,
                contáctanos o revisa el mapa del hospital.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-primary/10 bg-primary p-6 text-white shadow-[0_26px_80px_-52px_rgba(15,23,42,0.6)]">
              <h3 className="text-2xl font-semibold text-white">
                Acción recomendada
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Si necesitas atención inmediata, prioriza urgencias. Si buscas
                una valoración para un caso complejo o quieres orientarte mejor
                dentro del hospital, usa el canal de contacto o revisa las rutas
                clínicas publicadas.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-2xl bg-white px-6 text-primary hover:bg-white/92"
                >
                  <Link href="/urgencias">Ir a urgencias 24/7</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <Link href="/contacto">Solicitar valoración</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/15 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <Link href="/servicios">Ver rutas clínicas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
