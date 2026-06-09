"use client";

import {
  getProductsAction,
  createProductAction,
  updateProductAction,
  deleteProductAction,
} from "@/server/actions/productActions";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";

type UseProductsType = {
  products: Product[];
  getProductById: (id: string) => Product | void;
  createProduct: (formData: FormData) => Promise<void>;
  updateProduct: (formData: FormData, id: string) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
};

export function useProducts(): UseProductsType {
  const [products, setProducts] = useState<Product[]>([]);

  async function loadProducts(): Promise<void> {
    const response = await getProductsAction();
    if (!response.success) return alert(response.error);

    const data = response.data;
    setProducts(data);
  }
  useEffect(() => {
    loadProducts();
  }, []);

  function getProductById(id: string): Product | void {
    const productFound = products.find((product) => product.id === id);
    if (!productFound) return;
    return productFound;
  }

  async function createProduct(formData: FormData): Promise<void> {
    const response = await createProductAction(formData);
    if (!response.success) return alert(response.fieldErrors ?? response.error);

    const data = response.data;
    setProducts((prevState) => [...prevState, data]);
  }

  async function updateProduct(formData: FormData, id: string): Promise<void> {
    const response = await updateProductAction(formData, id);
    if (!response.success) return alert(response.fieldErrors ?? response.error);

    const data = response.data;
    setProducts((prevState) =>
      prevState.map((product) => (product.id === data.id ? data : product)),
    );
  }

  async function deleteProduct(id: string): Promise<void> {
    const response = await deleteProductAction(id);
    if (!response.success) return alert(response.error);

    setProducts((prevState) =>
      prevState.filter((product) => product.id !== id),
    );
  }

  return {
    products,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
