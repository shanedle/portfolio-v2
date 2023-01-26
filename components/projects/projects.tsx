import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";

interface Project {
  id: string;
  name: string;
  description: string;
  repositoryTopics: {
    edges: Array<{
      node: {
        id: string;
        topic: {
          name: string;
        };
      };
    }>;
  };
  url: string;
  homepageUrl?: string;
}

interface Props {
  pinnedItems: Project[];
}

export const Projects = ({ pinnedItems }: Props) => {
  return (
    <section className="flex justify-center">
      <div className="grid md:grid-cols-3 gap-8 m-4 p-3 pb-10">
        {pinnedItems?.map((item) => (
          <div key={item.id} className="card">
            <h2 className="card-title">{item.name}</h2>
            <p className="py-2 mx-5">{item.description}</p>
            {/* Tags */}
            <div className="card-tags-wrapper">
              {item.repositoryTopics.edges?.map((tag) => (
                <span className="card-tags" key={tag.node.id}>
                  {tag.node.topic.name}
                </span>
              ))}
            </div>
            {/* Links */}
            <div className="card-links-wrapper ">
              <Link href={item.url} passHref>
                <a className="card-links" target="_blank">
                  <SiGithub />
                  <span className="card-links-text">Source Code</span>
                </a>
              </Link>
              {item.homepageUrl ? (
                <Link href={item.homepageUrl} passHref>
                  <a className="card-links" target="_blank">
                    <IoRocketOutline />
                    <span className="card-links-text">Live Demo</span>
                  </a>
                </Link>
              ) : (
                <p className="bg-rose-600 text-white hover:bg-rose-800 rounded-full px-3 py-1 text-xl font-semibold m-1">
                  WIP
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
