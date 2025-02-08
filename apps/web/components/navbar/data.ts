import { Gamepad2, HomeIcon, PencilIcon } from "lucide-react";
import Icons from "../icons/nav.icon";

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: PencilIcon, label: "Blog" },
    { href: "/activity", icon: Gamepad2, label: "Activity" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nbintang",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nur-bintang-hidayat",
        icon: Icons.linkedin,
      },
    },
  },
};


export default DATA;