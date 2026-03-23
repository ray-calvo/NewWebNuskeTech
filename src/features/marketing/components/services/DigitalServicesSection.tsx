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
      <div className="grid gap-8 lg:grid-cols-2">
        {services.map((service) => {
          const whatsappHref = `https://wa.me/524433369624?text=${encodeURIComponent(
            service.whatsappMessage
          )}`;

          return (
            <div key={service.title} className="space-y-4">
              <Badge className="border-accent/20 bg-accent/10 text-primary">
                Innovación digital
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
