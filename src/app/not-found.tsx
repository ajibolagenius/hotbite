import type { Metadata } from "next";
import { NotFoundHero } from "@/components/not-found/NotFoundHero";
import { PhraseTicker } from "@/components/ticker/PhraseTicker";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Page Not Found — Hotbite",
  description: "This page isn't on the menu anymore.",
};

export default function NotFound() {
  return (
    <main>
      <NotFoundHero />
      <PhraseTicker />
      <Footer />
    </main>
  );
}
