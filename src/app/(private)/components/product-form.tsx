"use client";

import { useProductContext } from "@/context/product/useProductContext";
import { centsToReais } from "@/utils/centsToReais";
import { Product, ProductBrandEnum } from "@/types/product";

type Props = {
  mode: "create" | "edit";
  product?: Product;
};

export function ProductForm({ mode, product }: Props) {
  const { createProduct, updateProduct } = useProductContext();

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (mode === "create") return createProduct(formData);
    if (mode === "edit" && product) return updateProduct(formData, product.id);
  }

  return (
    <div className="max-w-3xl rounded-xl py-8 px-4 text-sm bg-surface-primary">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-8">
          <label className="font-semibold">Title</label>
          <input
            className="w-full rounded-lg mt-2 p-4 bg-surface-secondary placeholder:text-text-muted"
            name="title"
            type="text"
            placeholder="Product title"
            defaultValue={product?.title}
          />
        </div>

        <div className="mb-8">
          <label className="font-semibold">Brand</label>
          <select
            className="w-full rounded-lg mt-2 p-4 bg-surface-secondary"
            name="brand"
          >
            <option value={ProductBrandEnum.ADIDAS}>Adidas</option>
            <option value={ProductBrandEnum.NIKE}>Nike</option>
            <option value={ProductBrandEnum.NEW_BALANCE}>New Balance</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="font-semibold">Price</label>
            <input
              className="w-full rounded-lg mt-2 p-4 bg-surface-secondary placeholder:text-text-muted"
              name="price"
              type="text"
              placeholder="100.00"
              defaultValue={product && centsToReais(product.price)}
            />
          </div>
          <div>
            <label className="font-semibold">Stock</label>
            <input
              className="w-full rounded-lg mt-2 p-4 bg-surface-secondary placeholder:text-text-muted"
              name="stock"
              type="number"
              placeholder="0"
              defaultValue={product?.stock ?? 0}
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="font-semibold">Product details</label>
          <textarea
            className="resize-none w-full rounded-lg mt-2 p-4 bg-surface-secondary placeholder:text-text-muted"
            placeholder="Write the product details"
            rows={10}
            defaultValue={product?.details}
          />
        </div>

        <div>
          <button
            className="w-full rounded-lg p-4 text-base font-semibold cursor-pointer bg-indigo-950"
            type="submit"
          >
            {mode === "create" ? "Add Product" : "Edit Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
