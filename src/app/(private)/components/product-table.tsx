"use client";

import { Product } from "@prisma/client";
import { ProductRow } from "./product-row";

type ProductTableProps = {
  products: Product[];
};

export function ProductTable({ products }: ProductTableProps) {
  const headerKeys = ["Product", "Brand", "Price", "Stock", "Status"];

  return (
    <div className="overflow-x-auto rounded-xl bg-surface-primary">
      <table className="w-full text-left text-sm">
        <thead className="font-semibold bg-surface-secondary">
          <tr>
            {headerKeys.map((header, index) => (
              <th className="p-4 whitespace-nowrap" key={index}>
                {header}
              </th>
            ))}
            <th className="p-4 whitespace-nowrap text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-border">
          {products.map((product) => (
            <ProductRow product={product} key={product.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
