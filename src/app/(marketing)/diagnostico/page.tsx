import type { Metadata } from "next";

import { ClinicalParentPageScaffold } from "@/features/marketing/components/clinical/ClinicalParentPageScaffold";

export const metadata: Metadata = {
  title: "Diagnóstico",
  description:
    "Diagnóstico hospitalario para casos complejos, soporte clínico, imagenología y laboratorio veterinario en Nuskë Vet Center.",
};

const diagnosticsWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20informaci%C3%B3n%20sobre%20estudios%20diagn%C3%B3sticos%20para%20mi%20mascota.";

export default function DiagnosticoPage() {
  return (
    <ClinicalParentPageScaffold
      badge="Diagnóstico hospitalario"
      title="Diagnóstico Hospitalario para Casos Complejos"
      description="Ruta madre para estudios diagnósticos, criterio médico y soporte a decisiones clínicas. Aquí vivirá la profundidad de imagenología, laboratorio y evaluación hospitalaria."
      cards={[
        {
          title: "Narrativa diagnóstica futura",
          description:
            "Placeholder para criterios de indicación, lectura clínica y soporte diagnóstico hospitalario.",
        },
        {
          title: "Bloques tecnológicos futuros",
          description:
            "Placeholder para imagenología, laboratorio y comparativas de estudios.",
        },
        {
          title: "CTA diagnóstica",
          description:
            "Placeholder para agendar estudios, pedir orientación y contactar al hospital.",
        },
      ]}
      primaryCtaLabel="Solicitar orientación"
      primaryCtaHref={diagnosticsWhatsAppHref}
      secondaryCtaLabel="Contactar al hospital"
      secondaryCtaHref="/contacto"
    />
  );
}
