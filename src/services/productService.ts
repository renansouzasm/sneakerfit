import {
  CreateProductInput,
  UpdateProductInput,
} from "@/schemas/productSchema";
import { reaisToCents } from "@/utils/reaisToCents";
import { Product, ProductStatusEnum, ProductStatus } from "@/types/product";
import { prisma } from "@/lib/prisma";

function assignStatus(stock: number): ProductStatus {
  if (stock > 5) return ProductStatusEnum.AVAILABLE;
  if (stock > 0) return ProductStatusEnum.LOW_STOCK;
  return ProductStatusEnum.NO_STOCK;
}

function assignDetails(details: string | undefined): string {
  if (details) return details;
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim lacinia metus, in vestibulum leo pellentesque non. Nam non arcu nisl. Sed nisl tortor, posuere nec lorem quis, sagittis posuere ligula. Maecenas vel sem viverra, scelerisque augue a, aliquam libero. Suspendisse quis augue quis arcu malesuada vulputate vitae et tellus. Vivamus gravida leo a orci porta, in finibus elit tempus. Etiam hendrerit quam vel libero pellentesque finibus. Aliquam egestas sapien vitae nibh bibendum consectetur. Fusce dignissim dictum lacus nec tincidunt.";
}

function assignThumbUrl(thumbUrl: string | undefined): string {
  if (thumbUrl) return thumbUrl;
  return "/products/placeholder.png";
}

export async function getProductById(id: string): Promise<Product> {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) throw new Error("Product not found");
  return product;
}

export async function getProducts(): Promise<Product[]> {
  const products = await prisma.product.findMany();
  return products;
}

export async function createProduct(
  newProduct: CreateProductInput,
): Promise<Product> {
  const price = reaisToCents(newProduct.price);
  const status = assignStatus(newProduct.stock);
  const details = assignDetails(newProduct.details);
  const thumbUrl = assignThumbUrl(newProduct.thumbUrl);

  const product = await prisma.product.create({
    data: { ...newProduct, price, status, details, thumbUrl },
  });
  return product;
}

export async function updateProduct(
  updatedData: UpdateProductInput,
): Promise<Product> {
  const price = reaisToCents(updatedData.price);
  const status = assignStatus(updatedData.stock);
  const details = assignDetails(updatedData.details);
  const thumbUrl = assignThumbUrl(updatedData.thumbUrl);

  const product = await prisma.product.update({
    where: { id: updatedData.id },
    data: { ...updatedData, price, status, details, thumbUrl },
  });
  return product;
}

export async function deleteProduct(id: string): Promise<void> {
  await prisma.product.delete({ where: { id } });
}
