import { Header } from "@/components/header/Header";
import { ButtonLink } from "@/components/ui/Button";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export function NotFoundHero() {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden bg-dark-yellow"
      style={{ minHeight: "100svh" }}
    >
      <GrainOverlay />

      <Header
        infoBarBgClass="bg-yellow"
        infoBarTextClass="text-dark-yellow"
        contactBgClass="bg-yellow"
        contactTextClass="text-dark-yellow"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-8 md:px-10">
        <h1 className="font-heading text-6xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-yellow drop-shadow-[0_4px_0_rgba(64,21,0,0.45)] sm:text-7xl lg:text-8xl xl:text-9xl">
          Looks Like
          <br />
          You&apos;re Lost
        </h1>
        <p className="mt-6 font-body text-base text-cream/90 sm:text-lg">
          This page isn&apos;t on the menu anymore.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <ButtonLink href="/" variant="accent" className="px-7 py-3.5">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/#menu" variant="cream" className="px-7 py-3.5">
            View Menu
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
