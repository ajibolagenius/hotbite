import { AlarmClock, Flame, Heart, Star, type LucideIcon } from "lucide-react";
import { TornPhoto } from "@/components/ui/TornPhoto";
import { ButtonLink } from "@/components/ui/Button";
import valuePhoto from "@/assets/values/value-photo.png";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const leftValues: Value[] = [
  {
    icon: Heart,
    title: "Fresh Daily",
    description: "Ingredients prepared fresh every single day.",
  },
  {
    icon: Star,
    title: "Bold Flavor",
    description: "Street food packed with rich and unforgettable flavor.",
  },
];

const rightValues: Value[] = [
  {
    icon: AlarmClock,
    title: "Fast Service",
    description: "Hot food served quickly without cutting corners.",
  },
  {
    icon: Flame,
    title: "Served Hot",
    description: "Freshly grilled food made to satisfy every craving.",
  },
];

export function Values() {
  return (
    <section id="values" className="bg-dark-yellow px-4 py-20 sm:px-8 sm:py-24 md:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center">
        <h2 className="text-center font-heading text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-cream sm:text-6xl lg:text-7xl">
          Taste The
          <br />
          Difference
        </h2>
        <p className="mt-5 font-body text-base text-cream/80 sm:text-lg">
          Street food done right.
        </p>

        <div className="mt-14 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          <div className="order-2 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:gap-16">
            {leftValues.map((value) => (
              <ValueBlock key={value.title} {...value} />
            ))}
          </div>

          <TornPhoto
            src={valuePhoto}
            alt="A woman enjoying a slice of pizza outside a street food truck"
            className="relative order-1 mx-auto h-[420px] w-[315px] sm:h-[500px] sm:w-[375px] lg:order-2"
            sizes="(max-width: 640px) 315px, 375px"
          />

          <div className="order-3 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-16">
            {rightValues.map((value) => (
              <ValueBlock key={value.title} {...value} />
            ))}
          </div>
        </div>

        <ButtonLink href="#testimonials" variant="accent" className="mt-14 px-7 py-3.5">
          View Reviews
        </ButtonLink>
      </div>
    </section>
  );
}

function ValueBlock({ icon: Icon, title, description }: Value) {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon size={28} className="fill-yellow text-yellow" aria-hidden />
      <h3 className="mt-4 font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
        {title}
      </h3>
      <p className="mt-2 max-w-[240px] font-body text-sm text-cream/90 sm:text-base">
        {description}
      </p>
    </div>
  );
}
