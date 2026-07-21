import type { Metadata } from "next";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";
import { PhraseTicker } from "@/components/ticker/PhraseTicker";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Hotbite",
  description: "How Hotbite collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyHero version="1.0" updatedOn="18.05.2026" />
      <PhraseTicker />
      <PrivacyContent />
      <PhraseTicker />
      <Footer />
    </main>
  );
}
