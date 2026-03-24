import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ServiceCategoryBlock } from "@/features/marketing/components/services/types";

type ServiceCategorySectionProps = {
  block: ServiceCategoryBlock;
};

export function ServiceCategorySection({
  block,
}: ServiceCategorySectionProps) {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <Badge variant="secondary">{block.badge ?? block.title}</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          {block.title}
        </h2>
        <p className="text-lg leading-8 text-slate-600">{block.description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {block.services.map((service) => {
          const Icon = service.icon;
          const showLink = Boolean(service.href);
          const statusLabel =
            service.status === "planned"
              ? "Publicación posterior"
              : service.status === "subordinate"
                ? "Subordinado"
                : service.category;

          return (
            <section
              key={service.title}
              className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_24px_80px_-56px_rgba(29,63,104,0.18)] backdrop-blur sm:p-7"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className="border-accent/20 bg-accent/10 text-primary">
                    {statusLabel}
                  </Badge>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <Icon className="h-5 w-5" aria-hidden={true} />
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-8 text-slate-700">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-7 text-slate-700">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {showLink ? (
                  <Button
                    asChild
                    size="lg"
                    className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
                  >
                    <Link href={service.href!}>
                      {service.ctaLabel ?? "Abrir página"}
                      <ArrowRight className="h-4 w-4" aria-hidden={true} />
                    </Link>
                  </Button>
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    {service.status === "planned"
                      ? "Aún no publicada como página independiente"
                      : "Línea subordinada al núcleo clínico"}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
