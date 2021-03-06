import { useRouter } from "next/router";
import { GoRepo } from "react-icons/go";
import { FaHome } from "react-icons/fa";

export default function Header() {
  const router = useRouter();

  return (
    <div className="py-3 shadow-sm border-b border-blue-200 bg-gray-900 sticky top-0 z-50 ">
      {/* Left */}
      <div className="flex justify-between md:max-w-4xl xl:max-w-6xl mx-auto ">
        <h1 className="px-3 md:px-0 text-blue-200 font-semibold">
          <span className="sm:inline-block">Shane Le</span>
        </h1>

        {/* Right */}
        <div className="flex space-x-8 px-3 md:px-0 text-gray-400">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <div
              className={`hidden md:block px-1 text-lg uppercase font-semibold 
              ${router.pathname === "/" ? "text-blue-200" : ""}`}
            >
              Home
            </div>
            <FaHome
              className={`text-2xl md:hidden ${
                router.pathname === "/" ? "text-blue-200" : ""
              }`}
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => router.push("/Projects")}
          >
            <div
              className={`hidden md:block px-1 text-lg uppercase font-semibold 
              ${router.pathname === "/Projects" ? "text-blue-200" : ""}`}
            >
              Projects
            </div>
            <GoRepo
              className={`text-2xl md:hidden ${
                router.pathname === "/Projects" ? "text-blue-200" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
