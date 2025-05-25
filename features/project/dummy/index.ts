import { TechIconName, TechIcons } from "../../../components/icons/TechIcons";
type ProjectStatus =
  | "In Progress"
  | "Completed"
  | "Planned"
  | "Archived"
  | "Maintained";
export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;
  status: ProjectStatus;
  technologies: TechIconName[];
  year: string;
}

export const projectData: Project[] = [
  {
    title: "Bxntang",
    description:
      "Bxntang is a personal website for Nur Bintang Hidayat, a software engineer from Depok, Indonesia. It is built using React, Next.js, and Tailwind CSS.",
    image: "/img/project/porto.png",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang",
    technologies: [
      "Typescript",
      "ReactJS",
      "NextJS",
      "Motion",
      "Shadcn",
      "Tailwind",
      "Axios",
      "ReactQuery",
    ],
    year: "2023",
    status: "Completed",
  },
  {
    title: "Go Ikan Cupang",
    description:
      "Bxntang is a personal website for Nur Bintang Hidayat, a software engineer from Depok, Indonesia. It is built using React, Next.js, and Tailwind CSS.",
    image: "",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang",
    technologies: [
      "Typescript",
      "ReactJS",
      "NextJS",
      "Motion",
      "Shadcn",
      "Tailwind",
      "Axios",
      "ReactQuery",
    ],
    year: "2023",
    status: "Archived",
  },
  {
    title: "Wartek (Warta Teknologi)",
    description:
      "Bxntang is a personal website for Nur Bintang Hidayat, a software engineer from Depok, Indonesia. It is built using React, Next.js, and Tailwind CSS.",
    image: "",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang",
    technologies: [
      "Typescript",
      "ReactJS",
      "NextJS",
      "Motion",
      "Shadcn",
      "Tailwind",
      "Axios",
      "ReactQuery",
    ],
    year: "2023",
    status: "In Progress",
  },
  {
    title: "Bxntang",
    description:
      "Bxntang is a personal website for Nur Bintang Hidayat, a software engineer from Depok, Indonesia. It is built using React, Next.js, and Tailwind CSS.",
    image: "/img/project/porto.png",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang",
    technologies: [
      "Typescript",
      "ReactJS",
      "NextJS",
      "Motion",
      "Shadcn",
      "Tailwind",
      "Axios",
      "ReactQuery",
    ],
    year: "2023",
    status: "Completed",
  },
];
