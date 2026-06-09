import { useProductContext } from "./useProductContext";

export function useStoreProducts() {
  const { products, getProductById } = useProductContext();

  return {
    products,
    getProductById,
  };
}
