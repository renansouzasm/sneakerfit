"use client";

import { useSidebarContext } from "@/context/sidebar/useSidebarContext";
import { SportShoe } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { title: "Home", link: "/", active: true },
  { title: "Cart", link: "/cart", active: false },
  { title: "Dashboard", link: "/dashboard", active: false },
];

const footerItems = [
  { title: "RETURN POLICY", link: "#" },
  { title: "DISCLAIMER", link: "#" },
];

export function SidebarStore() {
  const { isOpen, setIsOpen } = useSidebarContext();

  function handle() {
    setIsOpen(false);
  }

  return (
    <aside
      className={`fixed w-64 z-50 left-0 top-0 bottom-0 flex flex-col justify-between px-8 py-16 transition-transform duration-300 shadow-xl border-r border-border bg-surface-primary ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <main className="gap-2">
        {menuItems.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <button
                className={`w-full text-left uppercase text-3xl font-black tracking-tighter h-auto p-0 transition-colors duration-200 cursor-pointer block hover:text-highlight hover:bg-transparent
                        ${item.active && "text-highlight"}`}
                onClick={handle}
              >
                {item.title}
              </button>
            </Link>
          );
        })}
      </main>

      <footer className="p-0 flex flex-col gap-6 mt-auto">
        <div className="flex flex-col gap-2">
          {footerItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-xs font-bold tracking-widest uppercase transition-colors duration-300 text-text-muted hover:text-text-secondary"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            className="transition-colors duration-200 text-text-muted hover:text-text-secondary"
            href="#"
          >
            <SportShoe className="size-4" />
          </Link>
          <Link
            className="transition-colors duration-200 text-text-muted hover:text-text-secondary"
            href="#"
          >
            <SportShoe className="size-4" />
          </Link>
        </div>
      </footer>
    </aside>
  );
}
