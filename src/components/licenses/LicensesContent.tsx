import type { LucideIcon } from "lucide-react";
import { FileText, Heart, Image, LayoutGrid, Pencil, Star } from "lucide-react";

interface LicenseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const licenses: LicenseItem[] = [
  {
    title: "Images",
    description:
      "All images are sourced from Unsplash and free for personal and commercial use.",
    icon: Image,
  },
  {
    title: "Icons",
    description:
      "All icons are sourced from icons.download and free for personal and commercial use.",
    icon: LayoutGrid,
  },
  {
    title: "Emojis",
    description:
      "All emojis are sourced from Emoji Mega Pack and free for personal and commercial use.",
    icon: Star,
  },
  {
    title: "Textures",
    description:
      "All textures are sourced from Magnific and free for personal and commercial use.",
    icon: Heart,
  },
  {
    title: "Fonts",
    description:
      "Londrina Solid and Andika are from Google Fonts and free for personal and commercial use.",
    icon: Pencil,
  },
  {
    title: "Content",
    description: "Content on this site was generated using ChatGPT for writing and refinement.",
    icon: FileText,
  },
];

export function LicensesContent() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center font-heading text-4xl font-black uppercase leading-[0.9] tracking-[-0.02em] text-dark-yellow sm:text-5xl md:text-6xl lg:text-7xl">
          Creative
          <br />
          Resources
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 md:mt-16 md:gap-6 lg:grid-cols-3">
          {licenses.map((item) => (
            <LicenseCard key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function LicenseCard({ title, description, icon: Icon }: LicenseItem) {
  return (
    <li className="rounded-[2rem] bg-menu-cream px-7 py-8 sm:rounded-[2.25rem] sm:px-8 sm:py-9">
      <Icon className="h-6 w-6 text-yellow sm:h-7 sm:w-7" strokeWidth={2.25} aria-hidden />
      <h3 className="mt-5 font-heading text-xl font-black uppercase tracking-wide text-dark-yellow sm:mt-6 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-dark-yellow/90 sm:text-base">
        {description}
      </p>
    </li>
  );
}
