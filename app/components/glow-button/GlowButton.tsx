import { GlowButtonProps } from "./GlowButton.types";

export function GlowButton({ children }: GlowButtonProps) {
  return (
    <button
      className="
                  relative overflow-hidden px-[24px] h-[40px] rounded-full font-bold cursor-pointer
                  bg-(--primary) text-white transition-all duration-200 ease-in
                  hover:shadow-[0_0_30px_5px_rgba(19,170,120,0.6)]
                  active:shadow-[0_0_30px_5px_rgba(19,170,120,0.6)] active:duration-0
                  before:content-[''] before:block before:w-0 before:h-[86%]
                  before:absolute before:top-[7%] before:left-0 before:opacity-0
                  before:bg-white before:shadow-[0_0_50px_30px_white] before:-skew-x-[20deg]
                  hover:before:[animation:sh02_0.5s_linear]
                  active:before:[animation:sh02_0.5s_linear]
                "
    >
      {children}
    </button>
  );
}
