import { Badge } from "@/components/ui/badge";

export function ServicesPageHero() {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-10 lg:pt-8">
      <div className="mx-auto max-w-7xl space-y-4">
        <Badge variant="secondary">Servicios del hospital</Badge>
        <div className="max-w-5xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
            Encuentra la atención que puede necesitar tu mascota
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Aquí reunimos los principales servicios hospitalarios de Nuskë Vet
            Center para ayudarte a ubicar con más claridad qué tipo de atención
            puede hacer falta según lo que está pasando con tu mascota.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            "Urgencias, cirugía, diagnóstico y endoscopía forman parte del núcleo hospitalario",
            "También encuentras atención preventiva, seguimiento y revisión médica",
            "Hay servicios para pacientes exóticos y otros casos que requieren valoración más específica",
            "Si tu mascota está inestable o se ve grave, la prioridad sigue siendo urgencias",
            "Esta página te ayuda a ubicar mejor por dónde empezar",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm font-semibold text-primary shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}