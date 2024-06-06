import EmojiConfettiWrapper from "@/components/emoji-wrapper";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="mt-7">
        <h1 className="font-medium text-3xl">Koushik Yemula</h1>
      </div>
      <div>
        <EmojiConfettiWrapper>
          <span className="text-muted-foreground text-xs">IPA /blɪts/ - idk, it sounds cool</span>
        </EmojiConfettiWrapper>
        <p className="pb-6 gap-2 leading-7 text-zinc-270 font-normal">
          Hello! I'm <span className="text-bold">Koushik</span>, a 20-year-old computer science undergrad
          student. I love coding and have a passion for simple and clean web designs, especially those with a
          dark mode.
          <br />
          <br />
          When I'm not coding, I enjoy playing video games and watching anime. Right now, I'm working as an
          intern @ Vertocity, where I'm learning and improving my coding abilities.
        </p>
      </div>
      <Projects />
    </div>
  );
}
