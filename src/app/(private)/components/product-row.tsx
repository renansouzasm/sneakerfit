"use client";

import { useProductContext } from "@/context/product/useProductContext";
import { Product } from "@prisma/client";
import { formatCurrencyBrl } from "@/utils/formatCurrencyBrl";
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

export function ProductRow({ product }: Props) {
  const { deleteProduct } = useProductContext();

  async function handleDelete() {
    deleteProduct(product.id);
  }

  return (
    <tr>
      <td className="p-4 gap-4 flex items-center">
        <div className="h-16 aspect-square flex items-center justify-center">
          <Image
            className="object-contain"
            width={400}
            height={400}
            alt={product.title}
            src={product.thumbUrl}
          />
        </div>
        <div className="flex flex-col">
          <span className="min-w-32 mb-1">{product.title}</span>
          <Link href={`/dashboard/products/details/${product.id}`}>
            <span className="w-fit text-text-muted cursor-pointer border-b">
              Details
            </span>
          </Link>
        </div>
      </td>

      <td className="p-4 whitespace-nowrap">
        <span className="py-2 px-4 rounded-full text-xs bg-surface-secondary">
          {product.brand}
        </span>
      </td>
      <td className="p-4 whitespace-nowrap">
        {formatCurrencyBrl(product.price)}
      </td>
      <td className="p-4 whitespace-nowrap">{product.stock}</td>
      <td className="p-4 whitespace-nowrap">
        <span className="py-2 px-4 rounded-full text-xs bg-surface-secondary">
          {product.status}
        </span>
      </td>

      <td className="p-4">
        <div className="flex justify-end gap-2">
          <Link href={`/dashboard/products/edit/${product.id}`}>
            <button className="p-2 rounded-lg cursor-pointer bg-surface-secondary">
              <Pencil className="size-4" />
            </button>
          </Link>
          <button
            className="p-2 rounded-lg cursor-pointer bg-surface-secondary"
            onClick={handleDelete}
          >
            <Trash className="size-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
