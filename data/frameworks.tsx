import {
  SiExpress,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

interface Framework {
  id: number;
  name: string;
  icon: JSX.Element;
}

export const Frameworks: Framework[] = [
  {
    id: 1,
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    id: 2,
    name: "Next.js",
    icon: <SiNextdotjs />,
  },

  {
    id: 3,
    name: "Nuxt.js",
    icon: <SiNuxtdotjs />,
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    id: 5,
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
];
