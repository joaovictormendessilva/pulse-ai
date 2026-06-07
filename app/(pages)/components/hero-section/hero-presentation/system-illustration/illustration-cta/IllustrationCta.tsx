import { Sparkles } from "lucide-react";

export function IllustrationCta() {
  return (
    <div className="absolute h-[167px] w-[224px] bg-[#292929] rounded-[14px] right-[-25px] top-[-25px] border-[1px] border-[#ffffff60] px-[17px] pt-[17px]">
      <div className="flex items-center gap-[12px]">
        <div className="bg-[#13AA7833] w-[32px] h-[32px] rounded-full flex items-center justify-center">
          <Sparkles size={16} color="var(--primary)" />
        </div>

        <h6 className="text-[12px] font-bold">Pulse AI Insight</h6>
      </div>

      <p className="text-[10px] text-(--text-secondary) mt-[11px] mb-[13px]">
        We detected a 14% lag in the 'Backend Refactor' workflow. Suggesting smart automation...
      </p>

      <button className="bg-(--primary) h-[28px] w-full rounded-full text-[10px] cursor-pointer">
        Apply Optimization
      </button>
    </div>
  );
}
