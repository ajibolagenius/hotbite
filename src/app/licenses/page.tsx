import type { Metadata } from "next";
import { LicensesHero } from "@/components/licenses/LicensesHero";
import { LicensesContent } from "@/components/licenses/LicensesContent";
import { PhraseTicker } from "@/components/ticker/PhraseTicker";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Licenses — Hotbite",
  description:
    "Attribution and credits for images, icons, emojis, textures, fonts, and content used on Hotbite.",
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
