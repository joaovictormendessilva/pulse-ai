import { MAX_PADDING_X_CONTAINER } from "@/app/utils/max-padding-x-container";
import { MAX_WIDTH_CONTAINER_CLASS } from "@/app/utils/max-width-container";
import { ContainerProps } from "./Container.types";

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`${MAX_WIDTH_CONTAINER_CLASS} m-auto ${MAX_PADDING_X_CONTAINER} ${className ?? ""}`}>
      {children}
    </div>
  );
}
