export const ProductBrandEnum = {
  NIKE: "NIKE",
  ADIDAS: "ADIDAS",
  NEW_BALANCE: "NEW_BALANCE",
} as const;

export type ProductBrand =
  (typeof ProductBrandEnum)[keyof typeof ProductBrandEnum];

export const ProductStatusEnum = {
  AVAILABLE: "AVAILABLE",
  LOW_STOCK: "LOW_STOCK",
  NO_STOCK: "NO_STOCK",
} as const;

export type ProductStatus =
  (typeof ProductStatusEnum)[keyof typeof ProductStatusEnum];

export type Product = {
  id: string;
  title: string;
  brand: ProductBrand;
  price: number;
  stock: number;
  status: ProductStatus;
  details: string;
  thumbUrl: string;
};
