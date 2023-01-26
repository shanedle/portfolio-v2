import { SiReact, SiRedux, SiVuedotjs, SiJquery } from "react-icons/si";

interface Library {
  id: number;
  name: string;
  icon: JSX.Element;
}

export const Libraries: Library[] = [
  {
    id: 1,
    name: "React",
    icon: <SiReact />,
  },
  {
    id: 2,
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    id: 3,
    name: "Vue.js",
    icon: <SiVuedotjs />,
  },
  {
    id: 4,
    name: "jQuery",
    icon: <SiJquery />,
  },
];
