import { CustomLinkProps } from "./CustomLink.types";

export function CustomLink({ children, href }: CustomLinkProps) {
  return (
    <a
      className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
      href={href}
    >
      {children}
    </a>
  );
}
