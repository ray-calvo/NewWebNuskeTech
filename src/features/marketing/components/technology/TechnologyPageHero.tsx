import { Badge } from "@/components/ui/badge";

export function TechnologyPageHero() {
  return (
    <section className="px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl space-y-4">
          <Badge variant="secondary">Nuskë Tech</Badge>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
            Tecnología de Punta al Servicio de tu Mascota
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Infraestructura clínica, mínima invasión y herramientas diagnósticas
            que permiten actuar con precisión, rapidez y seguridad en cada caso.
          </p>
        </div>
      </div>
    </section>
  );
}
