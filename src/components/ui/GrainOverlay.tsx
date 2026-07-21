import grain from "@/assets/textures/grain.png";

interface GrainOverlayProps {
  /** Opacity of the grain layer. Default matches the hero treatment. */
  opacity?: number;
  className?: string;
}

/** Full-bleed paper/noise texture for dark brand sections. */
export function GrainOverlay({ opacity = 0.35, className = "" }: GrainOverlayProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 mix-blend-overlay ${className}`}
      style={{
        opacity,
        backgroundImage: `url(${grain.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
      }}
      aria-hidden
    />
  );
}
