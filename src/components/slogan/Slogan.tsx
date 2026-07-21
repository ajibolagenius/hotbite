import { Emoji, type EmojiName } from "@/components/emoji";

const bubbles: {
  name: EmojiName;
  className: string;
  emojiClassName: string;
}[] = [
  {
    name: "face-savoring-food",
    className: "left-[31%] top-[41%] h-9 w-9 sm:h-12 sm:w-12 lg:h-14 lg:w-14",
    emojiClassName: "h-5 w-5 sm:h-7 sm:w-7 lg:h-8 lg:w-8",
  },
  {
    name: "star",
    className: "left-[70%] top-[36%] h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20",
    emojiClassName: "h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12",
  },
  {
    name: "heart-on-fire",
    className: "left-[20%] top-[62%] h-11 w-11 sm:h-14 sm:w-14 lg:h-[68px] lg:w-[68px]",
    emojiClassName: "h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10",
  },
  {
    name: "poultry-leg",
    className: "left-[90%] top-[80%] h-10 w-10 sm:h-13 sm:w-13 lg:h-16 lg:w-16",
    emojiClassName: "h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9",
  },
];

export function Slogan() {
  return (
    <section className="bg-dark-yellow px-4 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-36 md:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <div className="relative inline-block">
          <h2 className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-yellow sm:text-7xl lg:text-8xl xl:text-[110px]">
            Flavor That
            <br />
            Speaks Loud
          </h2>

          {bubbles.map((bubble) => (
            <span
              key={bubble.name}
              className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-yellow bg-dark-yellow shadow-lg ${bubble.className}`}
            >
              <Emoji name={bubble.name} size={96} alt="" className={bubble.emojiClassName} />
            </span>
          ))}
        </div>

        <p className="mt-6 font-body text-base text-cream/80 sm:mt-8 sm:text-lg">
          Bold street flavors served fresh daily.
        </p>
      </div>
    </section>
  );
}
