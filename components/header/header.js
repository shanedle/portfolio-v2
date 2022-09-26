import { useRouter } from "next/router";
import Link from "next/link";

import Socials from "../../utils/socials";

export default function Header() {
  const router = useRouter();

  return (
    <div className="py-3 bg-zinc-900 bg-opacity-50 sticky top-0 z-50 ">
      {/* Left */}
      <div className="flex justify-between md:max-w-4xl xl:max-w-6xl mx-auto">
        <div
          className="px-3 md:px-0 text-white font-semibold text-lg cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span className="sm:inline-block">Shane Le</span>
        </div>

        {/* Right */}
        <div className="flex space-x-8 px-3 md:px-0 text-zinc-400">
          <div className="flex items-center justify-center space-x-4 py-2">
            {Socials?.map((social) => (
              <div
                key={social.id}
                className="text-rose-600 hover:text-rose-800"
              >
                <Link href={social.path} passHref>
                  <a className="text-2xl" target="_blank">
                    {social.icon}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
