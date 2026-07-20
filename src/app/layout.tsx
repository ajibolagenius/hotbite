import type { Metadata } from "next";
import { Londrina_Solid, Andika } from "next/font/google";
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
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
