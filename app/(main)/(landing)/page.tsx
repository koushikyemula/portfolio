import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen py-12 gap-y-12">
      <div className="pb-">
        <h1 className="font-medium text-md">Koushik Yemula</h1>
      </div>
      <div>
        <span className="text-muted-foreground text-xs">IPA /blɪts/ - idk, it sounds cool</span>
        <p className="text-zinc-100 pb-7 gap-2">
          Hi there, I&apos;m <span className="text-bold">Koushik</span>. I&apos;m a 19y/o CS undergrad student
          who loves to code. I love dark mode, open source and simple web design. When i&apos;m not coding, i
          like playing games and watching anime.
        </p>
        <p>
          Right now i&apos;m looking for new opportunities and exploring the world of coding to futher improve
          my skills and knowledge.
        </p>
      </div>
      <div>
        {/*turn this into a new projects component */}
        <h2 className="text-xl font-bold">Projects</h2>
        <div>
          <Link href="https://github.com/BlitZSenpai/Otto">
            <span className="underline">Crux</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
