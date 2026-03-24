import { WellnessSelector } from "@/features/marketing/components/WellnessSelector";
import { DigitalServicesSection } from "@/features/marketing/components/services/DigitalServicesSection";
import { ServicesPageHero } from "@/features/marketing/components/services/ServicesPageHero";
import { ServiceCategorySection } from "@/features/marketing/components/services/ServiceCategorySection";
import {
  capabilityBlocks,
  digitalServices,
} from "@/features/marketing/components/services/data";

export default function ServiciosPage() {
  return (
    <main
      className="bg-background"
      style={{
        backgroundImage:
          "radial-gradient(circle at 12% 14%, rgb(166 181 251 / 0.14), transparent 24%), radial-gradient(circle at 88% 24%, rgb(166 181 251 / 0.12), transparent 22%), radial-gradient(circle at 50% 82%, rgb(166 181 251 / 0.12), transparent 26%)",
      }}
    >
      <ServicesPageHero />

      <div className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl space-y-14">
          {capabilityBlocks.map((block) => (
            <ServiceCategorySection key={block.title} block={block} />
          ))}

          <section className="space-y-5 rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,246,251,0.92))] p-6 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.18)] sm:p-8">
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
                Continuidad preventiva
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                Planes de seguimiento y protección continua
              </h2>
              <p className="text-base leading-8 text-slate-600">
                Wellness se conserva como extensión de continuidad clínica y
                prevención. En esta fase no se eliminó, pero quedó subordinado
                al bloque hospitalario principal para no romper la narrativa de
                urgencias, cirugía y diagnóstico.
              </p>
            </div>

            <WellnessSelector />
          </section>

          <DigitalServicesSection services={digitalServices} />
        </div>
      </div>
    </main>
  );
}
