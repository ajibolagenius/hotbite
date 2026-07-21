"use client";

import { useLenis } from "lenis/react";
import { ButtonLink } from "@/components/ui/Button";
import { getHeaderScrollOffset } from "@/lib/scroll";
import type { ComponentPropsWithoutRef } from "react";

type SmoothScrollLinkProps = ComponentPropsWithoutRef<typeof ButtonLink>;

export function SmoothScrollLink({ href, onClick, ...props }: SmoothScrollLinkProps) {
  const lenis = useLenis();

  return (
    <ButtonLink
      href={href}
      onClick={(event) => {
        if (typeof href === "string" && href.startsWith("#")) {
          event.preventDefault();
          lenis?.scrollTo(href, { offset: -getHeaderScrollOffset() });
        }
        onClick?.(event);
      }}
      {...props}
    />
  );
}
