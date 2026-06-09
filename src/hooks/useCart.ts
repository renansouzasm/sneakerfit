"use client";

import { useState } from "react";
import { Product } from "@prisma/client";

export interface ICartItem extends Product {
  qty: number;
}

type UseCartType = {
  cart: ICartItem[];
  decreaseQty(id: string): void;
  increaseQty(id: string): void;
  addItem(product: Product): void;
  deleteItem(id: string): void;
};

export function useCart(): UseCartType {
  const [cart, setCart] = useState<ICartItem[]>([]);

  function decreaseQty(id: string): void {
    setCart((prevState) =>
      prevState.map((item) => {
        if (item.id !== id) return item;
        if (item.qty <= 1) return item;
        return { ...item, qty: item.qty - 1 };
      }),
    );
  }

  function increaseQty(id: string): void {
    setCart((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  }

  function addItem(product: Product): void {
    const productFound = cart.find((item) => item.id === product.id);
    if (productFound) return increaseQty(productFound.id);
    setCart((prevState) => [...prevState, { ...product, qty: 1 }]);
  }

  function deleteItem(id: string): void {
    setCart((prevState) => prevState.filter((item) => item.id !== id));
  }

  return {
    cart,
    decreaseQty,
    increaseQty,
    addItem,
    deleteItem,
  };
}
