import { getProductByIdAction } from "@/server/actions/productActions";
import { formatCurrencyBrl } from "@/utils/formatCurrencyBrl";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({ params }: Params) {
  const { id } = await params;
  const response = await getProductByIdAction(id);

  if (!response.success) return notFound();

  const product = response.data;

  return (
    <article className="grid md:grid-cols-12 gap-4">
      <div className="md:col-span-5 w-full relative rounded-xl aspect-video bg-surface-primary">
        <Image
          className="w-full h-full object-contain"
          width={400}
          height={400}
          alt="Product thumb"
          src={product.thumbUrl}
        />
      </div>

      <div className="md:col-span-7">
        <h1 className="mb-4 text-2xl md:text-4xl font-semibold">
          {product.title}
        </h1>

        <div className="mb-8 flex gap-x-4 gap-y-2 flex-wrap">
          <span>
            Brand:{" "}
            <span className="font-semibold text-highlight">
              {product.brand}
            </span>
          </span>
          <span>
            Price:{" "}
            <span className="font-semibold text-highlight">
              {formatCurrencyBrl(product.price)}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} className="text-highlight" />
            <span className="font-semibold text-highlight">4.5</span>
            <span>/ 5</span>
          </span>
          <span>
            Stock:{" "}
            <span className="font-semibold text-highlight">
              {product.stock}
            </span>
          </span>
          <span>
            Status:{" "}
            <span className="font-semibold text-highlight">
              {product.status}
            </span>
          </span>
        </div>

        <div className="mb-8">
          <h2 className="mb-4">Details</h2>

          <p className="text-justify text-text-secondary">{product.details}</p>
        </div>

        <Link href={`/dashboard/products/edit/${id}`}>
          <button className="rounded-lg w-fit px-12 py-4 font-semibold cursor-pointer bg-highlight">
            Edit Product
          </button>
        </Link>
      </div>
    </article>
  );
}
