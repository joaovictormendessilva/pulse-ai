import { Chip } from "@/app/shared/components/chip";
import { GlowButton } from "@/app/shared/components/glow-button";
import { SecondaryButton } from "@/app/shared/components/secondary-button";
import { ChevronRight, Play } from "lucide-react";
import { Avatars } from "./avatars";
import { SystemIllustration } from "./system-illustration";

export function HeroPresentation() {
  return (
    <div className="flex max-[1300px]:flex-col gap-[50px] min-[700px]:gap-[97px] items-center">
      <div>
        <div className="w-fit max-[1300px]:m-auto">
          <Chip label="v2.0 Now Available with PulseEngine™" color="orange" />
        </div>

        <h1 className="text-[36px] min-[555px]:text-[46px] min-[1300px]:text-[72px] font-bold max-w-[548px] w-full leading-none my-[32px] max-[1300px]:max-w-[800px] max-[1300px]:text-center">
          AI-powered <span className="gradient-animated-text">productivity</span> for modern teams
        </h1>

        <p className="max-w-[535px] w-full text-[16px] min-[555px]:text-[20px] text-(--text-secondary) mb-[46px] max-[1300px]:max-w-[800px] max-[1300px]:text-center">
          Connect your workspace, automate the mundane, and amplify your team's output with our next-gen neural
          operating system. Built for speed, scaled with AI.
        </p>

        <div className="flex flex-col min-[555px]:flex-row gap-[16px] max-[1300px]:justify-center">
          <GlowButton glowAlways RightIcon={<ChevronRight size={18} strokeWidth={3} />}>
            Get Started for Free
          </GlowButton>
          <SecondaryButton LeftIcon={<Play size={18} strokeWidth={3} />}>Watch Demo</SecondaryButton>
        </div>

        <div className="mt-[56px] flex flex-col min-[555px]:flex-row items-center gap-[24px] max-[1300px]:justify-center">
          <Avatars />
          <span className="text-[14px]">
            <strong>1,200+</strong> teams joined this week
          </span>
        </div>
      </div>

      <div
        className="
        relative flex-shrink-0 origin-top-center
        scale-[0.7] min-[500px]:scale-[1]
        w-[calc(606px*0.7)] min-[700px]:w-[606px]
        h-[calc(430px*0.7)] min-[700px]:h-[430px]
      "
      >
        <div className="absolute top-0 left-0 origin-top-left scale-[0.7] min-[700px]:scale-[1]">
          <SystemIllustration />
        </div>
      </div>
    </div>
  );
}
