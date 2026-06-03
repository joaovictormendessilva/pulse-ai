import { CardProps } from "./Card.types";

export function Card({ children, highlighted }: CardProps) {
  return (
    <div
      className={`border-1 backdrop-filter-[24px] p-[28px] rounded-[14px] w-full transition duration-500 ease-in-out hover:scale-105 flex flex-col ${
        highlighted
          ? "bg-[var(--primary)]/10 border-[var(--primary)] shadow-[0_0_30px_5px_rgba(19,170,120,0.6)]"
          : "bg-[#ffffff10] border-[#FFFFFF14]"
      }`}
    >
      {children}
    </div>
  );
}
