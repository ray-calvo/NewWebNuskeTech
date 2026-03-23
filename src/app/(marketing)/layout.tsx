import { Footer } from "@/src/components/shared/footer";
import { Navbar } from "@/src/components/shared/navbar";
import { UrgencyBanner } from "@/src/components/shared/urgency-banner";
import { WhatsAppFloat } from "@/src/components/shared/WhatsAppFloat";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <UrgencyBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
