import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";

export default function Projects({ pinnedItems }) {
  return (
    <section className="flex justify-center">
      <div className="grid md:grid-cols-3 gap-8 m-4 p-3 pb-10">
        {pinnedItems?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between max-w-xs md:max-w-md border-2 border-rose-300 text-white rounded-lg"
          >
            <h1 className="text-rose-300 text-center text-xl font-semibold p-2 mb-3 rounded-t-lg">
              {item.name}
            </h1>
            <p className="py-2 mx-5">{item.description}</p>
            {/* Tags */}
            <div className="mx-5 pb-2 flex flex-wrap justify-center">
              {item.repositoryTopics.edges?.map((tag) => (
                <span
                  className="cursor-pointer inline-block bg-rose-700 rounded-full px-3 py-1 text-xs font-semibold m-1"
                  key={tag.node.id}
                >
                  {tag.node.topic.name}
                </span>
              ))}
            </div>
            {/* Links */}
            <div className="flex justify-between rounded-b-lg p-2 px-5">
              <Link href={item.url} passHref>
                <a
                  className="flex items-center bg-rose-600 text-white hover:bg-rose-800 rounded-full px-3 py-1 text-xl font-semibold m-1"
                  target="_blank"
                >
                  <SiGithub />
                  <span className="ml-2 hidden md:block">Source Code</span>
                </a>
              </Link>
              {item.homepageUrl ? (
                <Link href={item.homepageUrl} passHref>
                  <a
                    className="flex items-center bg-rose-600 text-white hover:bg-rose-800 rounded-full px-3 py-1 text-xl font-semibold m-1"
                    target="_blank"
                  >
                    <IoRocketOutline />
                    <span className="ml-2 hidden md:block"> Live Demo</span>
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
}
