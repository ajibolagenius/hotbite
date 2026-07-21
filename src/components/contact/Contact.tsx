import Image from "next/image";
import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import contactPhoto from "@/assets/contact/contact.png";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-cream px-4 pb-36 pt-20 sm:px-8 sm:pb-44 sm:pt-24 md:px-10 md:pb-48"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16 xl:gap-24">
        <div className="relative order-2 mx-auto aspect-square w-full max-w-[420px] md:order-1 md:mx-0 md:max-w-[480px]">
          {/* Orange rounded square behind the circular photo — matches UI tilt */}
          <div
            className="absolute inset-[8%] rotate-[14deg] rounded-[28px] bg-yellow sm:rounded-[36px]"
            aria-hidden
          />
          <div className="absolute inset-[4%] overflow-hidden rounded-full border-[3px] border-dark-yellow shadow-2xl">
            <Image
              src={contactPhoto}
              alt="Friends ordering at a street food stall"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-dark-yellow sm:text-6xl lg:text-7xl xl:text-8xl">
            Let&apos;s
            <br />
            Connect
          </h2>

          <div className="mt-10 space-y-8 sm:mt-12">
            <ContactBlock title="Find Us">
              <ContactLine icon={MapPin} text="18 Urban Lane, Chicago" />
              <ContactLine icon={Clock} text="Open Daily – 10AM to 11PM" />
            </ContactBlock>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
              <ContactBlock title="Email Us">
                <ContactLine
                  icon={Mail}
                  text="hello@hotbite.com"
                  href="mailto:hello@hotbite.com"
                />
              </ContactBlock>

              <ContactBlock title="Call Us">
                <ContactLine
                  icon={Phone}
                  text="(312) 555-0148"
                  href="tel:+13125550148"
                />
              </ContactBlock>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="font-heading text-xl font-black uppercase tracking-wide text-dark-yellow sm:text-2xl">
        {title}
      </h3>
      <div className="mt-3 space-y-2.5">{children}</div>
    </div>
  );
}

function ContactLine({
  icon: Icon,
  text,
  href,
}: {
  icon: typeof MapPin;
  text: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon size={18} className="mt-0.5 shrink-0 text-dark-yellow" aria-hidden />
      <span>{text}</span>
    </>
  );

  const className =
    "flex items-start gap-2.5 font-body text-base text-dark-yellow/90 sm:text-lg";

  if (href) {
    return (
      <a href={href} className={`${className} transition hover:text-yellow`}>
        {content}
      </a>
    );
  }

  return <p className={className}>{content}</p>;
}
