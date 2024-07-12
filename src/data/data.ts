import cover1 from "../assets/cover1.webp";
import cover2 from "../assets/cover2.webp";
import cover3 from "../assets/cover3.jpg";

export interface Project {
  id: number;
  title: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "project1", image: cover1 },
  { id: 2, title: "project2", image: cover2 },
  { id: 3, title: "project3", image: cover3 },
];

export { projects };
