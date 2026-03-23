import { Badge } from "@/components/ui/badge";

export function ServicesPageHero() {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
      <div className="mx-auto max-w-7xl space-y-4">
        <Badge variant="secondary">Especialidades Nuskë</Badge>
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
            Especialidades diseñadas para resolver casos complejos con criterio clínico.
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Cada servicio combina experiencia médica, tecnología aplicada y una vía de
            contacto inmediata para orientar mejor a cada familia desde el primer mensaje.
          </p>
        </div>
      </div>
    </section>
  );
}
