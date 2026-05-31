import { CoreCapabilitiesSection } from "./components/core-capabilities-section";
import { HeroSection } from "./components/hero-section";
import { MetricsSection } from "./components/metrics-section";
import { PartnersSection } from "./components/partners-section";
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
        <div className="mb-[130px] mt-[96px]">
          <HeroSection />
        </div>

        <PartnersSection />

        <CoreCapabilitiesSection />

        <MetricsSection />

        <Testimonials />
      </div>
    </main>
  );
}
