import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col pt-5 w-full items-center justify-center gap-10 !h-[69dvh]">
      <h1 className="font-bold text-5xl hover:animate-ping delay-1000 ease-out transition">
        Why are you here??
      </h1>
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "text-lg h-12 rounded-md font-semibold",
        })}
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
