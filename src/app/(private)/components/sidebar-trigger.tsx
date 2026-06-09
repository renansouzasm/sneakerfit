"use client";

import { useSidebarContext } from "@/context/sidebar/useSidebarContext";
import { PanelLeft } from "lucide-react";

export function SidebarTrigger() {
  const { setIsOpen } = useSidebarContext();

  function handleSidebar() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <button
      className="group z-60 p-2 cursor-pointer rounded-lg bg-surface-secondary"
      onClick={handleSidebar}
    >
      <PanelLeft className="size-4 transition-colors duration-300 text-text-muted group-hover:text-text-primary" />
    </button>
  );
}
