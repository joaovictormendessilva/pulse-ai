import { SecondaryButtonProps } from "./SecondaryButton.types";

export function SecondaryButton({ children, LeftIcon, RightIcon }: SecondaryButtonProps) {
  return (
    <button className="px-[24px] h-[40px] rounded-full font-bold cursor-pointer bg-[#FFFFFF0D] text-white flex items-center gap-[5px]">
      {LeftIcon && LeftIcon} {children} {RightIcon && RightIcon}
    </button>
  );
}
