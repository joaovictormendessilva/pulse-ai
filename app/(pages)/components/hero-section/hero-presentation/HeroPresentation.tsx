import { GlowButton } from "@/app/shared/components/glow-button";
import { SecondaryButton } from "@/app/shared/components/secondary-button";
import {
  Activity,
  ChartColumn,
  ChevronRight,
  LayoutDashboard,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Avatars } from "./avatars";
import { Chip } from "@/app/shared/components/chip";

export function HeroPresentation() {
  return (
    <div className="flex gap-[97px] items-center">
      <div>
        <Chip label="v2.0 Now Available with PulseEngine™" color="orange" />

        <h1 className="text-[30px] min-[555px]:text-[72px] font-bold max-w-[548px] w-full leading-none my-[32px]">
          AI-powered <span className="gradient-animated-text">productivity</span> for modern teams
        </h1>

        <p className="max-w-[535px] w-full text-[20px] text-(--text-secondary) mb-[46px]">
          Connect your workspace, automate the mundane, and amplify your team's output with our next-gen neural
          operating system. Built for speed, scaled with AI.
        </p>

        <div className="flex flex-col min-[555px]:flex-row gap-[16px] ">
          <GlowButton glowAlways RightIcon={<ChevronRight size={18} strokeWidth={3} />}>
            Get Started for Free
          </GlowButton>
          <SecondaryButton LeftIcon={<Play size={18} strokeWidth={3} />}>Watch Demo</SecondaryButton>
        </div>

        <div className="mt-[56px] flex flex-col min-[555px]:flex-row items-center gap-[24px]">
          <Avatars />
          <span className="text-[14px]">
            <strong>1,200+</strong> teams joined this week
          </span>
        </div>
      </div>

      <div className="flex relative h-fit">
        {/* Menus */}
        <div className="bg-[#ffffff4b] h-[378px] w-[80px] rounded-tl-3xl rounded-bl-3xl flex flex-col items-center gap-[40px] pt-[24px] border-t-[1px] border-l-[1px] border-b-[1px] border-[#ffffff60]">
          <div className="bg-(--primary) h-[36px] w-[36px] flex justify-center items-center rounded-[7px]">
            <Activity size={20} />
          </div>

          <div className="bg-[#13AA7833] h-[36px] w-[36px] flex justify-center items-center rounded-[7px]">
            <LayoutDashboard size={20} color="var(--primary)" />
          </div>

          <ChartColumn size={20} />
          <UsersRound size={20} />
          <ShieldCheck size={20} />
        </div>

        {/* Main */}
        <div className="bg-[#292929] h-[378px] w-[526px] rounded-tr-3xl rounded-br-3xl overflow-hidden border-[1px] border-[#ffffff60]">
          <div className="h-[64px] border-b-[1px] border-b-[#FFFFFF0D] pl-[24px] flex items-center">
            <div className="relative">
              <input
                className="bg-[#FFFFFF0D] border-b-[1px] border-b-[#FFFFFF0D] rounded-[12px] h-[34px] w-[256px] pl-[47px] placeholder:text-[12px]"
                placeholder="Search analytics..."
              />
              <Search size={20} className="absolute top-[7px] left-[17px]" />
            </div>
          </div>

          <div className="flex pl-[24px] pt-[24px] gap-[24px]">
            <div className="flex flex-col">
              <div className="flex gap-[15px]  mb-[24px]">
                <div>
                  <div className="bg-[#FFFFFF08] border-[1px] border-[#FFFFFF0D] w-[93px] h-[111px] rounded-[14px] pl-[17px] pt-[17px]">
                    <h6 className="text-[10px] font-bold max-w-[49px]">ACTIVE USERS</h6>
                    <p className="text-[20px] font-bold mt-[4px]">1.2k</p>
                    <p className="text-[10px]">+12%</p>
                  </div>
                </div>
                <div>
                  <div className="bg-[#FFFFFF08] border-[1px] border-[#FFFFFF0D] w-[93px] h-[111px] rounded-[14px] pl-[17px] pt-[17px]">
                    <h6 className="text-[10px] font-bold max-w-[49px]">EFFICIENCY</h6>
                    <p className="text-[20px] font-bold mt-[4px]">94%</p>
                    <p className="text-[10px]">+5%</p>
                  </div>
                </div>
                <div>
                  <div className="bg-[#FFFFFF08] border-[1px] border-[#FFFFFF0D] w-[93px] h-[111px] rounded-[14px] pl-[17px] pt-[17px]">
                    <h6 className="text-[10px] font-bold max-w-[49px]">WORKFLOWS</h6>
                    <p className="text-[20px] font-bold mt-[4px]">432</p>
                    <p className="text-[10px]">+28%</p>
                  </div>
                </div>
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
                  <div className={`h-[100px] w-[19px] bg-(--primary) rounded-tl-full rounded-tr-full`} />
                  <div className={`h-[140px] w-[19px] bg-(--primary) rounded-tl-full rounded-tr-full`} />
                  <div className={`h-[80px] w-[19px] bg-(--primary) rounded-tl-full rounded-tr-full`} />
                  <div className={`h-[125px] w-[19px] bg-(--primary) rounded-tl-full rounded-tr-full`} />
                  <div className={`h-[100px] w-[19px] bg-(--primary) rounded-tl-full rounded-tr-full`} />
                  <div className={`h-[140px] w-[19px] bg-(--primary) rounded-tl-full rounded-tr-full`} />
                  <div className={`h-[80px] w-[19px] bg-(--primary) rounded-tl-full rounded-tr-full`} />
                  <div className={`h-[125px] w-[19px] bg-(--primary) rounded-tl-full rounded-tr-full`} />
                  <div className={`h-[100px] w-[19px] bg-(--primary) rounded-tl-full rounded-tr-full`} />
                  <div className={`h-[140px] w-[19px] bg-(--primary) rounded-tl-full rounded-tr-full`} />
                </div>
              </div>
            </div>

            <div className="h-[328px] w-[144px] bg-[#FFFFFF08] border-[1px] border-[#FFFFFF0D] pt-[56px] pl-[21px] flex flex-col gap-[15px]">
              <div className="flex items-center gap-[11px]">
                <div className="w-[7px] h-[8px] rounded-full bg-orange-400" />
                <div>
                  <p className="text-[11px] font-bold w-[60px]">Workflow optimized</p>
                  <p className="text-[9px] text-(--text-secondary)">2 mins ago • Alex</p>
                </div>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="w-[7px] h-[8px] rounded-full bg-orange-400" />
                <div>
                  <p className="text-[11px] font-bold w-[60px]">Workflow optimized</p>
                  <p className="text-[9px] text-(--text-secondary)">2 mins ago • Alex</p>
                </div>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="w-[7px] h-[8px] rounded-full bg-orange-400" />
                <div>
                  <p className="text-[11px] font-bold w-[60px]">Workflow optimized</p>
                  <p className="text-[9px] text-(--text-secondary)">2 mins ago • Alex</p>
                </div>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="w-[7px] h-[8px] rounded-full bg-orange-400" />
                <div>
                  <p className="text-[11px] font-bold w-[60px]">Workflow optimized</p>
                  <p className="text-[9px] text-(--text-secondary)">2 mins ago • Alex</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Absolute CTA */}
        <div className="absolute h-[167px] w-[224px] bg-[#292929] rounded-[14px] right-[-25px] top-[-25px] border-[1px] border-[#ffffff60] px-[17px] pt-[17px]">
          <div className="flex items-center gap-[12px]">
            <div className="bg-[#13AA7833] w-[32px] h-[32px] rounded-full flex justify-center items-center">
              <Sparkles size={16} color="var(--primary)" />
            </div>

            <h6 className="text-[12px] font-bold">Pulse AI Insight</h6>
          </div>

          <p className="text-[10px] text-(--text-secondary) mt-[11px] mb-[13px]">
            We detected a 14% lag in the 'Backend Refactor' workflow. Suggesting smart automation...
          </p>

          <button className="bg-(--primary) h-[28px] text-[10px] w-full rounded-full">Apply Optimization</button>
        </div>

        {/* Absolute Online Users */}
        <div className="absolute flex items-center pl-[17px] gap-[16px] rounded-[14px] w-[192px]  h-[62px] bg-[#292929] border-[1px] border-[#ffffff60] bottom-[-28px] left-[-30px]">
          <div className="flex -space-x-2 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="inline-block size-8 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="inline-block size-8 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
              className="inline-block size-8 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
            />
          </div>

          <p className="text-[10px] font-bold">+12 Online</p>
        </div>
      </div>
    </div>
  );
}
