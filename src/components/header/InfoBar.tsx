import { Emoji } from "@/components/emoji";

interface InfoBarProps {
  bgClass: string;
  textClass: string;
}

function InfoBarContent({ textClass }: { textClass: string }) {
  return (
    <div className={`flex shrink-0 items-center gap-2 whitespace-nowrap font-body text-sm font-medium ${textClass}`}>
      <span>18 Urban Lane, Chicago</span>
      <Emoji name="motor-scooter" size={18} alt="" />
      <span>Open Daily – 10AM to 11PM</span>
      <Emoji name="takeout-box" size={18} alt="" />
      <span>Pickup &amp; Delivery Available</span>
    </div>
  );
}

export function InfoBar({ bgClass, textClass }: InfoBarProps) {
  return (
    <div className={`w-full overflow-hidden py-2 transition-colors duration-700 ${bgClass}`}>
      <div className="hidden items-center justify-center gap-2 md:flex">
        <InfoBarContent textClass={textClass} />
      </div>
      <div className="flex w-max animate-marquee items-center gap-12 md:hidden">
        <InfoBarContent textClass={textClass} />
        <InfoBarContent textClass={textClass} />
      </div>
    </div>
  );
}
