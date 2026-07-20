"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/Button";
import { InfoBar } from "./InfoBar";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Delivery", href: "#delivery" },
];

interface HeaderProps {
  infoBarBgClass: string;
  infoBarTextClass: string;
}

export function Header({ infoBarBgClass, infoBarTextClass }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full">
      <InfoBar bgClass={infoBarBgClass} textClass={infoBarTextClass} />

      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-body text-sm font-bold text-cream transition hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#contact" variant="cream" className="hidden md:inline-flex">
          Contact Us
        </ButtonLink>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream transition hover:bg-white/20 md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mx-6 mb-5 rounded-2xl bg-black/20 p-4 sm:mx-10 md:hidden">
          <nav className="flex flex-col items-center gap-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="w-full rounded-full px-4 py-3 text-center font-body text-base font-bold text-cream transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ButtonLink
            href="#contact"
            variant="accent"
            accentBgClass="bg-yellow"
            accentTextClass="text-dark-yellow"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 w-full"
          >
            Contact Us
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
