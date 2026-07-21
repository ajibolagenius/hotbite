import { Header } from "@/components/header/Header";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export function LicensesHero() {
  return (
    <section className="relative overflow-hidden bg-dark-yellow">
      <GrainOverlay />

      <Header
        infoBarBgClass="bg-yellow"
        infoBarTextClass="text-dark-yellow"
        contactBgClass="bg-yellow"
        contactTextClass="text-dark-yellow"
      />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-4 pb-16 pt-40 text-center sm:px-8 sm:pb-20 sm:pt-44 md:px-10 md:pb-24 md:pt-48">
        <h1 className="font-heading text-6xl font-black uppercase leading-[0.9] tracking-[-0.02em] text-yellow drop-shadow-[0_4px_0_rgba(64,21,0,0.45)] sm:text-7xl md:text-8xl lg:text-[110px]">
          Licenses
        </h1>
        <p className="mt-5 max-w-xl font-body text-base text-cream/90 sm:mt-6 sm:text-lg md:max-w-2xl">
          All graphical assets in this template are licensed for personal and commercial use. If
          you&apos;d like to use a specific asset, please check the license below.
        </p>
      </div>
    </section>
  );
}
