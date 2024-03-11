import useViewport from "../../hooks/useViewport";
import styles from "./About.module.css";
import classNames from "classnames";

const About = () => {
  const { viewWidth, breakpoint } = useViewport();
  const getContainerWidthClassName = () => {
    viewWidth > breakpoint ? "container-max-width" : "";
  };
  return (
    <div className={classNames(getContainerWidthClassName, styles.container)}>
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
