import { WellnessSelector } from "@/features/marketing/components/WellnessSelector";
import { DigitalServicesSection } from "@/features/marketing/components/services/DigitalServicesSection";
import { ServicesPageHero } from "@/features/marketing/components/services/ServicesPageHero";
import { ServiceCategorySection } from "@/features/marketing/components/services/ServiceCategorySection";
import {
  categoryBlocks,
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
          {categoryBlocks.map((block) => (
            <ServiceCategorySection key={block.title} block={block} />
          ))}

          <WellnessSelector />

          <DigitalServicesSection services={digitalServices} />
        </div>
      </div>
    </main>
  );
}
