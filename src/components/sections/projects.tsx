"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import { GithubRepository } from "@/lib/types";
import { cn } from "@/lib/utils";

const TechnologyBadge = ({ tech }: { tech: string }) => {
  return (
    <span className="rounded-md bg-zinc-100 p-1.5 text-xs font-semibold text-black">
      {tech}
    </span>
  );
};

const ProjectCard = ({ project }: { project: GithubRepository }) => {
  return (
    <div className="flex h-[20rem] w-80 flex-col overflow-hidden rounded-md border p-3 shadow-lg sm:h-[20rem] md:w-[30rem]">
      <div className="flex h-full flex-col justify-between">
        <div>
          <h1 className="mb-1 mt-2 text-xl font-semibold">{project.name}</h1>
          <p className="text-sm text-zinc-700">{project.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {project.repositoryTopics.nodes.map(({ topic }) => (
              <TechnologyBadge key={topic.name} tech={topic.name} />
            ))}
          </div>
          <div className="flex space-x-2">
            {project.homepageUrl && (
              <Link
                target="_blank"
                className={cn(
                  buttonVariants({
                    size: "sm",
                  }),
                )}
                href={project.homepageUrl}
              >
                <Globe className="mr-2 h-4 w-4" />
                Website
              </Link>
            )}
            <Link
              target="_blank"
              className={cn(
                buttonVariants({
                  size: "sm",
                }),
              )}
              href={project.url}
            >
              <Github className="mr-2 h-4 w-4" /> Source
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<GithubRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setError("Invalid data format received");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <MaxWidthWrapper className="flex flex-col pb-20">
      <BlurFade inView>
        <h1 className="mx-5 text-center text-4xl font-bold sm:text-5xl">
          Featured Work
        </h1>
        <p className="mx-auto my-2.5 max-w-prose px-4 text-center text-sm text-zinc-500 sm:text-base">
          From dynamic e-commerce platforms to lightning-fast web apps, here's a
          glimpse of the solutions I've brought to life.
        </p>
      </BlurFade>
      <div className="mx-auto my-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {isLoading ? (
          <div className="col-span-full text-center">Loading...</div>
        ) : error ? (
          <div className="col-span-full text-center text-red-500">{error}</div>
        ) : projects.length === 0 ? (
          <div className="col-span-full text-center">No projects found</div>
        ) : (
          projects.map((project, idx) => (
            <BlurFade
              key={project.name}
              delay={0.25 + idx * 0.05}
              inView
              inViewMargin="-50px"
            >
              <ProjectCard project={project} />
            </BlurFade>
          ))
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default Projects;
