import SocialMediaIcon from "../../icons/SocialMediaIcon";

const navData = {
  navbar: [
    { href: "/work", label: "My Work" },
    { href: "/about", label: "About Me" },
    { href: "/activity", label: "My Activity" },
    { href: "/blog", label: "Blog" },
  ],
  address: [
    {
      city: "Depok",
      details: "Beji, Depok, Jawa Barat",
    },
    {
      city: "Depok",
      details: "Kelapa Dua, Depok, Jawa Barat",
    },
  ],
  contact: {
    social: {
      Youtube: {
        title: "Youtube",
        href: "https://www.youtube.com/watch?v=eAswnbWptBM",
        Icon: SocialMediaIcon.youtube,
      },
      Github: {
        title: "GitHub",
        href: "https://github.com/chrhi",
        Icon: SocialMediaIcon.github,
      },
      Linkedin: {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/chehri-abdellah-4a8858267/",
        Icon: SocialMediaIcon.linkedin,
      },
      Instagram: {
        title: "Instagram",
        href: "https://twitter.com/KING_IN_JUNGLE",
        Icon: SocialMediaIcon.ig,
      },
    },
  },
};

export default navData;
