"use client";

import { useStoreProducts } from "@/context/product/useStoreProducts";
import { ProductCard } from "./product-card";

export function ProductGrid() {
  const { products } = useStoreProducts();

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl w-full mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-4xl mx-auto font-bold italic mb-4">
            Newly Dropped Collections
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary">
            These sneakers drops to timeless classics, we bring you authentic
            kicks built for style and comfort and
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
          {products.slice(0, 6).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
