import { MetricProps } from "./Metric.types";

export function Metric({ title, subtitle }: MetricProps) {
  return (
    <div className="text-center">
      <p className="text-[40px] min-[600px]:text-[36px] min-[800px]:text-[60px] font-bold gradient-animated-text">
        {title}
      </p>
      <p className="uppercase text-(--text-secondary) text-[10px] min-[600px]:text-[12px] min-[800px]:text-[14px]">
        {subtitle}
      </p>
    </div>
  );
}
