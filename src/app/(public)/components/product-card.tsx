"use client";

import { useCartContext } from "@/context/cart/useCartContext";
import { Product } from "@/types/product";
import { formatCurrencyBrl } from "@/utils/formatCurrencyBrl";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article>
      <div className="p-8 aspect-square rounded-xl mb-4 bg-surface-primary">
        <Image
          className="w-full h-full"
          alt={product.title}
          width={400}
          height={400}
          src="/products/placeholder.png"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-text-secondary">
            {formatCurrencyBrl(product.price)}
          </span>
          <span className="text-xs px-3 py-1 rounded-full text-brand bg-brand-subtle">
            {product.brand}
          </span>
        </div>

        <h3 className="mb-4">{product.title}</h3>

        <Buttons product={product} />
      </div>
    </article>
  );
}

function Buttons({ product }: Props) {
  const { addItem } = useCartContext();

  return (
    <div className="grid grid-cols-2 gap-2">
      <button
        className="w-full cursor-pointer flex flex-1 items-center justify-center gap-2 py-2 px-4 text-sm rounded-full border border-transparent transition-all duration-300 hover:border-border-strong bg-surface-secondary"
        onClick={() => addItem(product)}
      >
        <ShoppingBag size={16} />{" "}
        <span className="hidden sm:block">Add to Cart</span>
      </button>
      <Link href={`/product/${product.id}`}>
        <button className="w-full cursor-pointer flex-1 py-2 px-4 text-sm rounded-full border border-transparent transition-all duration-300 hover:border-border-strong">
          Details
        </button>
      </Link>
    </div>
  );
}
