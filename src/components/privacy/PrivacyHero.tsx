import { Header } from "@/components/header/Header";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

interface PrivacyHeroProps {
  version: string;
  updatedOn: string;
}

export function PrivacyHero({ version, updatedOn }: PrivacyHeroProps) {
  return (
    <section className="relative overflow-hidden bg-dark-yellow">
      <GrainOverlay />

      <Header
        infoBarBgClass="bg-yellow"
        infoBarTextClass="text-dark-yellow"
        contactBgClass="bg-yellow"
        contactTextClass="text-dark-yellow"
      />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-4 pb-16 pt-40 text-center sm:px-8 sm:pb-20 sm:pt-44 md:px-10 md:pt-48">
        <h1 className="font-heading text-6xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-yellow drop-shadow-[0_4px_0_rgba(64,21,0,0.45)] sm:text-7xl lg:text-8xl">
          Privacy
          <br />
          Policy
        </h1>
        <p className="mt-5 font-body text-base text-cream/90 sm:text-lg">
          Version {version} – {updatedOn}
        </p>
      </div>
    </section>
  );
}
