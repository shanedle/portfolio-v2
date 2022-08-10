import Socials from "../Socials";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 fixed inset-x-0 bottom-0 min-w-full">
      <div className="md:max-w-4xl xl:max-w-6xl mx-auto text-rose-200 flex justify-between items-center px-4 md:px-0">
        <div>
          &copy; {new Date().getFullYear()}, Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Shane Le
        </div>
        <div className="flex items-center justify-center space-x-4 py-2">
          {Socials?.map((social) => (
            <div key={social.id} className="text-rose-600 hover:text-rose-800">
              <Link href={social.path} passHref>
                <a className="text-2xl" target="_blank">
                  {social.icon}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
