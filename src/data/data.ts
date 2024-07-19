import cover1 from "../assets/cover1.webp";
import cover2 from "../assets/cover2.webp";
import cover3 from "../assets/cover3.jpg";
import javascript from "../assets/icons8-javascript.svg";
import typescript from "../assets/icons8-typescript.svg";
import html from "../assets/icons8-html.svg";
import css from "../assets/icons8-css.svg";
import react from "../assets/icons8-react.svg";

export interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  author: string;
  summary: string;
  url: string;
  githubUrl: string;
  technologies: Technologies[];
  challenges: string[];
}

interface Technologies {
  technology: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pikla Landing Page",
    image: cover1,
    category: "website",
    author: "Shine Randriamialison",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi! lsdjkf sldkfj lsdkfj lskdjf lskjdflksj dflks dflkjsldkfjlksd fjlks jdflks jdlfk slkdfjlksjd flks jdflk jslkdfjlskdjflksdj flks dlfkjslkdf jlksdjflks jdlkf lskdf jlskdf jlks dflks jdflk jslkdfjlksd jflk sdflk sdlkf jlskd fjlksd jflks djflk sjdlfk jslkdf jlksd jflksd fjlksdj flks jdflks jdflkjsdflk slkdfjlks fls Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi! lsdjkf sldkfj lsdkfj lskdjf lskjdflksj dflks dflkjsldkfjlksd fjlks jdflks jdlfk slkdfjlksjd flks jdflk jslkdfjlskdjflksdj flks dlfkjslkdf jlksdjflks jdlkf lskdf jlskdf jlks dflks jdflk jslkdfjlksd jflk sdflk sdlkf jlskd fjlksd jflks djflk sjdlfk jslkdf jlksd jflksd fjlksdj flks jdflks jdflkjsdflk slkdfjlks fls Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi! lsdjkf sldkfj lsdkfj lskdjf lskjdflksj dflks dflkjsldkfjlksd fjlks jdflks jdlfk slkdfjlksjd flks jdflk jslkdfjlskdjflksdj flks dlfkjslkdf jlksdjflks jdlkf lskdf jlskdf jlks dflks jdflk jslkdfjlksd jflk sdflk sdlkf jlskd fjlksd jflks djflk sjdlfk jslkdf jlksd jflksd fjlksdj flks jdflks jdflkjsdflk slkdfjlks fls Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi! lsdjkf sldkfj lsdkfj lskdjf lskjdflksj dflks dflkjsldkfjlksd fjlks jdflks jdlfk slkdfjlksjd flks jdflk jslkdfjlskdjflksdj flks dlfkjslkdf jlksdjflks jdlkf lskdf jlskdf jlks dflks jdflk jslkdfjlksd jflk sdflk sdlkf jlskd fjlksd jflks djflk sjdlfk jslkdf jlksd jflksd fjlksdj flks jdflks jdflkjsdflk slkdfjlks fls Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi! lsdjkf sldkfj lsdkfj lskdjf lskjdflksj dflks dflkjsldkfjlksd fjlks jdflks jdlfk slkdfjlksjd flks jdflk jslkdfjlskdjflksdj flks dlfkjslkdf jlksdjflks jdlkf lskdf jlskdf jlks dflks jdflk jslkdfjlksd jflk sdflk sdlkf jlskd fjlksd jflks djflk sjdlfk jslkdf jlksd jflksd fjlksdj flks jdflks jdflkjsdflk slkdfjlks fls",
    url: "https://pikla-landing-page.vercel.app/",
    githubUrl: "https://github.com/Shine0111/pikla-landing",
    technologies: [
      {
        technology: "React",
        icon: react,
      },
      {
        technology: "Javascript",
        icon: javascript,
      },
      {
        technology: "Typescript",
        icon: typescript,
      },
      {
        technology: "CSS",
        icon: css,
      },
      {
        technology: "HTML",
        icon: html,
      },
    ],
    challenges: ["Accordion", "Page state through navigation"],
  },
  {
    id: 2,
    title: "GameHub",
    image: cover2,
    category: "website",
    author: "Shine Randriamialison",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi!",
    url: "https://game-hub-pink-ten.vercel.app/",
    githubUrl: "https://github.com/Shine0111/game-hub",
    technologies: [
      {
        technology: "Javascript",
        icon: javascript,
      },
      {
        technology: "Typescript",
        icon: typescript,
      },
      {
        technology: "React",
        icon: react,
      },
      {
        technology: "HTML",
        icon: html,
      },
      {
        technology: "CSS",
        icon: css,
      },
    ],
    challenges: ["Data from server management", "Consuming Third-Party API"],
  },
  {
    id: 3,
    title: "Tamba Be",
    image: cover3,
    category: "website",
    author: "Shine Randriamialison",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi!",
    url: "https://shine0111.github.io/tambaBe/",
    githubUrl: "https://github.com/Shine0111/tambaBe",
    technologies: [
      {
        technology: "Javascript",
        icon: javascript,
      },
      {
        technology: "HTML",
        icon: html,
      },
      {
        technology: "CSS",
        icon: css,
      },
    ],
    challenges: [
      "Object Oriented Programming",
      "Following a moving object on a canvas",
    ],
  },
];

export { projects };
