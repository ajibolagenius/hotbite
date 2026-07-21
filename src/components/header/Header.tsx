"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/Button";
import { getHeaderScrollOffset } from "@/lib/scroll";
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
  contactBgClass: string;
  contactTextClass: string;
}

export function Header({
  infoBarBgClass,
  infoBarTextClass,
  contactBgClass,
  contactTextClass,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRowRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis(({ scroll }) => {
    setIsScrolled(scroll > 60);
  });
  const pathname = usePathname();
  const isHome = pathname === "/";

  const resolveHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!isHome) {
      setIsMenuOpen(false);
      return;
    }
    event.preventDefault();
    lenis?.scrollTo(href, { offset: -getHeaderScrollOffset() });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 w-full shrink-0 transition-[background-color,box-shadow] duration-300 ${
        isScrolled ? "bg-dark-yellow/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div
        className={`overflow-hidden transition-[grid-template-rows] duration-300 ease-out grid ${
          isScrolled ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className="min-h-0">
          <InfoBar bgClass={infoBarBgClass} textClass={infoBarTextClass} />
        </div>
      </div>

      <div
        ref={navRowRef}
        data-header-offset
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 sm:px-10 sm:py-5"
      >
        <a href="/" aria-label="Hotbite home">
          <Logo />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full bg-white/10 px-1.5 py-1.5 md:flex lg:gap-1 lg:px-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              onClick={(event) => handleNavClick(event, link.href)}
              className="rounded-full px-3 py-2 font-body text-sm font-bold text-cream transition hover:bg-white/10 lg:px-4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={resolveHref("#contact")}
            variant="accent"
            accentBgClass={contactBgClass}
            accentTextClass={contactTextClass}
            onClick={(event) => handleNavClick(event, "#contact")}
          >
            Contact Us
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 bg-transparent text-cream transition hover:bg-white/10 md:hidden"
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
                href={resolveHref(link.href)}
                onClick={(event) => handleNavClick(event, link.href)}
                className="w-full rounded-full px-4 py-3 text-center font-body text-base font-bold text-cream transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ButtonLink
            href={resolveHref("#contact")}
            variant="accent"
            accentBgClass={contactBgClass}
            accentTextClass={contactTextClass}
            onClick={(event) => handleNavClick(event, "#contact")}
            className="mt-2 w-full"
          >
            Contact Us
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
