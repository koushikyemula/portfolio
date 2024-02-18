import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col w-full items-center justify-center gap-10">
      <h1 className="font-bold text-4xl">What are you doing here?!</h1>
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "text-lg h-12 font-bold",
        })}
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
