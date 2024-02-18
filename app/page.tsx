import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="mt-7">
        <h1 className="font-medium text-3xl">Koushik Yemula</h1>
      </div>
      <div>
        <span className="text-muted-foreground text-xs">IPA /blɪts/ - idk, it sounds cool</span>
        <p className="pb-6 gap-2 leading-7 text-zinc-270 font-normal">
          Hi there, I&apos;m <span className="text-bold">Koushik</span>. I&apos;m a 20y/o CS undergrad student
          who loves to code. <br />I love dark stuff, open source and simple web design. When i&apos;m not
          coding, I like to play games and watch anime.
          <br />
          <br />
          Right now i&apos;m looking for new opportunities and exploring the world of coding to futher improve
          my skills and knowledge.
        </p>
      </div>
      <Projects />
    </div>
  );
}
