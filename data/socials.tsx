import { SiGithub, SiLinkedin } from "react-icons/si";

interface Social {
  id: number;
  name: string;
  path: string;
  icon: JSX.Element;
}

export const Socials: Social[] = [
  {
    id: 1,
    name: "Github",
    path: "https://github.com/shanedle",
    icon: <SiGithub />,
  },
  {
    id: 2,
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/shane-anh-dagatan-le",
    icon: <SiLinkedin />,
  },
];
