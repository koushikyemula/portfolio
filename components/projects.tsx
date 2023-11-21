import { projects } from "@/config/projects";
import Link from "next/link";

export const Projects = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Projects</h2>
      <div className="flex flex-col gap-y-4 mt-5">
        {projects.map((project) => (
          <>
            <Link href={project.url} key={project.url} className="underline">
              <h3>{project.name}</h3>
            </Link>
            <p>{project.description}</p>
          </>
        ))}
      </div>
    </div>
  );
};
