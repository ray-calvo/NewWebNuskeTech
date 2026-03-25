import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import type { TechnologyEvidenceSection as TechnologyEvidenceSectionType } from "./data";

type TechnologyEvidenceSectionProps = {
  section: TechnologyEvidenceSectionType;
  reverse?: boolean;
};

export function TechnologyEvidenceSection({
  section,
  reverse = false,
}: TechnologyEvidenceSectionProps) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div
        className={`mx-auto grid max-w-7xl gap-8 lg:items-start ${
          reverse ? "lg:grid-cols-[1.02fr_0.98fr]" : "lg:grid-cols-[0.98fr_1.02fr]"
        }`}
      >
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="space-y-4">
            <Badge variant="secondary">{section.badge}</Badge>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">
              {section.title}
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            {section.bullets.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.14)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <div
            className={`grid gap-4 ${
              section.images.length >= 4
                ? "sm:grid-cols-2"
                : section.images.length === 3
                  ? "sm:grid-cols-2"
                  : ""
            }`}
          >
            {section.images.map((image, index) => (
              <div
                key={`${section.id}-${image.src}`}
                className={`relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.22)] ${
                  section.images.length === 3 && index === 0
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative ${
                    section.images.length === 1
                      ? "aspect-[4/3]"
                      : section.images.length === 2
                        ? "aspect-[4/3]"
                        : section.images.length === 3 && index === 0
                          ? "aspect-[16/9]"
                          : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      section.images.length >= 3
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        : "(max-width: 1024px) 100vw, 50vw"
                    }
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/16 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
