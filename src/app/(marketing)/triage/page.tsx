import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { TriageWizard } from "@/features/marketing/components/triage/TriageWizard";

export const metadata: Metadata = {
  title: "Triage veterinario",
  description:
    "Herramienta de orientación inicial para clasificar el nivel de urgencia y dirigir a la familia hacia la acción adecuada en Nuskë Vet Center.",
};

export default function TriagePage() {
  return (
    <main className="bg-background">
      <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-4xl space-y-4">
            <Badge variant="secondary">Triage veterinario MVP</Badge>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              Orientación inicial para saber si tu mascota requiere urgencias,
              atención hoy o consulta.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Este triage guía de forma simple y rápida con base en signos
              visibles y factores agravantes. No sustituye la valoración
              veterinaria, pero sí ayuda a tomar una decisión inicial con más
              claridad.
            </p>
          </div>

          <TriageWizard />
        </div>
      </section>
    </main>
  );
}
