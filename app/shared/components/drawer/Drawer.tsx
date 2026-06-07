"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CustomLink } from "../custom-link";
import { DrawerProps } from "./Drawer.types";
import { NAV_ITEMS } from "../header/header-nav/HeaderNav.utils";

export function Drawer({ isOpen, onClose }: DrawerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen && !isMounted) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isMounted ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-[#0a0a0a] border-l border-[#0d0d0d] z-50 flex flex-col transition-transform duration-300 ${
          isMounted ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 hover:text-(--primary) active:text-(--primary) transition-all duration-300"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-6">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <CustomLink href={item.href}>{item.label}</CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
