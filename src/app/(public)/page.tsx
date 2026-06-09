import { BannerGrid } from "./components/banner-grid";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { LogoWall } from "./components/logo-wall";
import { ProductGrid } from "./components/product-grid";

export default function StorePage() {
  return (
    <main>
      <Hero />
      <LogoWall />
      <ProductGrid />
      <BannerGrid />
      <Footer />
    </main>
  );
}
