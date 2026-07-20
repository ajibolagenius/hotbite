import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Featured } from "@/components/featured/Featured";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Featured />
    </main>
  );
}
