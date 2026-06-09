"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type SidebarProviderType = {
  children: React.ReactNode;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);

export function SidebarProvider({ children }: SidebarProviderType) {
  const [isOpen, setIsOpen] = useState(false);
  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}
