import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { TriageWizard } from "@/features/marketing/components/triage/TriageWizard";

export const metadata: Metadata = {
  title: "Chequeo inicial para tu mascota",
  description:
    "Herramienta de orientación inicial para ayudarte a identificar si tu mascota necesita atención urgente, valoración hoy o puede esperar una consulta.",
};

export default function TriagePage() {
  return (
    <main className="bg-background">
      <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-4xl space-y-4">
            <Badge variant="secondary">Chequeo inicial</Badge>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              Responde unas preguntas y te ayudamos a saber si tu mascota
              necesita urgencias, atención hoy o una valoración médica.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Este chequeo se basa en signos visibles y factores que pueden
              agravar el problema. No reemplaza la valoración veterinaria, pero
              sí puede ayudarte a decidir con más claridad qué hacer ahora.
            </p>
          </div>

          <TriageWizard />
        </div>
      </section>
    </main>
  );
}