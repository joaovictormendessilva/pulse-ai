import { Activity, ChartColumn, LayoutDashboard, Search, ShieldCheck, UsersRound } from "lucide-react";
import { ActivityItem } from "./activity-item";
import { ChartBar } from "./chart-bar";
import { IllustrationCta } from "./illustration-cta";
import { IllustrationOnlineUsers } from "./illustration-online-users";
import { activities, bars, illustrationCards } from "./SystemIllustration.utils";

export function SystemIllustration() {
  return (
    <div className="flex relative h-fit" style={{ filter: "drop-shadow(0 0 40px rgba(255,255,255,0.15))" }}>
      {/* Menus */}
      <div className="bg-[#ffffff4b] h-[378px] w-[80px] rounded-tl-3xl rounded-bl-3xl flex flex-col items-center gap-[40px] pt-[24px] border-t-[1px] border-l-[1px] border-b-[1px] border-[#ffffff60]">
        <div className="bg-(--primary) h-[36px] w-[36px] flex justify-center items-center rounded-[7px] cursor-pointer">
          <Activity size={20} />
        </div>

        <div className="bg-[#13AA7833] h-[36px] w-[36px] flex justify-center items-center rounded-[7px] cursor-pointer">
          <LayoutDashboard size={20} color="var(--primary)" />
        </div>

        <ChartColumn size={20} className="cursor-pointer hover:text-(--primary)" />
        <UsersRound size={20} className="cursor-pointer hover:text-(--primary)" />
        <ShieldCheck size={20} className="cursor-pointer hover:text-(--primary)" />
      </div>
      {/* Main */}
      <div className="bg-[#292929] h-[378px] w-[526px] rounded-tr-3xl rounded-br-3xl overflow-hidden border-[1px] border-[#ffffff60]">
        <div className="h-[64px] border-b-[1px] border-b-[#FFFFFF0D] pl-[24px] flex items-center">
          <div className="relative">
            <input
              className="bg-[#FFFFFF0D] border-[1px] border-[#FFFFFF0D] rounded-[12px] h-[34px] w-[256px] pl-[47px] placeholder:text-[12px]"
              placeholder="Search analytics..."
            />
            <Search size={20} className="absolute top-[7px] left-[17px]" />
          </div>
        </div>

        <div className="flex pl-[24px] pt-[24px] gap-[24px]">
          <div className="flex flex-col">
            <div className="flex gap-[15px] mb-[24px]">
              {illustrationCards.map((card) => (
                <div key={card.title}>
                  <div className="bg-[#FFFFFF08] border-[1px] border-[#FFFFFF0D] w-[93px] h-[111px] rounded-[14px] pl-[17px] pt-[17px]">
                    <h6 className="text-[10px] font-bold max-w-[49px]">{card.title}</h6>
                    <p className="text-[20px] font-bold mt-[4px]">{card.value}</p>
                    <p className="text-[10px]">{card.percentage}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[311px] h-[193px] bg-[#FFFFFF08] border-[1px] border-[#FFFFFF0D] rounded-l-[14px] rounded-r-[14px] pt-[24px] px-[24px]">
              <div className="flex items-center justify-between">
                <h6 className="text-[14px] font-bold">Productivity Index</h6>

                <div className="flex gap-[8px]">
                  <div className="h-[8px] w-[8px] bg-(--primary) rounded-full" />
                  <div className="h-[8px] w-[8px] bg-orange-400 rounded-full" />
                </div>
              </div>

              <div className="flex items-end gap-[7px] h-full justify-center">
                {bars.map((h, i) => (
                  <ChartBar key={i} height={h} duration={`${1.8 + i * 0.15}s`} />
                ))}
              </div>
            </div>
          </div>

          <div className="h-[328px] w-[144px] bg-[#FFFFFF08] border-[1px] border-[#FFFFFF0D] pt-[56px] pl-[21px] flex flex-col gap-[15px]">
            {activities.map((activity, index) => (
              <ActivityItem key={index} title={activity.title} description={activity.description} />
            ))}
          </div>
        </div>
      </div>
      {/* Absolute CTA */}
      <IllustrationCta />

      {/* Absolute Online Users */}
      <IllustrationOnlineUsers />
    </div>
  );
}
