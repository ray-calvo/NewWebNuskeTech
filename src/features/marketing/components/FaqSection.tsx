import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    value: "safety-surgery",
    question: "¿Qué tan segura es una cirugía en Nuskë Vet Center?",
    answer:
      "Usamos protocolos de anestesia inhalada y monitoreo multiparamétrico avanzado, minimizando riesgos.",
  },
  {
    value: "endoscopy-vs-surgery",
    question: "¿Cuál es la diferencia entre endoscopía y cirugía tradicional?",
    answer:
      "La endoscopía es mínima invasión; significa menos dolor, sin suturas externas y recuperación en 24 horas.",
  },
  {
    value: "emergency-care",
    question: "¿Atienden urgencias sin cita previa?",
    answer:
      "Atendemos sin cita previa las 24 horas. Contamos con laboratorio y hospitalización inmediata.",
  },
  {
    value: "exotic-species",
    question: "¿Atienden aves, reptiles y otras especies exóticas?",
    answer:
      "Contamos con especialistas certificados para el manejo de aves, reptiles y pequeños mamíferos.",
  },
  {
    value: "payment-methods",
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos todas las tarjetas de crédito, débito y seguros veterinarios principales.",
  },
] as const;

export function FaqSection() {
  return (
    <section className="bg-muted/10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-3 text-center">
          <Badge variant="secondary" className="mx-auto">
            Preguntas frecuentes
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Dudas frecuentes sobre nuestros servicios
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Resolvemos las preguntas más comunes sobre urgencias, cirugía,
            mínima invasión, especies exóticas y formas de pago.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full rounded-3xl">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-slate-200/80"
            >
              <AccordionTrigger className="rounded-2xl px-5 py-4 text-base font-semibold text-primary hover:no-underline aria-expanded:bg-muted/20 [&_[data-slot=accordion-trigger-icon]]:text-accent">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-base leading-8 text-slate-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
