import { ProductForm } from "@/app/(private)/components/product-form";

export default function ProductCreatePage() {
  return (
    <>
      <h1 className="mb-8 text-2xl font-semibold">Add Product</h1>
      <ProductForm mode="create" />
    </>
  );
}
