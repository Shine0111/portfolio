import styles from "./ProjectOverview.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Project } from "../../data/data";
import classNames from "classnames";
import { MdArrowBackIos } from "react-icons/md";
import useViewport from "../../hooks/useViewport";

interface ProjectOverviewProps {
  project: Project;
}

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  const navigate = useNavigate();
  const { viewWidth } = useViewport();
  return (
    <div className={classNames("container-max-width", styles.container)}>
      <div className={styles.navigatorContainer}>
        <div className={styles.backContainer}>
          <MdArrowBackIos
            onClick={() => navigate("/")}
            className={styles.backIcon}
          />

          <h4>{project?.title}</h4>
        </div>
        <div className={styles.pathContainer}>
          <Link to={"/"}>Main</Link>
          <p>/</p>
          <h5>{project?.category}</h5>
          <p>/</p>
          <h5>{project?.title}</h5>
        </div>
      </div>
      <div className={styles.projectOverviewContainer}>
        <div className={styles.imageContainer}>
          <img src={project?.image} />
          {viewWidth > 768 && (
            <div
              className={styles.button}
              onClick={() => window.open("https://www.google.com", "_blank")}
            >
              Demo
            </div>
          )}
        </div>
        <div className={styles.projectDetailsContainer}>
          <h1>{project?.title}</h1>
          <p onClick={() => navigate("/")}>{project?.author}</p>
          <p>{project?.summary}</p>
        </div>
        <div>
          {viewWidth <= 768 && <div className={styles.button}>Demo</div>}
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
