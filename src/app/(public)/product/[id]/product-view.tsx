"use client";

import Image from "next/image";
import { Overlay } from "../../components/overlay";
import { formatCurrencyBrl } from "@/utils/formatCurrencyBrl";
import { notFound } from "next/navigation";
import { useCartContext } from "@/context/cart/useCartContext";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export function ProductView({ product }: Props) {
  const { addItem } = useCartContext();

  if (!product) return notFound();

  return (
    <main>
      <section className="relative py-16 px-4 sm:px-8 overflow-hidden bg-surface-primary">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <span className="font-semibold text-highlight">
              {product.brand}
            </span>

            <h1 className="mt-8 mb-4 text-5xl font-bold">{product.title}</h1>

            <span className="font-semibold text-text-secondary">
              {formatCurrencyBrl(product.price)}
            </span>

            <button
              className="mt-12 flex gap-4 px-10 py-4 rounded-full text-lg font-semibold cursor-pointer bg-highlight hover:bg-highlight-hover"
              onClick={() => addItem(product)}
            >
              Add to cart
            </button>
          </div>

          <div className="relative h-80 sm:h-96">
            <Image
              className="w-full h-full object-contain -rotate-12 sm:scale-150"
              fill
              alt="adidas Alphabounce"
              src={product.thumbUrl}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative overflow-hidden w-full aspect-video rounded-xl bg-surface-secondary">
            <Overlay alt="Banner" src="/banners/banner-trending.jpg" />
          </div>

          <div>
            <h2 className="mb-8 text-2xl sm:text-4xl font-bold">Details</h2>

            <p className="text-justify text-text-secondary">
              {product.details}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 bg-surface-primary">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <h3 className="font-semibold">
            The sneakers provided by Sneakerfit wrap the foot with adaptive
            support and a guaranteed ultralight comfort zone.
          </h3>
          <p className="text-sm text-text-secondary">
            You want that sneaker bad & can&apos;t wait, then purchase
            immediately at the better ask
          </p>
        </div>
      </section>
    </main>
  );
}
