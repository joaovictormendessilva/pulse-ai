import { SectionBorder } from "@/app/shared/components/section-border";
import { SectionTitleWithChip } from "@/app/shared/components/section-title-with-chip";
import { plans } from "./PricesSection.utils";
import { PriceCard } from "./price-card";
import { Container } from "@/app/shared/components/container";

export function PricesSection() {
  return (
    <SectionBorder>
      <Container className="py-[128px]">
        <SectionTitleWithChip
          title="Scale your team with confidence"
          subtitle="Transparent, simple pricing designed to grow with your organization's ambitions."
          chipColor="green"
          chipLabel="Pricing Plans"
        />

        <div className="flex max-[1000px]:flex-col justify-between max-[1000px]:items-center gap-[20px]">
          {plans.map((plan) => (
            <PriceCard key={plan.id} {...plan} />
          ))}
        </div>
      </Container>
    </SectionBorder>
  );
}
