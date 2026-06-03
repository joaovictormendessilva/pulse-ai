import { SectionBordeProps } from "./SectionBorder.types";

export function SectionBorder({ children }: SectionBordeProps) {
  return (
    <div className="bg-[#FFFFFF03] border-t-1 border-t-[#FFFFFF0D] border-b-1 border-b-[#FFFFFF0D]">{children}</div>
  );
}
