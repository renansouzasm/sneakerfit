import { FileX } from "lucide-react";
import Link from "next/link";

export function Empty() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <article className="flex flex-col items-center text-center">
        <div className="rounded-full flex items-center aspect-square p-4 mb-8 bg-surface-primary">
          <FileX className="size-20 text-primary" strokeWidth={1.5} />
        </div>

        <h2 className="mb-2 text-2xl font-semibold">No results found</h2>

        <p className="max-w-lg mb-8 text-sm text-text-secondary">
          We couldn&apos;t find any products.
        </p>

        <Link href={"/dashboard"}>
          <button className="w-3xs rounded-lg px-6 py-2 font-semibold cursor-pointer bg-highlight">
            Home
          </button>
        </Link>
      </article>
    </div>
  );
}
