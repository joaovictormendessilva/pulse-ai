import { MAX_WIDTH_CONTAINER_CLASS } from "@/app/utils/max-width-container";
import { Partners } from "./partners";
import { MAX_PADDING_X_CONTAINER } from "@/app/utils/max-padding-x-container";

export function PartnersSection() {
  return (
    <div className="bg-[#FFFFFF03] border-t-1 border-t-[#FFFFFF0D] border-b-1 border-b-[#FFFFFF0D]">
      <div
        className={`w-full h-[295px] ${MAX_WIDTH_CONTAINER_CLASS} ${MAX_PADDING_X_CONTAINER} m-auto flex justify-center items-center flex-col gap-[48px]`}
      >
        <div>
          <h2 className="text-[14px] font-[600] uppercase text-center">
            Accelerating growth for the world's most innovative companies
          </h2>
        </div>

        <div className="flex w-full justify-center items-center flex-wrap gap-[50px]">
          <Partners title="Stripe" />
          <Partners title="Linear" />
          <Partners title="Vercel" />
          <Partners title="Notion" />
          <Partners title="Slack" />
          <Partners title="Figma" />
        </div>
      </div>
    </div>
  );
}
