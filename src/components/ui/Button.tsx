import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "accent" | "cream" | "dark";

interface BaseProps {
  variant?: Variant;
  accentBgClass?: string;
  accentTextClass?: string;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  accent: "",
  cream: "bg-cream text-dark-yellow hover:bg-white",
  dark: "bg-dark-yellow text-cream hover:bg-dark-yellow/90",
};

function classes({ variant = "accent", accentBgClass, accentTextClass, className }: BaseProps) {
  const variantClass =
    variant === "accent"
      ? `${accentBgClass ?? "bg-yellow"} ${accentTextClass ?? "text-dark-yellow"} hover:opacity-90`
      : variantClasses[variant];

  return `inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-3 font-body text-sm font-bold transition sm:text-base ${variantClass} ${className ?? ""}`;
}

type ButtonProps = BaseProps & ComponentPropsWithoutRef<"button">;

export function Button({ variant, accentBgClass, accentTextClass, className, ...props }: ButtonProps) {
  return (
    <button className={classes({ variant, accentBgClass, accentTextClass, className })} {...props} />
  );
}

type ButtonLinkProps = BaseProps & ComponentPropsWithoutRef<typeof Link>;

export function ButtonLink({ variant, accentBgClass, accentTextClass, className, ...props }: ButtonLinkProps) {
  return (
    <Link className={classes({ variant, accentBgClass, accentTextClass, className })} {...props} />
  );
}
