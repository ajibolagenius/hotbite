import type { Metadata } from "next";
import { Londrina_Solid, Andika } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const londrinaSolid = Londrina_Solid({
  variable: "--font-londrina",
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
});

const andika = Andika({
  variable: "--font-andika",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description = "Wrapped in flavor — bold street food, delivered hot.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hotbite",
  description,
  icons: {
    icon: [
      { url: "/favicon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/webclip.svg",
  },
  openGraph: {
    title: "Hotbite",
    description,
    url: "/",
    siteName: "Hotbite",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Hotbite — Wrapped in Flavor" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotbite",
    description,
    images: ["/og/home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${londrinaSolid.variable} ${andika.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
