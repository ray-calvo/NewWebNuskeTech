import { Badge } from "@/components/ui/badge";

export function FacilitiesIntro() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl space-y-3">
        <Badge variant="secondary">Recorrido por las Instalaciones</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Espacios hospitalarios pensados para intervenir, estabilizar y acompañar.
        </h2>
        <p className="text-lg leading-8 text-slate-600">
          Desde el área de urgencias hasta hospitalización y quirófano, la experiencia
          debe transmitir confianza clínica desde el primer recorrido.
        </p>
      </div>
    </div>
  );
}
