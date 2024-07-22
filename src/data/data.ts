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
  motivation: string;
  futurePlans: string;
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
      "This project showcases a highly complex landing page designed to serve as the entry point for a multi-functional application. Imagine an app that can handle everything from purchasing products to booking a taxi or even managing your laundry services. The landing page is crafted to present a vast amount of information in an organized and user-friendly manner.",
    motivation:
      "Creating a landing page for such a versatile application posed a unique challenge: how to present extensive information without overwhelming the user. This project was an opportunity to leverage my skills in React to solve this problem effectively, ensuring a seamless and intuitive user experience.",
    futurePlans:
      "This landing page is just the beginning. Future enhancements include adding more interactive elements, optimizing performance, and integrating additional features to further improve user engagement and satisfaction.",
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
      "As a passionate gamer and developer, I couldn't resist the opportunity to work with a free Games Database API. This project showcases my ability to fetch and display data from external APIs, while also highlighting my skills in writing clean and efficient TypeScript and React code.",
    motivation:
      "My love for games extends beyond playing them; I enjoy creating them as well. When I discovered a free Games Database API, I saw it as the perfect chance to combine my interests and enhance my development skills. This project allowed me to deepen my understanding of API integration and data handling in a real-world context.",
    futurePlans:
      "Through this project, I gained valuable experience in:Fetching and handling data from external APIs.Implementing best practices in TypeScript and React.Writing clean and maintainable code.",
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
      "This project marks the beginning of an exciting journey into the world of Object-Oriented Programming (OOP) with JavaScript. By clicking the Demo button, you can dive straight into a highly addictive and simple game that showcases the power and flexibility of OOP concepts.",
    motivation:
      "As a developer, I often find that the concepts I learn can fade if not applied regularly. This project was born out of a desire to solidify my understanding of OOP by putting theory into practice. It serves as both a learning tool and a demonstration of my skills in using classes, objects, and the advanced features of JavaScript.",
    futurePlans:
      "This is just the starting point. I have many ideas for expanding this project, including adding new game mechanics, improving the user interface, and incorporating more advanced OOP features.",
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

const aboutMe: string =
  "Welcome to my little corner of the internet, where pixels meet prose and JavaScript magic happens! 🌟 Picture this: a young explorer, aged 10, stumbling upon a treasure trove of HTML and CSS secrets in a dusty PDF book. Fast forward to today, and that curious kid has evolved into a JavaScript wizard (that's me!). ✨ As you browse through this digital book store of mine, know that each line of code and design choice is a love letter to my passion for reading and coding. 📖❤️";
export { projects, aboutMe };
