import classNames from "classnames";
import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  return (
    <div className={classNames("container-max-width-wider", styles.container)}>
      Projects
    </div>
  );
};

export default ProjectsSection;
