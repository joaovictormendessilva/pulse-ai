import { Container } from "@/app/shared/components/container";
import { SectionBorder } from "@/app/shared/components/section-border";
import { Metric } from "./metric";

export function MetricsSection() {
  return (
    <SectionBorder>
      <Container className="py-[128px]">
        <div className="grid grid-cols-2 min-[600px]:grid-cols-4 gap-[30px]">
          <Metric title="4M+" subtitle="Automations Created" />
          <Metric title="120k" subtitle="Active Global Teams" />
          <Metric title="98%" subtitle="Customer Retention" />
          <Metric title="35%" subtitle="Productivity Boost" />
        </div>
      </Container>
    </SectionBorder>
  );
}
