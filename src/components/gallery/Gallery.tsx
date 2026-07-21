import Image, { type StaticImageData } from "next/image";
import { SectionEdge } from "@/components/ui/SectionEdge";
import { SmoothScrollLink } from "@/components/ui/SmoothScrollLink";
import { Emoji } from "@/components/emoji";
import gallery1 from "@/assets/gallery/gallery-1.png";
import gallery2 from "@/assets/gallery/gallery-2.png";
import gallery3 from "@/assets/gallery/gallery-3.png";
import gallery4 from "@/assets/gallery/gallery-4.png";
import gallery5 from "@/assets/gallery/gallery-5.png";
import gallery6 from "@/assets/gallery/gallery-6.png";
import gallery7 from "@/assets/gallery/gallery-7.png";

interface PhotoCard {
  image: StaticImageData;
  alt: string;
  /** Tailwind rotate class — photos tilt; CTA stays straight */
  rotation: string;
  /** Vertical offset for the alternating height rhythm */
  offset: string;
  /** Card size */
  size: string;
  /** Stacking order */
  z: string;
}

/**
 * Static collage (not a ticker). Photos alternate tilt + vertical position
 * so they overlap like scattered prints; only the center CTA is upright.
 */
const collage: PhotoCard[] = [
  {
    image: gallery2,
    alt: "Friends sharing takeout boxes of street food and drinks",
    rotation: "-rotate-[7deg]",
    offset: "-translate-y-6 sm:-translate-y-10",
    size: "h-52 w-40 sm:h-72 sm:w-56 lg:h-[380px] lg:w-[280px]",
    z: "z-10",
  },
  {
    image: gallery1,
    alt: "A stacked fried chicken burger with a runny egg",
    rotation: "rotate-[5deg]",
    offset: "translate-y-8 sm:translate-y-14",
    size: "h-56 w-44 sm:h-80 sm:w-60 lg:h-[420px] lg:w-[300px]",
    z: "z-20",
  },
  {
    image: gallery3,
    alt: "Hands grabbing pizza slices and fried chicken at a table",
    rotation: "-rotate-[4deg]",
    offset: "-translate-y-4 sm:-translate-y-8",
    size: "h-52 w-40 sm:h-72 sm:w-56 lg:h-[360px] lg:w-[260px]",
    z: "z-30",
  },
  {
    image: gallery5,
    alt: "A loaded taco platter topped with fresh garnish",
    rotation: "rotate-[6deg]",
    offset: "translate-y-10 sm:translate-y-16",
    size: "h-56 w-44 sm:h-80 sm:w-60 lg:h-[400px] lg:w-[290px]",
    z: "z-20",
  },
  {
    image: gallery4,
    alt: "A table spread of street food baskets and cold drinks",
    rotation: "-rotate-[5deg]",
    offset: "-translate-y-8 sm:-translate-y-12",
    size: "h-52 w-40 sm:h-72 sm:w-56 lg:h-[380px] lg:w-[280px]",
    z: "z-10",
  },
];

/** Extra photos tucked for large screens only — keeps the cluster denser */
const sidePhotos: PhotoCard[] = [
  {
    image: gallery6,
    alt: "Golden fries served with dipping sauces",
    rotation: "rotate-[3deg]",
    offset: "translate-y-4",
    size: "h-[340px] w-[240px]",
    z: "z-[5]",
  },
  {
    image: gallery7,
    alt: "A grilled sandwich pressed with melted cheese",
    rotation: "-rotate-[6deg]",
    offset: "-translate-y-6",
    size: "h-[360px] w-[250px]",
    z: "z-[5]",
  },
];

export function Gallery() {
  const left = collage.slice(0, 2);
  const right = collage.slice(2);

  return (
    <section id="gallery" className="overflow-hidden bg-cream pt-16 sm:pt-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-10">
        <h2 className="text-center font-heading text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-dark-yellow sm:text-6xl lg:text-7xl">
          Hotbite
          <br />
          In Action
        </h2>
        <p className="mt-5 text-center font-body text-base text-dark-yellow/80 sm:text-lg">
          Real food. Real moments.
        </p>
      </div>

      {/* Static overlapping cluster — no horizontal scroll / marquee */}
      <div className="relative mx-auto mt-10 flex max-w-[1440px] items-center justify-center px-2 pb-8 pt-16 sm:mt-14 sm:pb-10 sm:pt-20 md:px-6">
        {/* Far-left photo (desktop only) */}
        <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 xl:block">
          <PhotoFrame photo={sidePhotos[0]} className="-ml-6" />
        </div>

        <div className="flex items-center justify-center">
          {left.map((photo, index) => (
            <PhotoFrame
              key={photo.alt}
              photo={photo}
              className={index === 0 ? "" : "-ml-10 sm:-ml-16 lg:-ml-20"}
            />
          ))}

          <div className="relative z-40 -mx-6 sm:-mx-10 lg:-mx-14">
            <CtaCard />
          </div>

          {right.map((photo, index) => (
            <PhotoFrame
              key={photo.alt}
              photo={photo}
              className={index === 0 ? "-ml-10 sm:-ml-16 lg:-ml-20" : "-ml-10 sm:-ml-16 lg:-ml-20"}
            />
          ))}
        </div>

        {/* Far-right photo (desktop only) */}
        <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 xl:block">
          <PhotoFrame photo={sidePhotos[1]} className="-mr-6" />
        </div>
      </div>

      {/* Generous cream gap before the torn edge into Benefits */}
      <div className="mt-24 text-dark-yellow sm:mt-32 md:mt-36">
        <SectionEdge side="bottom" />
      </div>
    </section>
  );
}

function PhotoFrame({
  photo,
  className = "",
}: {
  photo: PhotoCard;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[22px] border-4 border-dark-yellow shadow-lg sm:rounded-[28px] ${photo.size} ${photo.rotation} ${photo.offset} ${photo.z} ${className}`}
    >
      <Image
        src={photo.image}
        alt={photo.alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 176px, (max-width: 1024px) 240px, 300px"
      />
    </div>
  );
}

function CtaCard() {
  return (
    <div className="flex h-64 w-48 shrink-0 flex-col items-center justify-center gap-4 rounded-[22px] bg-yellow px-5 text-center shadow-xl sm:h-80 sm:w-64 sm:gap-5 sm:rounded-[28px] sm:px-8 lg:h-[420px] lg:w-[300px] lg:px-10">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-dark-yellow sm:h-14 sm:w-14 lg:h-16 lg:w-16">
        <Emoji name="raising-hands" size={64} alt="" className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9" />
      </span>
      <h3 className="font-heading text-xl font-black uppercase leading-[0.95] tracking-wide text-dark-yellow sm:text-2xl lg:text-3xl">
        Food Tastes
        <br />
        Better Together
      </h3>
      <p className="font-body text-xs text-dark-yellow sm:text-sm lg:text-base">
        Bring your crew, order combos, and get free drinks included.
      </p>
      <SmoothScrollLink href="#contact" variant="dark" className="px-6 py-2.5 sm:px-7 sm:py-3">
        Find Us
      </SmoothScrollLink>
    </div>
  );
}
