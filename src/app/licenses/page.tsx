import type { Metadata } from "next";
import { LicensesHero } from "@/components/licenses/LicensesHero";
import { LicensesContent } from "@/components/licenses/LicensesContent";
import { PhraseTicker } from "@/components/ticker/PhraseTicker";
import { Footer } from "@/components/footer/Footer";

const title = "Licenses — Hotbite";
const description =
  "Attribution and credits for images, icons, emojis, textures, fonts, and content used on Hotbite.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/licenses",
    siteName: "Hotbite",
    images: [{ url: "/og/licenses.png", width: 1200, height: 630, alt: title }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/licenses.png"],
  },
};

export default function LicensesPage() {
  return (
    <main>
      <LicensesHero />
      <PhraseTicker />
      <LicensesContent />
      <PhraseTicker />
      <Footer />
    </main>
  );
}
