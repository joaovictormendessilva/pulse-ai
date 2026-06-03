import { Card } from "@/app/shared/components/card";
import { Divider } from "@/app/shared/components/divider";
import { GlowButton } from "@/app/shared/components/glow-button";
import { SecondaryButton } from "@/app/shared/components/secondary-button";
import { CircleCheck } from "lucide-react";
import { PriceCardProps } from "./PriceCard.types";

export function PriceCard({ title, description, price, benefits, highlighted, badge }: PriceCardProps) {
  return (
    <div className="max-w-[365px]">
      <Card highlighted={highlighted}>
        {badge && (
          <span className="mb-[12px] self-start bg-(--primary) text-white text-[12px] font-medium px-[10px] py-[4px] rounded-full">
            {badge}
          </span>
        )}

        <h2 className="text-[24px] font-bold">{title}</h2>
        <p className="text-(--text-secondary) text-[14px]">{description}</p>

        <div className="flex gap-[3px] mt-[25px]">
          <span className="text-[36px] font-bold">${price}</span>
          <span className="text-(--text-secondary) mt-[20px]">/month</span>
        </div>

        <Divider className="my-[25px]" />

        <div className="flex flex-col gap-[12px]">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-[12px] text-[14px] text-(--text-secondary)">
              <CircleCheck size={16} color="var(--primary)" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <Divider className="my-[25px]" />

        {highlighted ? <GlowButton>Get Started</GlowButton> : <SecondaryButton>Get Started</SecondaryButton>}
      </Card>
    </div>
  );
}
