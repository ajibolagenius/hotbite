import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Featured } from "@/components/featured/Featured";
import { Slogan } from "@/components/slogan/Slogan";
import { Menu } from "@/components/menu/Menu";
import { Ticker } from "@/components/ticker/Ticker";
import { PhraseTicker } from "@/components/ticker/PhraseTicker";
import { Values } from "@/components/values/Values";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Gallery } from "@/components/gallery/Gallery";
import { Benefits } from "@/components/benefits/Benefits";
import { Order } from "@/components/order/Order";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Featured />
      <Slogan />
      <Menu />
      <Ticker />
      <Values />
      <Testimonials />
      <Gallery />
      <Benefits />
      <PhraseTicker />
      <Order />
      <Contact />
      <PhraseTicker />
    </main>
  );
}
