import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const topics = project.repositoryTopics.edges.map(
    (edge) => edge.node.topic.name
  );

  return (
    <article className="bg-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-white mb-3 capitalize">
        {project.name.replace(/-/g, " ")}
      </h3>

      <p className="text-zinc-300 mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {topics.map((topic) => (
          <span
            key={topic}
            className="px-3 py-1 text-sm bg-rose-600/10 text-rose-400 rounded-full"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-300 hover:text-rose-400 transition-colors"
        >
          <SiGithub className="text-xl" />
          <span>Source</span>
        </Link>

        {project.homepageUrl && (
          <Link
            href={project.homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-300 hover:text-rose-400 transition-colors"
          >
            <IoRocketOutline className="text-xl" />
            <span>Demo</span>
          </Link>
        )}
      </div>
    </article>
  );
}
