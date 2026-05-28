import { Activity } from "lucide-react";

export function HeaderLogo() {
  return (
    <div className="flex gap-[7px] items-center">
      <div className="bg-(--primary) h-[36px] w-[36px] flex justify-center items-center rounded-[7px]">
        <Activity size={24} />
      </div>

      <h3 className="font-bold text-[24px] text-(--primary)">Pulse AI</h3>
    </div>
  );
}
