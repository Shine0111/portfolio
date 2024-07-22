import piklaLandingCover from "../assets/pikla-landing-cover.png";
import gameHubCover from "../assets/game-hub-cover.png";
import tambaBeCover from "../assets/TambaBe-cover.png";
import javascript from "../assets/icons8-javascript.svg";
import typescript from "../assets/icons8-typescript.svg";
import html from "../assets/icons8-html.svg";
import css from "../assets/icons8-css.svg";
import react from "../assets/icons8-react.svg";
import chakraUi from "../assets/icons8-chakra-ui.svg";

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
    image: piklaLandingCover,
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
      {
        technology: "ChakraUI",
        icon: chakraUi,
      },
    ],
    challenges: ["Accordion", "Page state through navigation"],
  },
  {
    id: 2,
    title: "GameHub",
    image: gameHubCover,
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
    image: tambaBeCover,
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
