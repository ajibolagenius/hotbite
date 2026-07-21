import { Fragment } from "react";
import { Emoji, type EmojiName } from "@/components/emoji";

interface TickerPhrase {
  label: string;
  emoji: EmojiName;
}

const rows: { phrases: TickerPhrase[]; duration: string; reverse?: boolean }[] = [
  {
    phrases: [
      { label: "Fast Delivery", emoji: "motor-scooter" },
      { label: "Fresh Daily", emoji: "fire" },
      { label: "Top Rated", emoji: "star" },
    ],
    duration: "34s",
  },
  {
    phrases: [
      { label: "Bold Flavor", emoji: "hamburger" },
      { label: "Pickup Ready", emoji: "takeout-box" },
      { label: "Made To Order", emoji: "burrito" },
    ],
    duration: "42s",
    reverse: true,
  },
  {
    phrases: [
      { label: "Hot Bites", emoji: "french-fries" },
      { label: "Street Style", emoji: "taco" },
      { label: "Served Fresh", emoji: "pizza" },
    ],
    duration: "38s",
  },
];

export function Ticker() {
  return (
    <section aria-label="Hotbite highlights" className="overflow-hidden bg-dark-yellow py-14 sm:py-20">
      <div className="flex flex-col gap-4 sm:gap-6">
        {rows.map((row) => (
          <TickerRow key={row.phrases[0].label} {...row} />
        ))}
      </div>
    </section>
  );
}

function TickerRow({
  phrases,
  duration,
  reverse,
}: {
  phrases: TickerPhrase[];
  duration: string;
  reverse?: boolean;
}) {
  // Each half repeats the phrases twice so it always outspans the viewport;
  // the marquee keyframe shifts by -50% for a seamless loop.
  const sequence = [...phrases, ...phrases];

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max items-center animate-marquee-ticker"
        style={{
          animationDuration: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
          >
            {sequence.map((phrase, index) => (
              <Fragment key={`${phrase.label}-${index}`}>
                <span className="whitespace-nowrap font-heading text-6xl font-black uppercase leading-none text-yellow sm:text-7xl lg:text-8xl">
                  {phrase.label}
                </span>
                <Emoji
                  name={phrase.emoji}
                  size={128}
                  alt=""
                  className="h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
