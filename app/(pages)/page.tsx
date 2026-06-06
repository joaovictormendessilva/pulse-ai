import { Footer } from "../shared/components/footer";
import { CommonQuestionsSection } from "./components/common-questions-section";
import { CoreCapabilitiesSection } from "./components/core-capabilities-section";
import { CTASection } from "./components/cta-section";
import { HeroSection } from "./components/hero-section";
import { MetricsSection } from "./components/metrics-section";
import { PartnersSection } from "./components/partners-section";
import { PricesSection } from "./components/prices-section";
import { Testimonials } from "./components/testimonials";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(19,170,120,0.09) 0%,
              transparent 35%
            ),
            linear-gradient(
              270deg,
              rgba(19,170,120,0.09) 0%,
              transparent 35%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="min-[555px]:mb-[130px]">
          <HeroSection />
        </div>

        <PartnersSection />

        <CoreCapabilitiesSection />

        <MetricsSection />

        <Testimonials />

        <PricesSection />

        <CommonQuestionsSection />

        <CTASection />

        <Footer />
      </div>
    </main>
  );
}
