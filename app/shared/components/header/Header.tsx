"use client";

import { useState } from "react";
import { MAX_PADDING_X_CONTAINER } from "@/app/utils/max-padding-x-container";
import { MAX_WIDTH_CONTAINER_CLASS } from "@/app/utils/max-width-container";
import { Menu } from "lucide-react";
import { CustomLink } from "../custom-link";
import { GlowButton } from "../glow-button";
import { Drawer } from "../drawer";
import { HeaderLogo } from "../header-logo";
import { HeaderNav } from "./header-nav";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="border-b border-[#0d0d0d]">
        <div
          className={`${MAX_WIDTH_CONTAINER_CLASS} w-full mx-auto h-[80px] flex justify-between items-center ${MAX_PADDING_X_CONTAINER}`}
        >
          <div className="flex items-center gap-[40px]">
            <HeaderLogo />
            <HeaderNav />
          </div>

          <div className="flex items-center gap-[24px]">
            <div className="hidden min-[555px]:block">
              <CustomLink href="">Log In</CustomLink>
            </div>

            <div className="hidden min-[555px]:block">
              <GlowButton>Start Free Trial</GlowButton>
            </div>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="block min-[1000px]:hidden cursor-pointer hover:text-(--primary) active:text-(--primary) transition-all duration-300 p-2 -mr-2"
              aria-label="Abrir menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
