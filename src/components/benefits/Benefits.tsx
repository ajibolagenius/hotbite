import Image, { type StaticImageData } from "next/image";
import { SmoothScrollLink } from "@/components/ui/SmoothScrollLink";
import { Emoji, type EmojiName } from "@/components/emoji";
import classicHotDog from "@/assets/benefits/classic-hot-dog.png";
import smashBurger from "@/assets/benefits/smash-burger.png";

interface Benefit {
  emoji: EmojiName;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    emoji: "hot-pepper",
    title: "Fresh Sauces",
    description: "House-made sauces crafted daily for flavor in every bite.",
  },
  {
    emoji: "crescent-moon",
    title: "Open Late",
    description: "Fresh street food for every craving, day or night.",
  },
  {
    emoji: "poultry-leg",
    title: "Big Portions",
    description: "Loaded meals made to actually satisfy every craving.",
  },
  {
    emoji: "motor-scooter",
    title: "Delivery",
    description: "Fast ordering and citywide delivery available daily.",
  },
  {
    emoji: "rocket",
    title: "No Long Waits",
    description: "Fast service designed for busy cravings and quick bites.",
  },
  {
    emoji: "burrito",
    title: "Combo Friendly",
    description: "Fresh combo meals perfect for quick bites and sharing.",
  },
];

const favorites = [
  {
    name: "Classic Hot Dog",
    price: "$10.50",
    image: classicHotDog,
    alt: "Two loaded classic hot dogs with mustard, lettuce, tomato, and onion",
  },
  {
    name: "Smash Burger",
    price: "$13.75",
    image: smashBurger,
    alt: "Juicy smash burger with cheese, pickles, and sesame bun",
  },
];

export function Benefits() {
  return (
    <section
      id="benefits"
      className="scroll-mt-24 bg-dark-yellow px-4 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-28 md:px-10 md:pb-28 md:pt-36 lg:scroll-mt-28 lg:pt-44 xl:pt-56"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12 xl:gap-20">
        <div>
          <h2 className="font-heading text-5xl font-black uppercase leading-[0.9] tracking-[-0.02em] text-cream sm:text-6xl lg:text-7xl xl:text-[80px]">
            Why We Hit
            <br />
            Different
          </h2>

          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-14 sm:gap-x-8 sm:gap-y-12 md:grid-cols-3 md:gap-x-10 md:gap-y-14 lg:grid-cols-2 lg:gap-x-12">
            {benefits.map((benefit) => (
              <BenefitItem key={benefit.title} {...benefit} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Emoji name="red-heart" size={40} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
            <h3 className="font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
              Chef&apos;s Favorite
            </h3>
          </div>
          <p className="mt-2 font-body text-sm text-cream/80 sm:text-base">
            Crafted fresh and chosen by the chef.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {favorites.map((item) => (
              <FavoriteCard key={item.name} {...item} />
            ))}
          </div>

          <div className="mt-10 flex justify-end sm:mt-12">
            <SmoothScrollLink href="#menu" variant="accent" className="px-7 py-3.5">
              View Menu
            </SmoothScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ emoji, title, description }: Benefit) {
  return (
    <li className="flex flex-col items-start">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow bg-dark-yellow shadow-[0_0_20px_rgba(255,149,0,0.55),0_4px_14px_rgba(0,0,0,0.35)] sm:h-14 sm:w-14">
        <Emoji name={emoji} size={64} alt="" className="h-7 w-7 sm:h-8 sm:w-8" />
      </span>
      <h3 className="mt-4 font-heading text-xl font-black uppercase tracking-wide text-cream sm:text-2xl">
        {title}
      </h3>
      <p className="mt-1.5 max-w-[240px] font-body text-sm leading-relaxed text-cream/85 sm:text-[15px]">
        {description}
      </p>
    </li>
  );
}

function FavoriteCard({
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
    <div className="flex flex-col items-center text-center">
      <div className="relative h-64 w-64 sm:h-44 sm:w-44 md:h-48 md:w-48">
        {/* Rounded-square backdrop shifted upward — only top-left/top-right corners peek out */}
        <div
          className="absolute -left-2 -right-2 -top-3 bottom-1 rounded-[26px] bg-yellow shadow-[0_10px_28px_rgba(0,0,0,0.4)] sm:-left-2.5 sm:-right-2.5 sm:-top-3.5 sm:bottom-1 sm:rounded-[30px] md:-left-3 md:-right-3 md:-top-4 md:bottom-1 md:rounded-[32px]"
          aria-hidden
        />
        <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-[6px] border-cream shadow-[0_14px_36px_rgba(0,0,0,0.45)] sm:border-[7px]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 192px"
          />
        </div>
      </div>
      <h4 className="mt-5 font-heading text-lg font-black uppercase tracking-wide text-cream sm:text-xl md:text-2xl">
        {name}
      </h4>
      <span className="mt-2.5 rounded-full border border-cream/70 bg-dark-yellow px-3.5 py-0.5 font-body text-sm font-bold text-cream">
        {price}
      </span>
    </div>
  );
}
