import Image from "next/image";
import { Check } from "lucide-react";

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
        <Badge variant="secondary">{block.title}</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          {block.title}
        </h2>
        <p className="text-lg leading-8 text-slate-600">{block.description}</p>
      </div>

      <div className="space-y-10">
        {block.services.map((service, index) => {
          const whatsappHref = `https://wa.me/524433369624?text=${encodeURIComponent(
            service.whatsappMessage
          )}`;
          const isReversed = index % 2 !== 0;
          const Icon = service.icon;

          return (
            <section
              key={service.title}
              className="rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-[0_24px_80px_-56px_rgba(29,63,104,0.25)] backdrop-blur sm:p-6 lg:p-8"
            >
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  isReversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-3xl bg-slate-100 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.45)]">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/16 via-transparent to-transparent" />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge className="border-accent/20 bg-accent/10 text-primary">
                      {service.category}
                    </Badge>
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
                      <Icon className="h-5 w-5" aria-hidden={true} />
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-semibold tracking-tight text-primary">
                      {service.title}
                    </h3>
                    <p className="text-base leading-8 text-slate-700">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-sm leading-7 text-slate-700">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
                  >
                    <a href={whatsappHref} target="_blank" rel="noreferrer">
                      Solicitar informes por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
