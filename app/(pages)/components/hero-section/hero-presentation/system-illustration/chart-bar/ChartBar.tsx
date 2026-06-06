import { ChartBarProps } from "./chart-bar.types";

export function ChartBar({ height, duration }: ChartBarProps) {
  return (
    <div
      style={{
        height,
        width: 19,
        borderRadius: "9999px 9999px 0 0",
        transformOrigin: "bottom",
        animation: `bar-breathe ${duration} ease-in-out infinite`,
      }}
      className="from-(--primary) to-[#1a1a1a] bg-linear-to-br"
    />
  );
}
