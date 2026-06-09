"use client";

import { useCart } from "@/hooks/useCart";
import { createContext } from "react";

type CartContextType = ReturnType<typeof useCart>;
type CartProviderType = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export function CartProvider({ children }: CartProviderType) {
  const value = useCart();

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
