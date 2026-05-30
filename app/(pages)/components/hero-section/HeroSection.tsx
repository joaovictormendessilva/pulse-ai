import { MAX_PADDING_X_CONTAINER } from "@/app/utils/max-padding-x-container";
import { MAX_WIDTH_CONTAINER_CLASS } from "@/app/utils/max-width-container";
import { HeroPresentation } from "./hero-presentation";

export function HeroSection() {
  return (
    <div className={`${MAX_WIDTH_CONTAINER_CLASS} m-auto mt-[96px] ${MAX_PADDING_X_CONTAINER}`}>
      <HeroPresentation />
    </div>
  );
}
