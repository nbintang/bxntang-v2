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
      "Bxntang is a personal portfolio website for Nur Bintang Hidayat, showcasing projects, blogs, and personal information. Built using modern tech stack such as React, Next.js, and Tailwind CSS.",
    image: "/img/project/porto.png",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang/bxntang-v2",
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
    year: new Date().getFullYear().toString(),
    status: "Maintained",
  },
  {
    title: "Quizium",
    description:
      "A quiz app for learning and testing your knowledge. Built with modern UI and secure data handling. It features a user-friendly interface, customizable quizzes, and a secure login system.",
    image: "/img/project/quiz.png",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang/Quizium",
    technologies: [
      "Typescript",
      "Prisma",
      "NextJS",
      "Shadcn",
      "ReactJS",
      "Tailwind",
    ],
    year: "2024",
    status: "Completed",
  },
  {
    title: "Scat UI",
    description:
      "This is my Hobby Project, A customizable UI component library designed for React developers, providing reusable and accessible design components with Shadcn and Tailwind.",
    image: "/img/project/scatui.png",
    url: "https://github.com/nbintang",
    github: "https://github.com/malasngodings/scat-ui",
    technologies: ["Typescript", "ReactJS", "NextJS", "Shadcn", "Tailwind"],
    year: new Date().getFullYear().toString(),
    status: "Maintained",
  },
  {
    title: "Literasi",
    description:
      "A digital library platform that allows users to borrow and read books online, featuring a user-friendly interface and secure borrowing system.",
    image: "/img/project/bookstore.png",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang/bookstore-lapon",
    technologies: [
      "Typescript",
      "Prisma",
      "NextJS",
      "Shadcn",
      "ReactJS",
      "Tailwind",
      "ReactQuery",
    ],
    year: new Date().getFullYear().toString(),
    status: "Maintained",
  },

  {
    title: "E Hospital",
    description:
      "A hospital management dashboard for scheduling, patient records, and doctor assignments. Built with modern UI and secure data handling.",
    image: "/img/project/ehospital.png",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang",
    technologies: [
      "Typescript",
      "ReactJS",
      "NextJS",
      "Shadcn",
      "Tailwind",
      "Prisma",
      "ReactQuery",
    ],
    year: "2023",
    status: "Completed",
  },
  {
    title: "Health Care",
    description:
      "A mental health platform to support online consultations, self-assessment, and psychological education with clean and responsive UI.",
    image: "/img/project/health.png",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang/hero-de-code",
    technologies: ["Typescript", "ReactJS", "NextJS", "Shadcn", "Tailwind"],
    year: "2023",
    status: "Completed",
  },
  {
    title: "Wartek (Warta Teknologi)",
    description:
      "A technology news platform that delivers the latest updates in software, hardware, and industry trends, targeting Indonesian tech readers.",
    image: "",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang/wartech-backend",
    technologies: [
      "Typescript",
      "NestJS",
      "NextJS",
      "Axios",
      "ReactJS",
      "Shadcn",
      "Tailwind",
      "ReactQuery",
      "Prisma",
    ],
    year: "2023",
    status: "In Progress",
  },
  {
    title: "Go Ikan Cupang",
    description:
      "An e-commerce platform for betta fish (ikan cupang) trading, providing online catalog and order features for fish enthusiasts.",
    image: "",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang/go-ikan-cupang",
    technologies: ["Golang", "MySQL", "Fiber"],
    year: "2025",
    status: "Archived",
  },
  {
    title: "Wedding Invitation",
    description:
      "I build my sisters wedding invitation, A digital wedding invitation platform offering customizable templates and RSVP management for a seamless guest experience.",
    image: "/img/project/wedding.png",
    url: "https://github.com/nbintang",
    github: "https://github.com/nbintang/go-ikan-cupang",
    technologies: ["NextJS", "Shadcn", "PostgreSQL"],
    year: "2024",
    status: "Completed",
  },
];
