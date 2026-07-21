import { Clock, Heart, Star } from "lucide-react";
import { Emoji } from "@/components/emoji";
import { SmoothScrollLink } from "@/components/ui/SmoothScrollLink";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import {
  leftColumn,
  promo,
  rightColumnBottom,
  rightColumnTop,
  type MenuCategory,
} from "./menu-data";

export function Menu() {
  return (
    <section id="menu" className="relative bg-dark-yellow px-4 pb-20 pt-10 sm:px-8 sm:pb-28 md:px-10">
      <GrainOverlay />
      <div className="relative z-10 mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-menu-cream sm:rounded-[36px]">
        <header className="flex flex-col gap-5 bg-white/50 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10 lg:px-14">
          <h2 className="font-heading text-5xl font-black uppercase leading-none text-dark-yellow sm:text-6xl">
            Menu
          </h2>
          <ul className="space-y-1.5 font-body text-sm text-dark-yellow sm:text-base">
            <li className="flex items-center gap-2">
              <Star size={18} className="fill-yellow text-yellow" aria-hidden />
              4.9 Rating
            </li>
            <li className="flex items-center gap-2">
              <Heart size={18} className="fill-yellow text-yellow" aria-hidden />
              Loved Locally
            </li>
          </ul>
        </header>

        <div className="grid grid-cols-1 gap-x-14 gap-y-12 px-6 py-10 sm:px-10 sm:py-14 md:grid-cols-2 lg:px-14">
          <div className="space-y-12">
            {leftColumn.map((category) => (
              <Category key={category.title} category={category} />
            ))}
          </div>

          <div className="space-y-12">
            {rightColumnTop.map((category) => (
              <Category key={category.title} category={category} />
            ))}

            <PromoCard />

            {rightColumnBottom.map((category) => (
              <Category key={category.title} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Category({ category }: { category: MenuCategory }) {
  return (
    <div>
      <h3 className="font-heading text-3xl uppercase text-dark-yellow/50 sm:text-4xl">
        {category.title}
      </h3>
      <ul className="mt-5 space-y-3.5">
        {category.items.map((item) => (
          <li key={item.name} className="flex items-end gap-3">
            <span className="flex items-center gap-2 font-heading text-xl uppercase leading-none text-dark-yellow sm:text-2xl">
              {item.name}
              {item.spicy && <Emoji name="hot-pepper" size={40} alt="Spicy" className="h-5 w-5" />}
            </span>
            <span className="mb-1 flex-1 border-b-2 border-dotted border-dark-yellow/25" aria-hidden />
            <span className="rounded-full border-2 border-dark-yellow/40 bg-dark-yellow/5 px-3.5 py-0.5 font-body text-sm font-bold text-dark-yellow">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PromoCard() {
  return (
    <div className="rounded-3xl bg-yellow p-7 sm:p-8">
      <p className="flex items-center gap-2 font-body text-sm text-dark-yellow">
        <Clock size={16} aria-hidden />
        {promo.dates}
      </p>
      <h3 className="mt-4 max-w-xs font-heading text-3xl uppercase leading-[0.95] text-dark-yellow sm:text-4xl">
        {promo.title}
      </h3>
      <SmoothScrollLink href="#contact" variant="dark" className="mt-7">
        {promo.cta}
      </SmoothScrollLink>
    </div>
  );
}
