"use client";

import { useCartContext } from "@/context/cart/useCartContext";
import { ICartItem } from "@/hooks/useCart";
import { formatCurrencyBrl } from "@/utils/formatCurrencyBrl";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

type Props = {
  item: ICartItem;
};

export function CartItem({ item }: Props) {
  const { increaseQty, decreaseQty, deleteItem } = useCartContext();

  return (
    <article className="relative grid grid-cols-4 md:grid-cols-12 items-center gap-x-4 gap-y-8 py-4">
      <div className="col-span-3 md:col-span-5 flex items-center gap-4">
        <div className="grid place-items-center rounded-lg aspect-square h-16 md:h-24 p-2 bg-surface-primary">
          <Image
            className="object-contain"
            width={400}
            height={400}
            alt={item.title}
            src={item.thumbUrl}
          />
        </div>
        <div className="grid">
          <span className="mb-1">{item.title}</span>
          <span className="text-xs text-text-muted">{item.brand}</span>
        </div>
      </div>

      <div className="md:order-last w-full flex justify-end">
        <button
          className="w-fit cursor-pointer"
          onClick={() => deleteItem(item.id)}
        >
          <X className="size-4" />
        </button>
      </div>

      <span className="col-span-2 hidden md:block">
        {formatCurrencyBrl(item.price)}
      </span>

      <div className="col-span-2 flex items-center gap-2">
        <button
          className="grid place-items-center rounded-full h-8 aspect-square cursor-pointer border border-border"
          onClick={() => decreaseQty(item.id)}
        >
          <Minus className="size-4" />
        </button>
        <span className="text-center">{item.qty}</span>
        <button
          className="grid place-items-center rounded-full h-8 aspect-square cursor-pointer border border-border"
          onClick={() => increaseQty(item.id)}
        >
          <Plus className="size-4" />
        </button>
      </div>

      <span className="col-span-2 text-right md:text-left">
        {formatCurrencyBrl(item.price * item.qty)}
      </span>
    </article>
  );
}
