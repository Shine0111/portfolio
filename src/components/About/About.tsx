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
        Welcome to my little corner of the internet.🌟
        <br />
        <br /> Picture this: a young kid, aged 10, stumbling upon a treasure
        trove of HTML and CSS secrets in a dusty PDF book. Fast forward to
        today, and that curious kid has evolved into a Web emotional (that's
        me!). <br />
        <br /> Know that each line of code and design choice is a love letter to
        my passion for reading and coding.
      </p>
    </div>
  );
};

export default About;
