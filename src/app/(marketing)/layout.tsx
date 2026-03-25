import { ClinicalCtaBar } from "@/components/shared/clinical-cta-bar";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { RouteScrollReset } from "@/components/shared/route-scroll-reset";
import { UrgencyBanner } from "@/components/shared/urgency-banner";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <RouteScrollReset />
      <UrgencyBanner />
      <Navbar />
      <ClinicalCtaBar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
