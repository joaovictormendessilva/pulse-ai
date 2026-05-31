import { Card } from "@/app/shared/components/card";
import { CapabilityCardProps } from "./CapabilityCard.types";

export function CapabilityCard({ icon, title, description, href }: CapabilityCardProps) {
  return (
    <Card>
      <div className="h-[50px] w-[50px] rounded-[14px] bg-[#13AA781A] border-1 border-[#13AA7833] flex justify-center items-center">
        {icon}
      </div>

      <h6 className="text-[20px] font-bold mt-[24px] mb-[15px]">{title}</h6>

      <p className="text-[14px] text-(--text-secondary)">{description}</p>

      <a href={href} className="inline-flex items-center gap-1 text-[14px] text-(--primary) mt-[24px]">
        Learn more →
      </a>
    </Card>
  );
}
