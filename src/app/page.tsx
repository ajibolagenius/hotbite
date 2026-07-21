import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Featured } from "@/components/featured/Featured";
import { Slogan } from "@/components/slogan/Slogan";
import { Menu } from "@/components/menu/Menu";
import { Ticker } from "@/components/ticker/Ticker";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Featured />
      <Slogan />
      <Menu />
      <Ticker />
    </main>
  );
}
