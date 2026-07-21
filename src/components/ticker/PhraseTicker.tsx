import { Fragment } from "react";
import { Emoji, type EmojiName } from "@/components/emoji";

interface Phrase {
  label: string;
  emoji: EmojiName;
}

/** Single-line orange marquee that bookends the Order / Contact block. */
const phrases: Phrase[] = [
  { label: "City's favorite street food spot", emoji: "red-heart" },
  { label: "Loved by late-night food lovers", emoji: "hot-pepper" },
  { label: "Handmade sauces & fresh grills", emoji: "poultry-leg" },
  { label: "Cooked fresh off the grill", emoji: "motor-scooter" },
  { label: "Fast delivery across the city", emoji: "face-savoring-food" },
  { label: "Order online anytime", emoji: "french-fries" },
];

export function PhraseTicker() {
  // Duplicate so the -50% marquee loop stays seamless at any viewport width.
  const sequence = [...phrases, ...phrases];

  return (
    <section aria-label="Hotbite promos" className="overflow-hidden bg-yellow py-3.5 sm:py-4">
      <div
        className="flex w-max items-center animate-marquee-ticker"
        style={{ animationDuration: "40s" }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
          >
            {sequence.map((phrase, index) => (
              <Fragment key={`${phrase.label}-${index}`}>
                <span className="whitespace-nowrap font-body text-sm font-bold uppercase text-dark-yellow sm:text-base">
                  {phrase.label}
                </span>
                <Emoji
                  name={phrase.emoji}
                  size={48}
                  alt=""
                  className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
