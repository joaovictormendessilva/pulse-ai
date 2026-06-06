import { Activity } from "lucide-react";
import Image from "next/image";
import { footerData } from "./Footer.utils";

export function Footer() {
  return (
    <div className="bg-black pt-12 pb-10 lg:pt-[97px] lg:pb-[85px] flex flex-col md:flex-row w-full gap-10 md:gap-10 lg:gap-[240px] px-6 md:px-8 lg:px-16">
      <div className="w-full md:max-w-[280px] lg:max-w-[620px]">
        <div className="flex justify-start md:justify-end items-center gap-[7px] mb-[22px]">
          <div className="bg-(--primary) h-[36px] w-[36px] flex justify-center items-center rounded-[7px]">
            <Activity size={20} />
          </div>
          <h3 className="font-bold text-[20px] text-(--primary)">{footerData.brand.name}</h3>
        </div>

        <div className="flex items-start md:items-end flex-col gap-[25px]">
          <p className="max-w-full md:max-w-[220px] lg:max-w-[330px] w-full text-[14px] text-(--text-secondary)">
            {footerData.brand.description}
          </p>

          <div className="flex gap-[40px] w-full md:max-w-[220px] lg:max-w-[330px]">
            {footerData.brand.socials.map(({ label, icon, href }) => (
              <a key={label} href={href}>
                <Image src={icon} alt={label} width={18} height={18} className="cursor-pointer" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row gap-6 md:gap-8 lg:gap-[180px]">
        {footerData.navGroups.map(({ title, links }) => (
          <ul key={title} className="flex-1 md:flex-none">
            <li className="mb-[25px]">
              <h6 className="font-bold text-[14px]">{title}</h6>
            </li>
            <div className="flex gap-[16px] flex-col">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a className="text-(--text-secondary) text-[14px]" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}
