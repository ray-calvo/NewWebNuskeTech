import { Hero } from "@/features/marketing/components/Hero";
import { ContactPreview } from "@/features/marketing/components/ContactPreview";
import { FaqSection } from "@/features/marketing/components/FaqSection";
import { MedicalTeam } from "@/features/marketing/components/MedicalTeam";
import { ServicesGrid } from "@/features/marketing/components/ServicesGrid";
import { TestimonialCarousel } from "@/features/marketing/components/TestimonialCarousel";
import { TechHighlights } from "@/features/marketing/components/TechHighlights";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechHighlights />
      <ServicesGrid />
      <TestimonialCarousel />
      <MedicalTeam />
      <FaqSection />
      <ContactPreview />
    </>
  );
}
