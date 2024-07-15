import classNames from "classnames";
import styles from "./ProjectsSection.module.css";
import { projects } from "../../data/data.ts";
import useViewport from "../../hooks/useViewport";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const { viewWidth, breakpoint } = useViewport();
  const navigate = useNavigate();

  const handleProjectClick = (id: number) => {
    navigate(`/project/${id}`);
  };

  const getProjects = () => {
    if (viewWidth < breakpoint) return [projects[0], projects[1]];
    return projects;
  };

  const projectsLoaded: { id: number; title: string; image: string }[] =
    getProjects();
  return (
    <div id="projects" className={classNames("container-max-width-wider")}>
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
        {projectsLoaded.map((project, index) => (
          <div
            className={
              viewWidth > breakpoint
                ? styles.projectEntryImage
                : styles.projectEntryImageMobile
            }
            onClick={() => handleProjectClick(index)}
          >
            <img key={project.id} src={project.image} alt={project.title} />
          </div>
        ))}
      </div>

      {viewWidth < breakpoint && (
        <div className={styles.container}>
          <div
            className={styles.projectEntryImageMobile}
            onClick={() => handleProjectClick(2)}
          >
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
