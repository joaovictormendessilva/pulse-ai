import { Container } from "@/app/shared/components/container";
import { SectionTitleWithChip } from "@/app/shared/components/section-title-with-chip";
import { capabilityCards } from "./CoreCapabilitiesSection.utils";
import { CapabilityCard } from "./capability-card";

export function CoreCapabilitiesSection() {
  return (
    <Container className="flex items-center flex-col py-[128px]">
      <SectionTitleWithChip
        chipLabel="Core Capabilities"
        chipColor="green"
        title="Supercharge every aspect of your workflow"
        subtitle="Our comprehensive AI suite handles the complexities so you can focus on high-impact strategic decisions."
      />

      <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1100px]:grid-cols-3 gap-[30px]">
        {capabilityCards.map((card) => (
          <CapabilityCard
            key={card.title}
            title={card.title}
            description={card.description}
            href={card.href}
            icon={card.icon}
          />
        ))}
      </div>
    </Container>
  );
}
