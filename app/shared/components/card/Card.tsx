import { CardProps } from "./Card.types";

export function Card({ children }: CardProps) {
  return (
    <div className="bg-[#ffffff10] border-1 border-[#FFFFFF14] backdrop-filter-[24px] p-[28px] rounded-[14px] w-full transition duration-500 ease-in-out hover:scale-105 flex flex-col">
      {children}
    </div>
  );
}
