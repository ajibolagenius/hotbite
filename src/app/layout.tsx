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

export const metadata: Metadata = {
  title: "Hotbite",
  description: "Wrapped in flavor — bold street food, delivered hot.",
  icons: {
    icon: [
      { url: "/favicon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/webclip.svg",
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
