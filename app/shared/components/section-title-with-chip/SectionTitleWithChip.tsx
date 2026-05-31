import { Chip } from "../chip";
import { SectionTitleWithChipProps } from "./SectionTitleWithChip.types";

export function SectionTitleWithChip({ chipLabel, chipColor, title, subtitle }: SectionTitleWithChipProps) {
  return (
    <div className="flex items-center flex-col">
      <div className="w-fit">
        <Chip label={chipLabel} color={chipColor} />
      </div>

      <h2 className="text-[48px] font-bold max-w-[800px] text-center leading-[48px] py-[16px]">{title}</h2>

      <p className="max-w-[660px] text-center text-(--text-secondary) mb-[65px]">{subtitle}</p>
    </div>
  );
}
