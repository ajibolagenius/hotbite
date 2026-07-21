import type { Metadata } from "next";
import { NotFoundHero } from "@/components/not-found/NotFoundHero";
import { PhraseTicker } from "@/components/ticker/PhraseTicker";
import { Footer } from "@/components/footer/Footer";

const title = "Page Not Found — Hotbite";
const description = "This page isn't on the menu anymore.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Hotbite",
    images: [{ url: "/og/404.png", width: 1200, height: 630, alt: title }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/404.png"],
  },
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
