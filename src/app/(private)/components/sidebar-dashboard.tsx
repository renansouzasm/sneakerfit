"use client";

import { useSidebarContext } from "@/context/sidebar/useSidebarContext";
import { LayoutDashboard, SportShoe, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { title: "Dashboard", link: "/dashboard", icon: LayoutDashboard },
  { title: "Products", link: "/dashboard/products", icon: SportShoe },
  { title: "Store", link: "/", icon: Store },
];

export function SidebarDashboard() {
  const { isOpen } = useSidebarContext();

  return (
    <aside
      className={`p-4 fixed w-64 z-50 left-0 top-0 h-screen transition-transform duration-300 bg-surface-primary ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <header className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Image
            className="w-9 h-9 rounded-full"
            width={16}
            height={16}
            alt="user"
            src="/avatars/avatar.jpg"
          />
        </div>

        <div className="mb-1 text-xs tracking-wide text-text-muted">
          Monday, March 24
        </div>

        <h2 className="text-lg font-semibold leading-tight">
          Welcome back,
          <br />
          User!
        </h2>
      </header>

      <main>
        <div className="gap-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link key={index} href={item.link}>
                <button className="w-full flex items-center gap-3 py-2 rounded-full transition-all duration-300 cursor-pointer text-text-secondary hover:text-text-primary">
                  <Icon size={16} />
                  {item.title}
                </button>
              </Link>
            );
          })}
        </div>
      </main>
    </aside>
  );
}
