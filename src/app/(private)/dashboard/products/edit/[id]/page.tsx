import { getProductByIdAction } from "@/server/actions/productActions";
import { ProductForm } from "@/app/(private)/components/product-form";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function EditProductPage({ params }: Params) {
  const { id } = await params;
  const response = await getProductByIdAction(id);

  if (!response.success) return notFound();

  const product = response.data;

  return (
    <>
      <h1 className="mb-8 text-2xl font-semibold">Edit Product</h1>
      <ProductForm mode="edit" product={product} />
    </>
  );
}
