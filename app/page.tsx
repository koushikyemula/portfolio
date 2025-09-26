import EmojiConfettiWrapper from "@/components/emoji-wrapper";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col py-10 pt-14">
      <section className="mb-16">
        <div className="mb-6">
          <h1 className="text-4xl font-semibold tracking-tight text-white mb-2">Koushik Yemula</h1>
          <div className="flex items-center gap-2 mb-4">
            <EmojiConfettiWrapper>
              <span className="text-zinc-400 text-sm font-mono tracking-wide">Arch btw!! Neovim btw!!</span>
            </EmojiConfettiWrapper>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-zinc-300 text-base leading-relaxed">
            Hey there! I&apos;m a 21-year-old computer science student with a passion for building clean,
            minimal web experiences. I love crafting interfaces that feel effortless and purposeful.
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Currently interning at <span className="text-zinc-300 font-medium">Vertocity</span>, where
            I&apos;m sharpening my skills and learning from amazing people. When I&apos;m not coding,
            you&apos;ll find me gaming or watching anime.
          </p>
        </div>
      </section>

      <Projects />
    </div>
  );
}
