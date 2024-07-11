import classNames from "classnames";
import styles from "./ProjectsSection.module.css";
// import placeholderImage from "../../assets/placeholder-img.jpg";
import cover1 from "../../assets/cover1.webp";
import cover2 from "../../assets/cover2.webp";
import cover3 from "../../assets/cover3.jpg";
import useViewport from "../../hooks/useViewport";

const ProjectsSection = () => {
  const { viewWidth, breakpoint } = useViewport();

  const getProjects = () => {
    if (viewWidth < breakpoint) return [projects[0], projects[1]];
    return projects;
  };

  const projects = [
    { title: "project1", image: cover1 },
    { title: "project2", image: cover2 },
    { title: "project3", image: cover3 },
  ];

  const projectsLoaded: { title: string; image: string }[] = getProjects();
  return (
    <div className={classNames("container-max-width-wider")}>
      <div
        className={classNames(
          "section-container-border-right",

          "right-section-container",
          styles.sectionContainer
        )}
      >
        <h1 className={classNames("italic-title", "right-text")}>
          Browse my Projects
        </h1>
        <div className={styles.subtitle}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et itaque
            recusandae sapiente ex enim at, temporibus, velit ullam quisquam
            placeat optio dolor blanditiis ipsum eaque doloremque tenetur, vero
            maxime aperiam!
          </p>
        </div>
      </div>
      <div className={styles.container}>
        {projectsLoaded.map((project) => (
          <div
            className={
              viewWidth > breakpoint
                ? styles.projectEntryImage
                : styles.projectEntryImageMobile
            }
          >
            <img key={project.title} src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
      {viewWidth < breakpoint && (
        <div className={styles.container}>
          <div className={styles.projectEntryImageMobile}>
            <img
              key={projects[2].title}
              src={projects[2].image}
              alt={projects[2].title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
