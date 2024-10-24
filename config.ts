import { Github, Linkedin, Code, JournalAlbum, X } from "react-bootstrap-icons";

const data: Data = {
  title: "Miguel Caballero - Web Developer",
  theme: "dark",
  animation: {
    nameRandomizer: false,
  },
  name: "Miguel Caballero",
  description: "Senior Engineer | Vercel",
  links: [
    {
      name: "miguel.cab",
      url: "https://miguel.cab",
      icon: Code,
    },
    {
      name: "My Blog",
      url: "https://miguel.cab/blog",
      icon: JournalAlbum,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/miguel-caballero/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/mcabs3",
      icon: Github,
    },
    {
      name: "Twitter",
      url: "https://x.com/miguelcabs",
      icon: X,
    },
  ],
  sortByLength: false,
};

export default data;
