import Image, { type StaticImageData } from "next/image";
import { BadgeCheck, Star, ThumbsUp } from "lucide-react";
import { SectionEdge } from "@/components/ui/SectionEdge";
import { Emoji } from "@/components/emoji";
import avatarGrillmike from "@/assets/testimonials/avatar-grillmike.png";
import avatarAlex from "@/assets/testimonials/avatar-alex.png";
import avatarMason from "@/assets/testimonials/avatar-mason.png";
import avatarGrace from "@/assets/testimonials/avatar-grace.png";
import avatarJames from "@/assets/testimonials/avatar-james.png";

interface Review {
    username: string;
    verified?: boolean;
    avatar: StaticImageData;
    quote: string;
}

const leftReviews: Review[] = [
    {
        username: "alexmorgan1",
        verified: true,
        avatar: avatarAlex,
        quote:
            "Crispy, flavorful, and always served hot. You can really taste the freshness in every bite, especially with the grilled food and handmade signature sauces they serve.",
    },
    {
        username: "grace_adams",
        avatar: avatarGrace,
        quote:
            "The burgers are always juicy, the fries stay crispy, and the delivery is surprisingly fast every time I order from here. Definitely one of the most consistent and reliable food spots around lately.",
    },
];

const rightReviews: Review[] = [
    {
        username: "masonreed",
        avatar: avatarMason,
        quote:
            "Probably one of the most consistent food spots in the city. The quality is always solid.",
    },
    {
        username: "james.walker",
        verified: true,
        avatar: avatarJames,
        quote:
            "You can tell they care about the food here. Everything tastes fresh, the portions are solid, and the service is always incredibly quick.",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="relative bg-cream">
            <div className="text-dark-yellow">
                <SectionEdge side="top" />
            </div>

            <div className="mx-auto max-w-[1440px] px-4 pb-20 pt-14 sm:px-8 sm:pb-24 md:px-10 md:pt-20">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <h2 className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-dark-yellow sm:text-6xl lg:text-7xl">
                        Loved By
                        <br />
                        Customers
                    </h2>
                    <p className="flex items-center gap-2 font-body text-sm font-bold text-dark-yellow sm:text-base">
                        <ThumbsUp size={20} className="fill-yellow text-yellow" aria-hidden />
                        98% Satisfaction
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-8">
                    <VideoCard />

                    <div className="columns-1 gap-6 pt-2 sm:columns-2 sm:gap-6">
                        {[...leftReviews, ...rightReviews].map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function VideoCard() {
    return (
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[28px] border-4 border-dark-yellow shadow-xl lg:max-w-none">
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            >
                <source src="/videos/testimonial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Story-style overlay chrome */}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/50 to-transparent p-4 pb-10">
                <div className="h-0.5 w-2/5 rounded-full bg-white/90" aria-hidden />
                <div className="mt-3 flex items-center gap-2">
                    <Image
                        src={avatarGrillmike}
                        alt=""
                        width={36}
                        height={36}
                        className="h-8 w-8 rounded-full border border-white/60"
                    />
                    <span className="font-body text-sm font-bold text-white">grillmike</span>
                    <BadgeCheck size={16} className="fill-white text-black/70" aria-hidden />
                </div>
            </div>

            <div className="absolute bottom-5 right-4 flex flex-col items-end">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                    <Emoji name="fire" size={64} alt="" className="h-8 w-8" />
                </span>
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-white" aria-hidden />
            </div>
        </div>
    );
}

function ReviewCard({ username, verified, avatar, quote }: Review) {
    return (
        <figure className="mb-6 break-inside-avoid flex flex-col rounded-[24px] bg-[#F5E4CE] p-6 sm:rounded-[28px] sm:p-7">
            <figcaption className="flex items-center gap-2">
                <Image
                    src={avatar}
                    alt=""
                    width={36}
                    height={36}
                    className="h-8 w-8 rounded-full"
                />
                <span className="font-body text-sm font-bold text-dark-yellow">{username}</span>
                {verified && (
                    <BadgeCheck size={16} className="fill-dark-yellow text-[#F5E4CE]" aria-hidden />
                )}
            </figcaption>
            <blockquote className="mt-8 font-body text-base leading-relaxed text-dark-yellow sm:mt-10 sm:text-lg">
                &ldquo;{quote}&rdquo;
            </blockquote>
            <div className="mt-5 flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={20} className="fill-yellow text-yellow" aria-hidden />
                ))}
            </div>
        </figure>
    );
}
