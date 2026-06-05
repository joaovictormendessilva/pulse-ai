import { Container } from "@/app/shared/components/container";
import { GlowButton } from "@/app/shared/components/glow-button";
import { SecondaryButton } from "@/app/shared/components/secondary-button";

export function CTASection() {
  return (
    <Container>
      <div className="max-w-[1022px] w-full m-auto bg-[#13aa7859] rounded-2xl py-[80px] px-[20px]">
        <h2 className="text-[32px] min-[800px]:text-[60px] min-[1000px]:text-[60px] font-bold max-w-[800px] min-[800px]:leading-[60px] text-center m-auto">
          Build faster. Work smarter. Scale with AI.
        </h2>

        <p className="text-(--text-secondary) text-[18px] max-w-[692px] m-auto text-center pt-[32] pb-[50px]">
          Join 120,000+ teams already using Pulse AI to amplify their creative potential and operational excellence.
        </p>

        <div className="flex flex-col min-[508px]:flex-row gap-[15px] justify-center">
          <GlowButton>Start Your Free Trial</GlowButton>
          <SecondaryButton>Talk to Sales</SecondaryButton>
        </div>

        <p className="text-[14px] text-(--text-secondary) mt-[32px] text-center">
          No credit card required. 14-day free trial.
        </p>
      </div>
    </Container>
  );
}
