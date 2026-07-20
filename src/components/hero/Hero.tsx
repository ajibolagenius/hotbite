"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/header/Header";
import { Emoji } from "@/components/emoji";
import { Button } from "@/components/ui/Button";
import { heroSlides } from "./hero-slides";

const arrowButtonClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-dark-yellow transition hover:bg-white sm:h-12 sm:w-12";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = heroSlides[activeIndex];

  const goToPrev = () =>
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  const goToNext = () => setActiveIndex((current) => (current + 1) % heroSlides.length);

  return (
    <section className={`relative overflow-hidden transition-colors duration-700 ${slide.bgClass}`}>
      <Header infoBarBgClass={slide.accentBgClass} infoBarTextClass={slide.accentDarkTextClass} />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 pb-16 pt-6 sm:px-10 md:pb-24 md:pt-10">
        {/* Desktop / tablet arrows, pinned to the section edges */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous flavor"
          className={`absolute left-0 top-[52%] z-20 hidden -translate-y-1/2 md:flex ${arrowButtonClass}`}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next flavor"
          className={`absolute right-0 top-[52%] z-20 hidden -translate-y-1/2 md:flex ${arrowButtonClass}`}
        >
          <ChevronRight size={22} />
        </button>

        {/* Desktop / tablet: headline with the food image and tags overlapping it */}
        <div className="relative mt-4 hidden w-full max-w-[1180px] md:block">
          <div className="text-center leading-[0.82]">
            <h1
              className={`font-heading text-[13vw] font-normal uppercase tracking-tight transition-colors duration-700 lg:text-[7.2vw] xl:text-[104px] ${slide.accentTextClass}`}
            >
              Wrapped
            </h1>
            <h1
              className={`font-heading text-[13vw] font-normal uppercase tracking-tight transition-colors duration-700 lg:text-[7.2vw] xl:text-[104px] ${slide.accentTextClass}`}
            >
              In Flavor
            </h1>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[42%] max-w-[480px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              className="h-auto w-full drop-shadow-2xl"
              preload={activeIndex === 0}
            />
          </div>

          <FlavorTag
            label={slide.tags[0]}
            textClass={slide.accentTextClass}
            className="left-[28%] top-[6%]"
          />
          <FlavorTag
            label={slide.tags[1]}
            textClass={slide.accentTextClass}
            className="left-[15%] top-[19%]"
          />
          <FlavorTag
            label={slide.tags[2]}
            textClass={slide.accentTextClass}
            className="left-[21%] top-[33%]"
          />

          <EmojiBubble
            name={slide.emojis[0]}
            size={30}
            bgClass={slide.bgClass}
            className="right-[16%] top-[70%] h-10 w-10"
          />
          <EmojiBubble
            name={slide.emojis[1]}
            size={40}
            bgClass={slide.bgClass}
            className="right-[21%] top-[85%] h-[4.5rem] w-[4.5rem]"
          />
        </div>

        {/* Mobile: image sits above the headline, single tag + emoji */}
        <div className="flex w-full flex-col items-center md:hidden">
          <div className="relative w-full max-w-[280px]">
            <Image src={slide.image} alt={slide.imageAlt} className="h-auto w-full drop-shadow-2xl" preload />
          </div>

          <div className="relative mt-2 w-full text-center leading-[0.9]">
            <h1
              className={`font-heading text-[15vw] font-normal uppercase tracking-tight transition-colors duration-700 ${slide.accentTextClass}`}
            >
              Wrapped
            </h1>
            <h1
              className={`font-heading text-[15vw] font-normal uppercase tracking-tight transition-colors duration-700 ${slide.accentTextClass}`}
            >
              In Flavor
            </h1>

            <FlavorTag
              label={slide.tags[1]}
              textClass={slide.accentTextClass}
              className="left-[8%] top-[2%] scale-90"
            />
            <EmojiBubble
              name={slide.emojis[0]}
              size={26}
              bgClass={slide.bgClass}
              className="right-[10%] top-[52%] h-9 w-9"
            />
          </div>
        </div>

        <p className="mt-6 max-w-md text-center font-body text-base text-cream/90 sm:text-lg md:mt-8">
          Crispy, juicy street food made the right way.
        </p>

        <div className="mt-6 flex items-center gap-3 md:mt-8">
          <Button
            variant="accent"
            accentBgClass={slide.accentBgClass}
            accentTextClass={slide.accentDarkTextClass}
          >
            View Menu
          </Button>
          <Button variant="cream">Find Us</Button>
        </div>

        {/* Mobile arrows sit below the CTAs instead of pinned to the edges */}
        <div className="mt-8 flex items-center gap-4 md:hidden">
          <button type="button" onClick={goToPrev} aria-label="Previous flavor" className={arrowButtonClass}>
            <ChevronLeft size={20} />
          </button>
          <button type="button" onClick={goToNext} aria-label="Next flavor" className={arrowButtonClass}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function FlavorTag({
  label,
  textClass,
  className,
}: {
  label: string;
  textClass: string;
  className?: string;
}) {
  return (
    <span
      className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 -rotate-6 whitespace-nowrap rounded-full border-2 px-4 py-1.5 font-body text-sm font-bold transition-colors duration-700 sm:text-base ${textClass} ${className ?? ""}`}
      style={{ borderColor: "currentColor" }}
    >
      {label}
    </span>
  );
}

function EmojiBubble({
  name,
  size,
  bgClass,
  className,
}: {
  name: Parameters<typeof Emoji>[0]["name"];
  size: number;
  bgClass: string;
  className?: string;
}) {
  return (
    <span
      className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ring-4 ring-black/10 transition-colors duration-700 ${bgClass} ${className ?? ""}`}
    >
      <Emoji name={name} size={size} alt="" />
    </span>
  );
}
