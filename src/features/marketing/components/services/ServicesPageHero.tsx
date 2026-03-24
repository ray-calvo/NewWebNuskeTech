import { Badge } from "@/components/ui/badge";

export function ServicesPageHero() {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
      <div className="mx-auto max-w-7xl space-y-5">
        <Badge variant="secondary">Hospital veterinario integral</Badge>
        <div className="max-w-5xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
            Capacidades Hospitalarias y Servicios Especializados
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Atención veterinaria hospitalaria para pacientes críticos,
            procedimientos quirúrgicos, diagnóstico avanzado y seguimiento
            médico continuo.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            "Urgencias 24/7 y paciente crítico",
            "Cirugía hospitalaria especializada",
            "Diagnóstico clínico avanzado",
            "Seguimiento médico continuo",
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
