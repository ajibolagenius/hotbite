"use client";

import type { JSX, SVGProps } from "react";
import { useLenis } from "lenis/react";
import { Logo } from "@/components/logo";
import { getHeaderScrollOffset } from "@/lib/scroll";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Delivery", href: "#delivery" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks: {
  label: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}[] = [
  { label: "Facebook", href: "https://www.facebook.com", icon: FacebookIcon },
  { label: "X", href: "https://www.x.com", icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com", icon: InstagramIcon },
];

export function Footer() {
  const lenis = useLenis();

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    lenis?.scrollTo(href, { offset: -getHeaderScrollOffset() });
  };

  const handleBackToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    lenis?.scrollTo(0);
  };

  return (
    <footer className="relative overflow-hidden bg-dark-yellow pt-16 sm:pt-20">
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-4 pb-14 text-center sm:px-8 md:px-10">
        <a href="#" onClick={handleBackToTop} aria-label="Back to top">
          <Logo className="h-7 w-auto sm:h-8" />
        </a>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:mt-10 sm:gap-x-8">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="font-body text-sm font-bold text-cream transition hover:text-yellow sm:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-5 flex items-center justify-center gap-6 sm:mt-6">
          <a
            href="/privacy-policy"
            className="font-body text-sm text-cream/50 transition hover:text-cream sm:text-base"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            onClick={handleBackToTop}
            className="font-body text-sm text-cream/50 transition hover:text-cream sm:text-base"
          >
            Back to Top
          </a>
        </div>

        <div className="mt-7 flex items-center justify-center gap-5 sm:mt-8">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-cream/60 transition hover:text-cream"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none translate-y-[35%] select-none whitespace-nowrap text-center font-heading text-[26vw] font-black uppercase leading-none tracking-tight text-cream/[0.04] sm:text-[22vw]"
      >
        Hotbite
      </p>
    </footer>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.642l.358-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
