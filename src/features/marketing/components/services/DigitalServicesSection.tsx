import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { DigitalService } from "@/features/marketing/components/services/types";

type DigitalServicesSectionProps = {
  services: readonly DigitalService[];
};

export function DigitalServicesSection({
  services,
}: DigitalServicesSectionProps) {
  return (
    <section className="rounded-[2rem] border border-primary/10 bg-white/80 p-6 shadow-[0_24px_80px_-56px_rgba(29,63,104,0.16)] sm:p-8">
      <div className="max-w-3xl space-y-3 pb-8">
        <Badge className="border-primary/15 bg-primary/5 text-primary">
          Continuidad y acceso del propietario
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-primary">
          Herramientas digitales subordinadas al seguimiento clínico
        </h2>
        <p className="text-base leading-8 text-slate-600">
          Portal del Propietario y Telemedicina se conservan como apoyos de
          continuidad y comunicación, no como eje principal de la capacidad
          hospitalaria.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {services.map((service) => {
          const whatsappHref = `https://wa.me/524433369624?text=${encodeURIComponent(
            service.whatsappMessage
          )}`;

          return (
            <div key={service.title} className="space-y-4">
              <Badge className="border-accent/20 bg-accent/10 text-primary">
                Soporte complementario
              </Badge>
              <h2 className="text-2xl font-semibold tracking-tight text-primary">
                {service.title}
              </h2>
              <p className="text-base leading-8 text-slate-700">
                {service.description}
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-2xl border-accent bg-accent/10 text-primary hover:bg-accent/20"
              >
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  Solicitar acceso o informes
                </a>
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
