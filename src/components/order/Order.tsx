import { ButtonLink } from "@/components/ui/Button";
import { TornPhoto } from "@/components/ui/TornPhoto";
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
      "left-[28%] top-[14%] h-9 w-9 sm:left-[26%] sm:top-[16%] sm:h-14 sm:w-14 lg:h-16 lg:w-16",
    emojiClassName: "h-5 w-5 sm:h-8 sm:w-8 lg:h-9 lg:w-9",
  },
  {
    name: "face-savoring-food",
    className:
      "left-[12%] top-[44%] h-10 w-10 sm:left-[9%] sm:top-[46%] sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]",
    emojiClassName: "h-6 w-6 sm:h-9 sm:w-9 lg:h-10 lg:w-10",
  },
  {
    name: "purple-heart",
    className:
      "left-[22%] top-[48%] h-9 w-9 sm:left-[18%] sm:top-[50%] sm:h-14 sm:w-14 lg:h-16 lg:w-16",
    emojiClassName: "h-5 w-5 sm:h-8 sm:w-8 lg:h-9 lg:w-9",
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
    <>
      {/* Mobile: simplified 2-photo stack */}
      <div className="mt-12 flex w-full max-w-lg flex-col gap-4 sm:hidden">
        <TornPhoto
          src={order1}
          alt="Friends sharing pizza and snacks together"
          className="relative h-[220px] w-full -rotate-2"
          sizes="90vw"
        />
        <TornPhoto
          src={order2}
          alt="A woman enjoying a wrap in front of a graffiti wall"
          className="relative h-[220px] w-full rotate-2"
          sizes="90vw"
        />
      </div>

      {/* Tablet/desktop: overlapping cluster */}
      <div className="relative mt-14 hidden h-[360px] w-full max-w-lg sm:block lg:h-[400px]">
        {/* Friends sharing a meal — mid-left, behind */}
        <TornPhoto
          src={order1}
          alt="Friends sharing pizza and snacks together"
          className="absolute left-0 top-[18%] z-10 h-[58%] w-[48%] -rotate-[6deg]"
          sizes="280px"
        />

        {/* Pizza slice — smaller, top center/right */}
        <TornPhoto
          src={order3}
          alt="Hands holding a loaded slice of pizza"
          className="absolute left-[42%] top-0 z-20 h-[42%] w-[36%] rotate-[7deg]"
          sizes="200px"
        />

        {/* Woman eating by graffiti wall — largest, bottom right */}
        <TornPhoto
          src={order2}
          alt="A woman enjoying a wrap in front of a graffiti wall"
          className="absolute bottom-0 right-0 z-30 h-[62%] w-[50%] rotate-[8deg]"
          sizes="300px"
        />
      </div>
    </>
  );
}
