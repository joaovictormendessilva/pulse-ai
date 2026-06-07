import { CustomLink } from "../../custom-link";
import { NAV_ITEMS } from "./HeaderNav.utils";

export function HeaderNav() {
  return (
    <nav className="block max-[1000px]:hidden">
      <ul className="flex gap-[31px]">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <CustomLink href={item.href}>{item.label}</CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
