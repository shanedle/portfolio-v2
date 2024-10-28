import { useQuery } from "@apollo/client";
import { PINNED_REPOS_QUERY } from "@/lib/github";
import { ProjectCard } from "./project-card";
import type { Project } from "@/types";

export function Projects() {
  const { data, loading, error } = useQuery(PINNED_REPOS_QUERY);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-rose-600 text-center mb-12">
          Projects
        </h2>
        <div className="text-white text-center">Loading projects...</div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching projects:", error);
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-rose-600 text-center mb-12">
          Projects
        </h2>
        <div className="text-rose-400 text-center">
          Unable to load projects at this time.
        </div>
      </section>
    );
  }

  const projects: Project[] =
    data?.user?.pinnedItems?.edges?.map((edge: any) => edge.node) || [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-rose-600 text-center mb-12">
        Projects
      </h2>

      {projects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-white text-center">No projects found.</div>
      )}
    </section>
  );
}
