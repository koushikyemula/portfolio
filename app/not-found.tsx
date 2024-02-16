import Link from "next/link";

const NotFoundPagw = () => {
  return (
    <div className="h-full flex flex-col w-full items-center justify-center gap-10">
      <h1 className="font-bold text-6xl">Not Found!!</h1>
      <Link
        className="p-4 w-auto h-auto hover:opacity-70 border-2 border-neutral-100 rounded-md"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPagw;
