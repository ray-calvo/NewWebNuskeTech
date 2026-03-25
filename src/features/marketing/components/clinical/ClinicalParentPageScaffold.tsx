import type { ReactNode } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ClinicalPlaceholderCard = {
  title: string;
  description: string;
};

type ClinicalParentPageScaffoldProps = {
  badge: string;
  title: string;
  description: string;
  cards: readonly ClinicalPlaceholderCard[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

function ActionLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  if (href.startsWith("http") || href.startsWith("tel:")) {
    const external = href.startsWith("http");
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return <Link href={href}>{children}</Link>;
}

export function ClinicalParentPageScaffold({
  badge,
  title,
  description,
  cards,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: ClinicalParentPageScaffoldProps) {
  return (
    <main className="bg-background">
      <section className="px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-10 lg:pt-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl space-y-4">
            <Badge variant="secondary">{badge}</Badge>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              {title}
            </h1>
            <p className="text-lg leading-8 text-slate-600">{description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <section
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)]"
              >
                <h2 className="text-lg font-semibold text-primary">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {card.description}
                </p>
              </section>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
            >
              <ActionLink href={primaryCtaHref}>{primaryCtaLabel}</ActionLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-2xl border-accent bg-accent/10 px-6 text-secondary hover:bg-accent/20 hover:text-primary"
            >
              <ActionLink href={secondaryCtaHref}>{secondaryCtaLabel}</ActionLink>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
