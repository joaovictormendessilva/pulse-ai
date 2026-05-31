import { Card } from "@/app/shared/components/card";
import { Sparkles } from "lucide-react";
import { TestimonialProps } from "./Testimonial.types";

export function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <Card>
      <div className="flex gap-[4px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Sparkles key={index} size={14} color="var(--primary)" />
        ))}
      </div>

      <div className="mt-[23px] flex flex-1">
        <p>"{testimonial.quote}"</p>
      </div>

      <div className="border-t border-[#FFFFFF0D] mt-[25px] pt-[17px]">
        <div className="flex gap-[16px]">
          <img
            src={testimonial.author.avatar}
            alt={testimonial.author.name}
            className="inline-block size-12 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
          />

          <div>
            <p className="font-bold">{testimonial.author.name}</p>
            <p className="text-[12px] text-(--text-secondary)">
              {testimonial.author.role}, {testimonial.author.company}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
