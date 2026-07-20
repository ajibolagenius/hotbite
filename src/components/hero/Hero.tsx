"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/header/Header";
import { Emoji } from "@/components/emoji";
import { Button } from "@/components/ui/Button";
import { SectionEdge } from "@/components/ui/SectionEdge";
import grain from "@/assets/textures/grain.png";
import { heroSlides } from "./hero-slides";

const arrowButtonClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream text-dark-yellow transition hover:bg-white sm:h-14 sm:w-14 sm:rounded-2xl lg:h-16 lg:w-16";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = heroSlides[activeIndex];

  const goToPrev = () =>
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  const goToNext = () => setActiveIndex((current) => (current + 1) % heroSlides.length);

  return (
    <section
      className={`relative flex min-h-screen flex-col overflow-x-clip transition-colors duration-700 ${slide.bgClass}`}
      style={{ minHeight: "100svh" }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url(${grain.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
        aria-hidden
      />

      <Header
        infoBarBgClass={slide.accentBgClass}
        infoBarTextClass={slide.accentDarkTextClass}
        contactBgClass={slide.accentBgClass}
        contactTextClass={slide.accentDarkTextClass}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 sm:px-8 md:px-10">
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous flavor"
          className={`absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 md:flex lg:left-4 xl:left-10 ${arrowButtonClass}`}
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next flavor"
          className={`absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 md:flex lg:right-4 xl:right-10 ${arrowButtonClass}`}
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>

        <div className="flex flex-1 flex-col items-center justify-center pb-8 pt-2 md:pb-6 md:pt-0">
          {/* Desktop / tablet stage: height locks image inside the type block */}
          <div className="relative mx-auto hidden h-[410px] w-full max-w-[1280px] md:block lg:h-[440px] xl:h-[470px]">
            <div className="absolute inset-x-0 top-0 z-0 flex h-full flex-col items-center justify-center text-center leading-[0.72]">
              <div className="origin-center scale-x-[0.86]">
                <h1
                  className={`font-heading text-[172px] font-black uppercase tracking-[-0.04em] transition-colors duration-700 lg:text-[236px] xl:text-[272px] ${slide.accentTextClass}`}
                >
                  Wrapped
                </h1>
                <h1
                  className={`font-heading text-[172px] font-black uppercase tracking-[-0.04em] transition-colors duration-700 lg:text-[236px] xl:text-[272px] ${slide.accentTextClass}`}
                >
                  In Flavor
                </h1>
              </div>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-[50%] z-10 w-[320px] -translate-x-1/2 -translate-y-1/2 lg:w-[430px] xl:w-[510px]">
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                className="h-auto w-full drop-shadow-2xl"
                sizes="(max-width: 1024px) 34vw, 470px"
                priority={activeIndex === 0}
              />
            </div>

            <FlavorTag
              label={slide.tags[0]}
              textClass={slide.accentTextClass}
              bgClass={slide.bgClass}
              className="left-[35%] top-[22%] -rotate-12"
            />
            <FlavorTag
              label={slide.tags[1]}
              textClass={slide.accentTextClass}
              bgClass={slide.bgClass}
              className="left-[27%] top-[30%] -rotate-[8deg]"
            />
            <FlavorTag
              label={slide.tags[2]}
              textClass={slide.accentTextClass}
              bgClass={slide.bgClass}
              className="left-[30%] top-[40%] -rotate-6"
            />

            <EmojiBubble
              name={slide.emojis[0]}
              size={28}
              bgClass={slide.bgClass}
              ringClass={slide.ringClass}
              className="right-[27%] top-[65%] h-11 w-11"
            />
            <EmojiBubble
              name={slide.emojis[1]}
              size={38}
              bgClass={slide.bgClass}
              ringClass={slide.ringClass}
              className="right-[31%] top-[74%] h-16 w-16"
            />
          </div>

          {/* Mobile: image stacked above the headline */}
          <div className="flex w-full flex-col items-center md:hidden">
            <div className="relative w-[min(66vw,235px)]">
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                className="h-auto w-full drop-shadow-2xl"
                sizes="235px"
                priority
              />
            </div>

            <div className="relative mt-1 w-full text-center leading-[0.72]">
              <div className="origin-center scale-x-[0.73]">
                <h1
                  className={`font-heading text-[clamp(4.5rem,25vw,6rem)] font-black uppercase tracking-[-0.04em] transition-colors duration-700 ${slide.accentTextClass}`}
                >
                  Wrapped
                </h1>
                <h1
                  className={`font-heading text-[clamp(4.5rem,25vw,6rem)] font-black uppercase tracking-[-0.04em] transition-colors duration-700 ${slide.accentTextClass}`}
                >
                  In Flavor
                </h1>
              </div>

              <FlavorTag
                label={slide.tags[1]}
                textClass={slide.accentTextClass}
                bgClass={slide.bgClass}
                className="left-[8%] top-[38%] scale-75 -rotate-12"
              />
              <EmojiBubble
                name={slide.emojis[0]}
                size={22}
                bgClass={slide.bgClass}
                ringClass={slide.ringClass}
                className="right-[10%] top-[28%] h-9 w-9"
              />
            </div>
          </div>

          <p className="mt-5 max-w-md px-4 text-center font-body text-base text-cream/90 sm:text-lg md:mt-6">
            Crispy, juicy street food made the right way.
          </p>

          <div className="mt-5 flex items-center gap-3 md:mt-6">
            <Button
              variant="accent"
              accentBgClass={slide.accentBgClass}
              accentTextClass={slide.accentDarkTextClass}
              className="px-7 py-3.5"
            >
              View Menu
            </Button>
            <Button variant="cream" className="px-7 py-3.5">
              Find Us
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 md:hidden">
            <button type="button" onClick={goToPrev} aria-label="Previous flavor" className={arrowButtonClass}>
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button type="button" onClick={goToNext} aria-label="Next flavor" className={arrowButtonClass}>
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Hang the torn edge over the cream page below so valleys reveal cream */}
      <div
        className={`pointer-events-none absolute bottom-0 left-0 right-0 z-20 translate-y-[55%] transition-colors duration-700 ${slide.edgeTextClass}`}
      >
        <SectionEdge side="bottom" />
      </div>
    </section>
  );
}

function FlavorTag({
  label,
  textClass,
  bgClass,
  className,
}: {
  label: string;
  textClass: string;
  bgClass: string;
  className?: string;
}) {
  return (
    <span
      className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 px-3.5 py-1 font-body text-sm font-bold shadow-[0_0_18px_currentColor] transition-colors duration-700 sm:px-4 sm:py-1.5 sm:text-base ${bgClass} ${textClass} ${className ?? ""}`}
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
  ringClass,
  className,
}: {
  name: Parameters<typeof Emoji>[0]["name"];
  size: number;
  bgClass: string;
  ringClass: string;
  className?: string;
}) {
  return (
    <span
      className={`absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg ring-2 transition-colors duration-700 ${bgClass} ${ringClass} ${className ?? ""}`}
    >
      <Emoji name={name} size={size} alt="" />
    </span>
  );
}
