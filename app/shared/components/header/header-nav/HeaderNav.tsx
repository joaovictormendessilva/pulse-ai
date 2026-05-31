import { CustomLink } from "../../custom-link";

export function HeaderNav() {
  return (
    <nav className="block max-[1000px]:hidden">
      <ul className="flex gap-[31px]">
        <li>
          <CustomLink href="">Features</CustomLink>
        </li>
        <li>
          <CustomLink href="">Pricing</CustomLink>
        </li>
        <li>
          <CustomLink href="">Dashboard</CustomLink>
        </li>
        <li>
          <CustomLink href="">About</CustomLink>
        </li>
      </ul>
    </nav>
  );
}
