import { Layers } from "lucide-react";
import { PartnersProps } from "./Partners.types";

export function Partners({ title }: PartnersProps) {
  return (
    <div className="flex gap-[9px] items-center">
      <div className="h-[32px] w-[32px] bg-[#FFFFFF1A] flex justify-center items-center rounded-[4px]">
        <Layers size={18} />
      </div>
      <span className="text-[24px] font-bold">{title}</span>
    </div>
  );
}
