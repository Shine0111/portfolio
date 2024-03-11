import classNames from "classnames";
import styles from "./ProjectsSection.module.css";
import placeholderImage from "../../assets/placeholder-img.jpg";

const ProjectsSection = () => {
  const projects = [
    { title: "project1", image: placeholderImage },
    { title: "project2", image: placeholderImage },
    { title: "project3", image: placeholderImage },
  ];
  return (
    <div className={classNames("container-max-width-wider", styles.container)}>
      <img
        src={placeholderImage}
        alt="placeholder image"
        className={styles.projectEntryImage}
      />
      {projects.map((project) => (
        <img
          key={project.title}
          src={project.image}
          alt={project.title}
          className={styles.projectEntryImage}
        />
      ))}
    </div>
  );
};

export default ProjectsSection;
