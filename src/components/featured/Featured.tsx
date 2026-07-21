import Image, { type StaticImageData } from "next/image";
import { SectionEdge } from "@/components/ui/SectionEdge";
import chickenWrap from "@/assets/specials/chicken-wrap.png";
import bbqWings from "@/assets/specials/bbq-wings.png";
import onionRings from "@/assets/specials/onion-rings.png";

const specials = [
  {
    name: "Chicken Wrap",
    price: "$8.50",
    image: chickenWrap,
    alt: "Grilled chicken wrap loaded with lettuce and tomato",
  },
  {
    name: "BBQ Wings",
    price: "$11.00",
    image: bbqWings,
    alt: "Sticky BBQ glazed chicken wings with sesame seeds",
  },
  {
    name: "Onion Rings",
    price: "$4.25",
    image: onionRings,
    alt: "Crispy breaded onion rings with dipping sauce",
  },
];

export function Featured() {
  return (
    <section id="specials" className="relative overflow-x-clip bg-cream pb-24 pt-14 sm:pb-28 sm:pt-16 md:pb-32 md:pt-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-10">
        <h2 className="text-center font-heading text-5xl font-black uppercase leading-[0.85] tracking-[-0.02em] text-dark-yellow sm:text-6xl lg:text-7xl">
          Hotbite
          <br />
          Specials
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:mt-16 sm:grid-cols-3 sm:gap-8 md:mt-20">
          {specials.map((item) => (
            <FoodCard key={item.name} {...item} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 translate-y-[55%] text-dark-yellow">
        <SectionEdge side="bottom" />
      </div>
    </section>
  );
}

function FoodCard({
  image,
  name,
  price,
  alt,
}: {
  image: StaticImageData;
  name: string;
  price: string;
  alt: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48 md:h-56 md:w-56">
        <div className="absolute -inset-x-2 inset-y-[20%] rounded-[6%] bg-yellow" />
        <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-dark-yellow sm:border-8">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
          />
        </div>
      </div>
      <h3 className="mt-6 font-heading text-2xl uppercase tracking-wide text-dark-yellow sm:text-3xl">
        {name}
      </h3>
      <span className="mt-3 rounded-full border border-dark-yellow bg-cream px-4 py-1 font-body text-sm font-bold text-dark-yellow">
        {price}
      </span>
    </div>
  );
}
