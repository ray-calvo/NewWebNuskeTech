import type { ReactNode } from "react";
import { BadgeCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type UrgenciasSectionBlockProps = {
  badge?: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function UrgenciasSectionBlock({
  badge,
  title,
  description,
  children,
}: UrgenciasSectionBlockProps) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="max-w-4xl space-y-4">
          {badge ? <Badge variant="secondary">{badge}</Badge> : null}
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="text-lg leading-8 text-slate-600">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

type BulletGridProps = {
  items: readonly string[];
  tone?: "default" | "dark";
};

export function BulletGrid({ items, tone = "default" }: BulletGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className={[
            "flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium",
            tone === "dark"
              ? "border-white/10 bg-white/10 text-white"
              : "border-slate-200 bg-white text-slate-700",
          ].join(" ")}
        >
          <BadgeCheck
            aria-hidden={true}
            className={["h-4 w-4 shrink-0", tone === "dark" ? "text-accent" : "text-primary"].join(" ")}
          />
          {item}
        </div>
      ))}
    </div>
  );
}
