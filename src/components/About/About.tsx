import styles from "./About.module.css";
import classNames from "classnames";

const About = () => {
  return (
    <div
      className={classNames("container-max-width", styles.container)}
      id="about"
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
