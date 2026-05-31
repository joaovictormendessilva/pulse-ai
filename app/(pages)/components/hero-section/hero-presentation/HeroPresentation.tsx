import { GlowButton } from "@/app/shared/components/glow-button";
import { SecondaryButton } from "@/app/shared/components/secondary-button";
import { ChevronRight, Play } from "lucide-react";
import { Avatars } from "./avatars";
import { Chip } from "@/app/shared/components/chip";

export function HeroPresentation() {
  return (
    <div>
      <Chip label="v2.0 Now Available with PulseEngine™" color="orange" />

      <h1 className="text-[72px] font-bold max-w-[548px] w-full leading-none my-[32px]">
        AI-powered{" "}
        <span className="bg-gradient-to-r from-[#13aa78] via-orange-500 to-[#13aa78] bg-clip-text text-transparent bg-[size:200%_200%] [animation:gradient-move_3s_ease_infinite]">
          productivity
        </span>{" "}
        for modern teams
      </h1>

      <p className="max-w-[535px] w-full text-[20px] text-(--text-secondary) mb-[46px]">
        Connect your workspace, automate the mundane, and amplify your team's output with our next-gen neural operating
        system. Built for speed, scaled with AI.
      </p>

      <div className="flex gap-[16px]">
        <GlowButton glowAlways RightIcon={<ChevronRight size={18} strokeWidth={3} />}>
          Get Started for Free
        </GlowButton>
        <SecondaryButton LeftIcon={<Play size={18} strokeWidth={3} />}>Watch Demo</SecondaryButton>
      </div>

      <div className="mt-[56px] flex items-center gap-[24px]">
        <Avatars />
        <span className="text-[14px]">
          <strong>1,200+</strong> teams joined this week
        </span>
      </div>
    </div>
  );
}
