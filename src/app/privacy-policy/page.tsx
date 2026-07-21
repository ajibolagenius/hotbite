import type { Metadata } from "next";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";
import { PhraseTicker } from "@/components/ticker/PhraseTicker";
import { Footer } from "@/components/footer/Footer";

const title = "Privacy Policy — Hotbite";
const description = "How Hotbite collects, uses, and protects your personal information.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/privacy-policy",
    siteName: "Hotbite",
    images: [
      { url: "/og/privacy-policy.png", width: 1200, height: 630, alt: title },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/privacy-policy.png"],
  },
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
