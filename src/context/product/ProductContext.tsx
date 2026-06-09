"use client";

import { useProducts } from "@/hooks/useProducts";
import { createContext } from "react";

type ProductContextType = ReturnType<typeof useProducts>;
type ProductProviderType = {
  children: React.ReactNode;
};

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
);

export function ProductProvider({ children }: ProductProviderType) {
  const value = useProducts();

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
