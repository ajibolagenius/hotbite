"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
