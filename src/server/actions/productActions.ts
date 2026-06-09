"use server";

import {
  productCreateSchema,
  productUpdateSchema,
} from "@/schemas/productSchema";
import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/services/productService";
import { Product } from "@/types/product";

type ErrorResponse = { success: false; error: string; fieldErrors?: string };
type SuccessResponse<T> = { success: true; data: T };
type EmptySuccessResponse = { success: true };

function formatFieldErrors(fieldErrors: string[][]): string {
  return fieldErrors.flat().join("\n");
}

export async function getProductByIdAction(
  id: string,
): Promise<SuccessResponse<Product> | ErrorResponse> {
  try {
    const product = await getProductById(id);
    return { success: true, data: product };
  } catch (error) {
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: "Error while trying to find product" };
  }
}

export async function getProductsAction(): Promise<
  SuccessResponse<Product[]> | ErrorResponse
> {
  try {
    const products = await getProducts();
    return { success: true, data: products };
  } catch (error) {
    if (error instanceof Error) return { success: false, error: error.message };
    return {
      success: false,
      error: "Error while trying to load products list",
    };
  }
}

export async function createProductAction(
  formData: FormData,
): Promise<SuccessResponse<Product> | ErrorResponse> {
  const rawData = Object.fromEntries(formData);
  const parsed = productCreateSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors = formatFieldErrors(
      Object.values(parsed.error.flatten().fieldErrors),
    );
    return { success: false, error: "Invalid data", fieldErrors };
  }

  try {
    const product = await createProduct(parsed.data);
    return { success: true, data: product };
  } catch (error) {
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: "Error while trying to create product" };
  }
}

export async function updateProductAction(
  formData: FormData,
  id: string,
): Promise<SuccessResponse<Product> | ErrorResponse> {
  const rawData = { ...Object.fromEntries(formData), id };
  const parsed = productUpdateSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors = formatFieldErrors(
      Object.values(parsed.error.flatten().fieldErrors),
    );
    return { success: false, error: "Invalid data", fieldErrors };
  }

  try {
    const product = await updateProduct(parsed.data);
    return { success: true, data: product };
  } catch (error) {
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: "Error while trying to update product" };
  }
}

export async function deleteProductAction(
  id: string,
): Promise<EmptySuccessResponse | ErrorResponse> {
  if (!id) return { success: false, error: "ID not provided" };

  try {
    await deleteProduct(id);
    return { success: true };
  } catch (error) {
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: "Error while trying to delete product" };
  }
}
