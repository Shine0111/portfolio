import cover1 from "../assets/cover1.webp";
import cover2 from "../assets/cover2.webp";
import cover3 from "../assets/cover3.jpg";

export interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  author: string;
  summary: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "project1",
    image: cover1,
    category: "website",
    author: "Shine Randriamialison",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi! lsdjkf sldkfj lsdkfj lskdjf lskjdflksj dflks dflkjsldkfjlksd fjlks jdflks jdlfk slkdfjlksjd flks jdflk jslkdfjlskdjflksdj flks dlfkjslkdf jlksdjflks jdlkf lskdf jlskdf jlks dflks jdflk jslkdfjlksd jflk sdflk sdlkf jlskd fjlksd jflks djflk sjdlfk jslkdf jlksd jflksd fjlksdj flks jdflks jdflkjsdflk slkdfjlks fls Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi! lsdjkf sldkfj lsdkfj lskdjf lskjdflksj dflks dflkjsldkfjlksd fjlks jdflks jdlfk slkdfjlksjd flks jdflk jslkdfjlskdjflksdj flks dlfkjslkdf jlksdjflks jdlkf lskdf jlskdf jlks dflks jdflk jslkdfjlksd jflk sdflk sdlkf jlskd fjlksd jflks djflk sjdlfk jslkdf jlksd jflksd fjlksdj flks jdflks jdflkjsdflk slkdfjlks fls Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi! lsdjkf sldkfj lsdkfj lskdjf lskjdflksj dflks dflkjsldkfjlksd fjlks jdflks jdlfk slkdfjlksjd flks jdflk jslkdfjlskdjflksdj flks dlfkjslkdf jlksdjflks jdlkf lskdf jlskdf jlks dflks jdflk jslkdfjlksd jflk sdflk sdlkf jlskd fjlksd jflks djflk sjdlfk jslkdf jlksd jflksd fjlksdj flks jdflks jdflkjsdflk slkdfjlks fls Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi! lsdjkf sldkfj lsdkfj lskdjf lskjdflksj dflks dflkjsldkfjlksd fjlks jdflks jdlfk slkdfjlksjd flks jdflk jslkdfjlskdjflksdj flks dlfkjslkdf jlksdjflks jdlkf lskdf jlskdf jlks dflks jdflk jslkdfjlksd jflk sdflk sdlkf jlskd fjlksd jflks djflk sjdlfk jslkdf jlksd jflksd fjlksdj flks jdflks jdflkjsdflk slkdfjlks fls Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi! lsdjkf sldkfj lsdkfj lskdjf lskjdflksj dflks dflkjsldkfjlksd fjlks jdflks jdlfk slkdfjlksjd flks jdflk jslkdfjlskdjflksdj flks dlfkjslkdf jlksdjflks jdlkf lskdf jlskdf jlks dflks jdflk jslkdfjlksd jflk sdflk sdlkf jlskd fjlksd jflks djflk sjdlfk jslkdf jlksd jflksd fjlksdj flks jdflks jdflkjsdflk slkdfjlks fls",
  },
  {
    id: 2,
    title: "project2",
    image: cover2,
    category: "website",
    author: "Shine Randriamialison",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi!",
  },
  {
    id: 3,
    title: "project3",
    image: cover3,
    category: "website",
    author: "Shine Randriamialison",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autcorrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur, tenetur neque eveniet. Aut praesentium consequatur accusamus magnam blanditiis excepturi!",
  },
];

export { projects };
