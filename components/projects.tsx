import { projects } from "@/config/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Projects = () => {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-xl font-medium text-white mb-3">Projects</h2>
        <p className="text-zinc-500 text-sm">A few things I've been working on.</p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.name} className="group">
            <div className="flex items-start justify-between mb-2">
              <Link
                target="_blank"
                href={project.url.github}
                className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors">
                <span className="font-medium">{project.name}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              {project.url.website && (
                <Link
                  target="_blank"
                  href={`https://${project.url.website}`}
                  className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors font-mono">
                  {project.url.website}
                </Link>
              )}
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">{project.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          target="_blank"
          href="https://github.com/BlitZSenpai?tab=repositories"
          className="text-sm text-zinc-500 hover:text-zinc-400 transition-colors">
          More on GitHub →
        </Link>
      </div>
    </section>
  );
};
