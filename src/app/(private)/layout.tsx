"use client";

import { SidebarProvider } from "@/context/sidebar/SidebarContext";
import { SidebarDashboard } from "./components/sidebar-dashboard";
import { useSidebarContext } from "@/context/sidebar/useSidebarContext";
import { SidebarTrigger } from "./components/sidebar-trigger";
import { useEffect } from "react";

function DashboardContent({ children }: Props) {
  const { isOpen, setIsOpen } = useSidebarContext();
  const contentStyle =
    "min-h-screen w-full flex flex-col transition-all duration-300";

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <main className="flex">
      <SidebarDashboard />

      <div className={`${contentStyle} ${isOpen ? "ml-64" : "ml-0"}`}>
        <header className="flex items-center p-4 sm:px-8">
          <SidebarTrigger />
        </header>

        <section className="flex flex-1 py-8 px-4 sm:px-8">
          <div className="flex flex-col flex-1 overflow-hidden">{children}</div>
        </section>
      </div>
    </main>
  );
}

type Props = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  );
}

export default DashboardLayout;
