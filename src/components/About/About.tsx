import styles from "./About.module.css";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { useHash } from "../../contexts/HashContext";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { hash, setHash } = useHash();

  useEffect(() => {
    if (hash === "#about") {
      aboutRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }

    return () => setHash("");
  }, [hash, setHash]);

  return (
    <div
      className={classNames("container-max-width", styles.container)}
      id="about"
      ref={aboutRef}
    >
      <h1 className="italic-title">About Me</h1> <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aut
        corrupti dolorum hic ipsam porro, qui voluptates, nesciunt ut pariatur,
        tenetur neque eveniet. Aut praesentium consequatur accusamus magnam
        blanditiis excepturi!
      </p>
    </div>
  );
};

export default About;
