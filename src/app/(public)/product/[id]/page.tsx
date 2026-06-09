import { notFound } from "next/navigation";
import { getProductByIdAction } from "@/server/actions/productActions";
import { ProductView } from "./product-view";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Params) {
  const { id } = await params;
  const response = await getProductByIdAction(id);

  if (!response.success) return notFound();

  const product = response.data;

  return <ProductView product={product} />;
}
