import { DividerProps } from "./Divider.types";

export function Divider({ className }: DividerProps) {
  return <div className={`border-t border-[#FFFFFF0D] ${className}`} />;
}
