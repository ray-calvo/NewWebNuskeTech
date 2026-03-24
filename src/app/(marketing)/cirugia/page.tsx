import type { Metadata } from "next";

import { ClinicalParentPageScaffold } from "@/features/marketing/components/clinical/ClinicalParentPageScaffold";

export const metadata: Metadata = {
  title: "Cirugía",
  description:
    "Cirugía hospitalaria y procedimientos especializados con control anestésico, seguridad clínica y seguimiento postoperatorio en Nuskë Vet Center.",
};

const surgeryWhatsAppHref =
  "https://wa.me/524433369624?text=Hola%20Nusk%C3%AB,%20quiero%20agendar%20una%20valoraci%C3%B3n%20quir%C3%BArgica%20para%20mi%20mascota.";

export default function CirugiaPage() {
  return (
    <ClinicalParentPageScaffold
      badge="Cirugía hospitalaria"
      title="Cirugía Hospitalaria y Procedimientos Especializados"
      description="Ruta madre para capacidad quirúrgica, control anestésico y manejo hospitalario integral. Aquí vivirá la profundidad clínica de cirugía, recuperación y submódulos quirúrgicos futuros."
      cards={[
        {
          title: "Narrativa quirúrgica futura",
          description:
            "Placeholder para procedimientos, criterios de valoración y manejo quirúrgico integral.",
        },
        {
          title: "Soporte tecnológico futuro",
          description:
            "Placeholder para seguridad anestésica, monitoreo y soporte de diagnóstico perioperatorio.",
        },
        {
          title: "CTA de valoración",
          description:
            "Placeholder para solicitud de valoración quirúrgica y contacto médico.",
        },
      ]}
      primaryCtaLabel="Solicitar valoración"
      primaryCtaHref={surgeryWhatsAppHref}
      secondaryCtaLabel="Agendar contacto"
      secondaryCtaHref="/contacto"
    />
  );
}
