import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Emoji, type EmojiName } from "@/components/emoji";
import order1 from "@/assets/order/order-1.png";
import order2 from "@/assets/order/order-2.png";
import order3 from "@/assets/order/order-3.png";

const floatingIcons: {
  name: EmojiName;
  className: string;
  emojiClassName: string;
}[] = [
  {
    name: "takeout-box",
    className:
      "left-[78%] top-[8%] h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16",
    emojiClassName: "h-6 w-6 sm:h-8 sm:w-8 lg:h-9 lg:w-9",
  },
  {
    name: "face-savoring-food",
    className:
      "left-[12%] top-[38%] h-12 w-12 sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]",
    emojiClassName: "h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10",
  },
  {
    name: "purple-heart",
    className:
      "left-[72%] top-[58%] h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16",
    emojiClassName: "h-6 w-6 sm:h-8 sm:w-8 lg:h-9 lg:w-9",
  },
];

export function Order() {
  return (
    <section id="delivery" className="bg-cream px-4 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 xl:gap-16">
        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          <h2 className="font-heading text-6xl font-black uppercase leading-[0.9] tracking-[-0.02em] text-dark-yellow sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[128px]">
            Order
            <br />
            Bold
            <br />
            Street
            <br />
            Flavor
          </h2>

          {floatingIcons.map((icon) => (
            <span
              key={icon.name}
              className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-yellow bg-dark-yellow shadow-lg ${icon.className}`}
            >
              <Emoji name={icon.name} size={96} alt="" className={icon.emojiClassName} />
            </span>
          ))}
        </div>

        <div className="flex flex-col">
          <p className="max-w-md font-body text-base leading-relaxed text-dark-yellow sm:text-lg">
            Skip the wait and order Hotbite for fast delivery, fresh ingredients, and bold
            flavor packed into every single bite you take.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <ButtonLink
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              className="px-6 py-3 sm:px-7 sm:py-3.5"
            >
              Order on DoorDash
            </ButtonLink>
            <ButtonLink
              href="https://www.ubereats.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              accentBgClass="bg-dark-yellow"
              accentTextClass="text-yellow"
              className="px-6 py-3 sm:px-7 sm:py-3.5"
            >
              Order on Uber Eats
            </ButtonLink>
          </div>

          <OrderCollage />
        </div>
      </div>
    </section>
  );
}

function OrderCollage() {
  return (
    <div className="relative mt-12 h-[280px] w-full max-w-lg sm:mt-14 sm:h-[340px] lg:h-[380px]">
      {/* Friends sharing a meal — largest, tipped left */}
      <div className="absolute left-0 top-[8%] z-10 h-[70%] w-[58%] -rotate-[6deg] sm:w-[55%]">
        <Image
          src={order1}
          alt="Friends sharing pizza and snacks together"
          fill
          className="object-contain drop-shadow-xl"
          sizes="(max-width: 640px) 55vw, 320px"
        />
      </div>

      {/* Pizza slice close-up — top right */}
      <div className="absolute right-[2%] top-0 z-20 h-[48%] w-[42%] rotate-[8deg] sm:right-[4%] sm:w-[40%]">
        <Image
          src={order3}
          alt="Hands holding a loaded slice of pizza"
          fill
          className="object-contain drop-shadow-xl"
          sizes="(max-width: 640px) 40vw, 200px"
        />
      </div>

      {/* Woman eating by graffiti wall — bottom right */}
      <div className="absolute bottom-0 right-[6%] z-30 h-[58%] w-[50%] rotate-[4deg] sm:right-[8%] sm:w-[48%]">
        <Image
          src={order2}
          alt="A woman enjoying a wrap in front of a graffiti wall"
          fill
          className="object-contain drop-shadow-xl"
          sizes="(max-width: 640px) 48vw, 280px"
        />
      </div>
    </div>
  );
}
