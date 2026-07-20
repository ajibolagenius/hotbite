import { Logo } from "@/components/logo";
import { Emoji, emojiMap, type EmojiName } from "@/components/emoji";

const emojiNames = Object.keys(emojiMap) as EmojiName[];

export default function Home() {
  return (
    <main className="flex flex-col gap-12 p-12">
      <section className="flex flex-col gap-4 rounded-2xl bg-dark-yellow p-8">
        <h2 className="font-heading text-sm uppercase tracking-wide text-cream/70">
          Logo
        </h2>
        <div className="flex items-center gap-8">
          <Logo />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-sm uppercase tracking-wide text-dark-yellow/70">
          Emojis
        </h2>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8">
          {emojiNames.map((name) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 text-center"
            >
              <Emoji name={name} size={40} />
              <span className="font-body text-xs text-dark-yellow/70">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
