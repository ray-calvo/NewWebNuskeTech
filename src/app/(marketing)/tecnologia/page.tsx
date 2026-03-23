import { FacilitiesGallery } from "@/features/marketing/components/FacilitiesGallery";
import { equipment } from "@/features/marketing/components/technology/data";
import { EquipmentSection } from "@/features/marketing/components/technology/EquipmentSection";
import { FacilitiesIntro } from "@/features/marketing/components/technology/FacilitiesIntro";
import { TechnologyPageHero } from "@/features/marketing/components/technology/TechnologyPageHero";

export default function TecnologiaPage() {
  return (
    <main className="bg-background">
      <TechnologyPageHero />

      <EquipmentSection equipment={equipment} />

      <section className="overflow-hidden py-12 lg:py-16">
        <FacilitiesIntro />
        <FacilitiesGallery />
      </section>
    </main>
  );
}
