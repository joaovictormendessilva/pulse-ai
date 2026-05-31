import { ChipProps } from "./Chip.types";
import { colorStyles } from "./Chip.utils";

export function Chip({ label, color = "orange" }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-[20px] h-[30px] text-[12px] font-medium inset-ring ${colorStyles[color]}`}
    >
      {label}
    </span>
  );
}
