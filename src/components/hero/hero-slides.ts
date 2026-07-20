import type { StaticImageData } from "next/image";
import pizza from "@/assets/hero/pizza.png";
import hamburger from "@/assets/hero/hamburger.png";
import hotdog from "@/assets/hero/hotdog.png";
import type { EmojiName } from "@/components/emoji";

export interface HeroSlide {
  id: string;
  name: string;
  image: StaticImageData;
  imageAlt: string;
  bgClass: string;
  accentTextClass: string;
  accentBgClass: string;
  accentDarkTextClass: string;
  edgeTextClass: string;
  ringClass: string;
  tags: [string, string, string];
  emojis: [EmojiName, EmojiName];
}

export const heroSlides: HeroSlide[] = [
  {
    id: "pizza",
    name: "Pizza",
    image: pizza,
    imageAlt: "Sliced pepperoni pizza with fresh basil",
    bgClass: "bg-dark-yellow",
    accentTextClass: "text-yellow",
    accentBgClass: "bg-yellow",
    accentDarkTextClass: "text-dark-yellow",
    edgeTextClass: "text-dark-yellow",
    ringClass: "ring-yellow",
    tags: ["Stretchy", "Cheesy", "Crispy"],
    emojis: ["drooling-face", "fire"],
  },
  {
    id: "burger",
    name: "Hamburger",
    image: hamburger,
    imageAlt: "Loaded cheeseburger with lettuce and tomato",
    bgClass: "bg-dark-green",
    accentTextClass: "text-green",
    accentBgClass: "bg-green",
    accentDarkTextClass: "text-dark-green",
    edgeTextClass: "text-dark-green",
    ringClass: "ring-green",
    tags: ["Juicy", "Beefy", "Saucy"],
    emojis: ["french-fries", "pinched-fingers"],
  },
  {
    id: "hotdog",
    name: "Hot Dog",
    image: hotdog,
    imageAlt: "Double hot dog with fresh lettuce",
    bgClass: "bg-dark-purple",
    accentTextClass: "text-purple",
    accentBgClass: "bg-purple",
    accentDarkTextClass: "text-dark-purple",
    edgeTextClass: "text-dark-purple",
    ringClass: "ring-purple",
    tags: ["Loaded", "Spicy", "Snappy"],
    emojis: ["raising-hands", "red-heart"],
  },
];
