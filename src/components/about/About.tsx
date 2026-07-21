import { TornPhoto } from "@/components/ui/TornPhoto";
import { Button } from "@/components/ui/Button";
import collageFood from "@/assets/about/collage-food.png";
import collagePortrait from "@/assets/about/collage-portrait.png";
import collagePicnic from "@/assets/about/collage-picnic.png";

export function About() {
  return (
    <section id="about" className="relative bg-cream">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-4 py-20 sm:px-8 md:px-10 md:py-28 lg:grid-cols-[1.8fr_1fr] lg:gap-14 lg:py-32">
        <div className="relative h-[400px] sm:h-[480px] md:h-[560px] lg:h-[660px]">
          <TornPhoto
            src={collageFood}
            alt="Loaded fries, salsa, chips and a burger on a checkered tray"
            className="absolute left-0 top-0 h-[74%] w-[75%] -rotate-2"
            sizes="(max-width: 1024px) 72vw, 640px"
          />
          <TornPhoto
            src={collagePortrait}
            alt="A woman happily eating a loaded sandwich"
            className="absolute right-[2%] top-[34%] h-[39%] w-[34%] rotate-2"
            sizes="(max-width: 1024px) 33vw, 300px"
          />
          <TornPhoto
            src={collagePicnic}
            alt="Friends sharing takeout fries and wraps on a picnic blanket"
            className="absolute left-[30%] top-[53%] h-[42%] w-[56%] rotate-2"
            sizes="(max-width: 1024px) 54vw, 480px"
          />
        </div>

        <div className="max-w-xl">
          <h2 className="font-heading text-6xl font-black uppercase tracking-[-0.02em] text-dark-yellow sm:text-7xl lg:text-8xl">
            About
          </h2>
          <div className="mt-6 space-y-4 font-body text-base text-dark-yellow sm:text-lg">
            <p>
              Hotbite is inspired by the energy of street food culture – bold flavors,
              fast service, and food made fresh every single day.
            </p>
            <p>
              From loaded wraps to smoky grilled classics, every bite is crafted with
              fresh ingredients, handmade recipes, and unforgettable flavor.
            </p>
          </div>
          <Button variant="accent" className="mt-8 px-7 py-3.5">
            Explore The Difference
          </Button>
        </div>
      </div>
    </section>
  );
}
