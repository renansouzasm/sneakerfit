import { banners } from "@/data/banners";
import { Overlay } from "./overlay";
import Link from "next/link";

export function BannerGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold italic mb-4">
            Most Recommend Collections For You
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            These sneakers drops to timeless classics, we bring you authentic
            kicks built for style and comfort and
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {banners.map((banner, index) => (
            <article
              key={index}
              className={`${banner.style} relative rounded-xl overflow-hidden`}
            >
              <Overlay alt={banner.alt} src={banner.src} />

              <div className="absolute top-6 left-6">
                <h3 className="text-xl font-semibold mb-3">{banner.title}</h3>
                <Link href={banner.link}>
                  <button className="cursor-pointer px-6 py-2 rounded-full text-sm bg-surface-secondary">
                    {banner.button}
                  </button>
                </Link>
              </div>
            </article>
          ))}

          <article className="relative rounded-xl overflow-hidden aspect-21/9 md:col-span-2 bg-surface-primary">
            <Overlay alt="Banner trending" src="/banners/banner-trending.jpg" />

            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-semibold mb-3 italic">
                Trending Now
              </h3>
              <Link href={"#"}>
                <button className="cursor-pointer px-6 py-2 rounded-full text-sm bg-surface-secondary">
                  Explore Shop
                </button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
