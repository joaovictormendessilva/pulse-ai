import { ActivityItemProps } from "./ActivityItem.types";

export function ActivityItem({ title, description }: ActivityItemProps) {
  return (
    <div className="flex items-center gap-[11px]">
      <div className="w-[7px] h-[8px] rounded-full bg-orange-400" />
      <div>
        <p className="text-[11px] font-bold w-[60px]">{title}</p>
        <p className="text-[9px] text-(--text-secondary)">{description}</p>
      </div>
    </div>
  );
}
