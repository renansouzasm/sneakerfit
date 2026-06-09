"use client";

import { useProductContext } from "@/context/product/useProductContext";
import { ProductTable } from "../../components/product-table";
import Link from "next/link";
import { Download, Plus } from "lucide-react";
import { Empty } from "../../components/empty";

export default function ProductPage() {
  const { products } = useProductContext();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h1 className="w-fit mb-4 md:mb-0 text-2xl font-semibold">Products</h1>

        <div className="flex gap-2">
          <button className="size-fit flex items-center gap-2 px-6 py-2 rounded-lg font-semibold cursor-pointer bg-surface-secondary">
            <Download className="size-4" /> Export PDF
          </button>
          <Link href={"/dashboard/products/create"}>
            <button className="size-fit flex items-center gap-2 px-6 py-2 rounded-lg font-semibold cursor-pointer bg-surface-secondary">
              <Plus className="size-4" /> Add Product
            </button>
          </Link>
        </div>
      </div>

      {products.length > 0 ? <ProductTable products={products} /> : <Empty />}
    </>
  );
}
