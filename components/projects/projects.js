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
            className="flex flex-col justify-between max-w-xs md:max-w-md border-2 border-rose-200 text-white bg-zinc-900 rounded-lg"
          >
            <h1 className="text-center text-xl font-semibold p-2 mb-3 rounded-t-lg bg-zinc-800">
              {item.name}
            </h1>
            <p className="py-2 mx-5">{item.description}</p>
            {/* Tags */}
            <div className="mx-5 pb-2 flex flex-wrap justify-center">
              {item.repositoryTopics.edges?.map((tag) => (
                <span
                  className="cursor-pointer inline-block bg-rose-700 text-rose-100 rounded-full px-3 py-1 text-xs font-semibold m-1"
                  key={tag.node.id}
                >
                  {tag.node.topic.name}
                </span>
              ))}
            </div>
            {/* Links */}
            <div className="flex justify-between rounded-b-lg bg-zinc-800 p-2 px-5">
              <Link href={item.url} passHref>
                <a
                  className="flex items-center  bg-zinc-400 text-zinc-800 hover:text-rose-900 rounded-full px-3 py-1 text-xl font-semibold m-1"
                  target="_blank"
                >
                  <SiGithub />
                  <span className="ml-2 hidden md:block">Source Code</span>
                </a>
              </Link>
              {item.homepageUrl ? (
                <Link href={item.homepageUrl} passHref>
                  <a
                    className="flex items-center  bg-zinc-400 text-zinc-800 hover:text-rose-900 rounded-full px-3 py-1 text-xl font-semibold m-1"
                    target="_blank"
                  >
                    <IoRocketOutline />
                    <span className="ml-2 hidden md:block"> Live Demo</span>
                  </a>
                </Link>
              ) : (
                <p className="bg-zinc-400 text-zinc-800 hover:text-rose-900 rounded-full px-3 py-1 text-sm font-bold m-1">
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
