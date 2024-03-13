import classNames from "classnames";
import styles from "./ProjectsSection.module.css";
import placeholderImage from "../../assets/placeholder-img.jpg";
import useViewport from "../../hooks/useViewport";

const ProjectsSection = () => {
  const { viewWidth, breakpoint } = useViewport();

  const getProjects = () => {
    if (viewWidth < breakpoint) return [projects[0], projects[1]];
    return projects;
  };

  const projects = [
    { title: "project1", image: placeholderImage },
    { title: "project2", image: placeholderImage },
    { title: "project3", image: placeholderImage },
  ];

  const projectsLoaded: { title: string; image: string }[] = getProjects();
  return (
    <div className={classNames("container-max-width-wider", styles.container)}>
      {projectsLoaded.map((project) => (
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
