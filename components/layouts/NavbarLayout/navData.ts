import SocialMediaIcon from "../../icons/SocialMediaIcon";

const navData = {
  navbar: [
    { href: "/blog", label: "My Blog" },
    { href: "/about", label: "About Me" },
    { href: "/activity", label: "My Activity" },
    { href: "/CV_Nur Bintang Hidayat.pdf", label: "Resume"},
  ],
  address: [
    {
      city: "Depok",
      details: "Beji, Jawa Barat, Indonesia",
    },
    {
      city: "Depok",
      details: "Kelapa Dua, Jawa Barat, Indonesia",
    },
  ],
  contact: {
    social: {
      Youtube: {
        title: "Youtube",
        href: "https://www.youtube.com/@babangganteng9890",
        Icon: SocialMediaIcon.youtube,
      },
      Github: {
        title: "GitHub",
        href: "https://github.com/nbintang",
        Icon: SocialMediaIcon.github,
      },
      Linkedin: {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/nur-bintang-hidayat",
        Icon: SocialMediaIcon.linkedin,
      },
      Instagram: {
        title: "Instagram",
        href: "https://instagram.com/nbntang",
        Icon: SocialMediaIcon.ig,
      },
    },
  },
};

export default navData;
