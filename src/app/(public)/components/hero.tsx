import { Overlay } from "./overlay";

export function Hero() {
  return (
    <section className="relative flex flex-1 px-4 py-16 h-screen">
      <Overlay alt="Hero home" src="/hero-home.jpg" />

      <div className="relative z-10 max-w-5xl mx-auto h-full w-full grid grid-rows-12">
        <div className="row-span-10">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black italic uppercase mb-4 text-text-primary">
            Sneakerfit.
            <br />
            Run on air.
          </h1>

          <p className="text-sm sm:text-md mb-8 max-w-md font-medium text-text-secondary">
            Your style starts from the feet up, at a new level of comfort and
            performance.
          </p>

          <button className="mt-12 flex gap-4 px-10 py-4 rounded-full text-lg font-semibold cursor-pointer bg-highlight hover:bg-highlight-hover">
            Shop Now
          </button>
        </div>

        <div className="row-span-2 w-full sm:w-1/2 lg:w-2/3">
          <p className="text-xs text-justify italic text-text-muted">
            Inspired by leading market brands, this project is for educational
            and portfolio purposes only. Logos used for demonstration purposes
            only. All trademarks and logos belong to their respective owners.
          </p>
        </div>
      </div>
    </section>
  );
}
