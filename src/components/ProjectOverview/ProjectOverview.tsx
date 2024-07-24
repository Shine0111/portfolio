import styles from "./ProjectOverview.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Project } from "../../data/data";
import classNames from "classnames";
import { MdArrowBackIos } from "react-icons/md";
import useViewport from "../../hooks/useViewport";
import github from "../../assets/icons8-githubcropped.svg-removebg-preview.png";
import Divider from "../Divider/Divider";

interface ProjectOverviewProps {
  project: Project;
}

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  const navigate = useNavigate();
  const { viewWidth } = useViewport();

  return (
    <div className={classNames(styles.container, "container-max-width-wider")}>
      <div className={classNames(styles.navigatorContainer)}>
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
          <img src={project?.image} className={styles.projectCover} />
          {viewWidth > 768 && (
            <>
              <button
                className={styles.button}
                onClick={() => window.open(project?.url, "_blank")}
              >
                <p>Demo</p>
              </button>
              <button
                className={styles.buttonGithub}
                onClick={() => window.open(project?.githubUrl, "_blank")}
              >
                <img src={github} />
                <p>Repository</p>
              </button>
            </>
          )}
        </div>
        <div className={styles.projectDetailsContainer}>
          <h1>{project?.title}</h1>
          <p
            onClick={() =>
              window.open("https://github.com/Shine0111", "_blank")
            }
            className={styles.authorLink}
          >
            {project?.author}
          </p>
          <p>{project?.summary}</p>
          <Divider color="var(--blue)" thickness={1.5} />
          <div className={styles.additionalInfoContainer}>
            <h3>Motivation:</h3>
            <p>{project?.motivation}</p>
            <Divider color="var(--blue)" thickness={1.5} />
            <h3>Future Plans:</h3>
            <p>{project?.futurePlans}</p>
          </div>
          <Divider color="var(--blue)" thickness={1.5} />
          <div className={styles.technologiesContainer}>
            <h3>Technologies:</h3>
            <div className={styles.technologyContainer}>
              {project?.technologies.map((technology, index) => (
                <>
                  <img
                    src={technology.icon}
                    alt={technology.technology}
                    key={index}
                  />
                  <span className={styles.onHoverText}>
                    {technology.technology}
                  </span>
                </>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <h3>Challenges: </h3>
            {project?.challenges.map((challenge, index) => (
              <span key={index}>
                {challenge}
                {index !== project.challenges.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>
        <div>
          {viewWidth <= 768 && (
            <>
              <button
                className={styles.buttonMobile}
                onClick={() => window.open(project?.url, "_blank")}
              >
                Demo
              </button>
              <button
                className={styles.buttonGithubMobile}
                onClick={() => window.open(project?.githubUrl, "_blank")}
              >
                <img src={github} />
                Repository
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
