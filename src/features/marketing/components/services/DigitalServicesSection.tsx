import { Badge } from "@/components/ui/badge";

type DigitalServicesSectionProps = {
  title: string;
  description: string;
};

export function DigitalServicesSection({
  title,
  description,
}: DigitalServicesSectionProps) {
  return (
    <section className="rounded-[2rem] border border-primary/10 bg-white/80 p-6 shadow-[0_24px_80px_-56px_rgba(29,63,104,0.16)] sm:p-8">
      <div className="max-w-3xl space-y-3 pb-8">
        <Badge className="border-primary/15 bg-primary/5 text-primary">
          Orden de publicación
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-primary">
          {title}
        </h2>
        <p className="text-base leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}
