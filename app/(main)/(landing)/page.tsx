import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <div className="mt-7">
        <h1 className="font-medium text-3xl">Koushik Yemula</h1>
      </div>
      <div>
        <span className="text-muted-foreground text-xs">IPA /blɪts/ - idk, it sounds cool</span>
        <p className="text-zinc-100 pb-7 gap-2 leading-7">
          Hi there, I&apos;m <span className="text-bold">Koushik</span>. I&apos;m a 19y/o CS undergrad student
          who loves to code. I love dark stuff, open source and simple web design. When i&apos;m not coding, i
          like playing games and watching anime.
        </p>
        <p className="leading-7">
          Right now i&apos;m looking for new opportunities and exploring the world of coding to futher improve
          my skills and knowledge.
        </p>
      </div>
      <Projects />
    </>
  );
}
