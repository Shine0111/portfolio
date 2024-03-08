import styles from "./About.module.css";
import classNames from "classnames";

const About = () => {
  return (
    <div className={classNames("container-max-width", styles.container)}>
      About Me <br />
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
