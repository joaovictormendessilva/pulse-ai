import { Container } from "@/app/shared/components/container";
import { Partners } from "./partners";

export function PartnersSection() {
  return (
    <div className="bg-[#FFFFFF03] border-t-1 border-t-[#FFFFFF0D] border-b-1 border-b-[#FFFFFF0D]">
      <Container className="py-[96px] flex justify-center items-center flex-col gap-[48px]">
        <h2 className="text-[14px] font-[600] uppercase text-center">
          Accelerating growth for the world's most innovative companies
        </h2>

        <div className="flex w-full justify-center items-center flex-wrap gap-[50px]">
          <Partners title="Stripe" />
          <Partners title="Linear" />
          <Partners title="Vercel" />
          <Partners title="Notion" />
          <Partners title="Slack" />
          <Partners title="Figma" />
        </div>
      </Container>
    </div>
  );
}
