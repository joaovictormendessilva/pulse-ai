import { Container } from "@/app/shared/components/container";
import { Metric } from "./metric";

export function MetricsSection() {
  return (
    <div className="bg-[#FFFFFF03] border-t-1 border-t-[#FFFFFF0D] border-b-1 border-b-[#FFFFFF0D]">
      <Container className="py-[128px]">
        <div className="grid grid-cols-2 min-[600px]:grid-cols-4 gap-[30px]">
          <Metric title="4M+" subtitle="Automations Created" />
          <Metric title="120k" subtitle="Active Global Teams" />
          <Metric title="98%" subtitle="Customer Retention" />
          <Metric title="35%" subtitle="Productivity Boost" />
        </div>
      </Container>
    </div>
  );
}
