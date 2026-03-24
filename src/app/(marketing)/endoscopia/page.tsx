import type { Metadata } from "next";

import { ClinicalParentPageScaffold } from "@/features/marketing/components/clinical/ClinicalParentPageScaffold";

export const metadata: Metadata = {
  title: "Endoscopía",
  description:
    "Endoscopía y mínima invasión veterinaria para diagnóstico y procedimientos con menor trauma y recuperación más ágil en Nuskë Vet Center.",
};

const endoscopyWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20informaci%C3%B3n%20sobre%20endoscop%C3%ADa%20o%20m%C3%ADnima%20invasi%C3%B3n%20para%20mi%20mascota.";

export default function EndoscopiaPage() {
  return (
    <ClinicalParentPageScaffold
      badge="Endoscopía y mínima invasión"
      title="Endoscopía y Mínima Invasión Veterinaria"
      description="Ruta madre para procedimientos de mínima invasión, evaluación endoscópica y diferenciación hospitalaria de alta complejidad. Aquí vivirá la narrativa clínica profunda de esta capacidad."
      cards={[
        {
          title: "Narrativa clínica futura",
          description:
            "Placeholder para indicaciones, señales de alerta y escenarios de uso clínico.",
        },
        {
          title: "Diferenciación tecnológica futura",
          description:
            "Placeholder para ventajas de mínima invasión, menor trauma y recuperación más ágil.",
        },
        {
          title: "CTA especializada",
          description:
            "Placeholder para valoración especializada y contacto médico.",
        },
      ]}
      primaryCtaLabel="Solicitar valoración"
      primaryCtaHref={endoscopyWhatsAppHref}
      secondaryCtaLabel="Agendar contacto"
      secondaryCtaHref="/contacto"
    />
  );
}
