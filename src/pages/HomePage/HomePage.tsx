import classNames from "classnames";
import styles from "./HomePage.module.css";
import useViewport from "../../hooks/useViewport";
import GlitchText from "../../components/GlicthText/GlitchText";
import heroImage from "../../assets/portfolio-hero-v1.svg";
import About from "../../components/About/About";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Contact from "../../components/Contact/Contact";
import { useRef, useEffect } from "react";
import { useHash } from "../../contexts/HashContext";
import downloadIcon from "../../assets/icons8-download-64.png";

function HomePage() {
  const { viewWidth } = useViewport();
  const roles = ["front-end developer", "javascript developer"];

  const { hash, setHash } = useHash();

  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hash === "#home") {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return () => setHash("");
  }, [hash, setHash]);

  // const downloadResume = () => {
  //   window.location.href = "../../docs/Resume.pdf";
  // };

  return (
    <>
      <div
        className={classNames("hero-container-max-width", styles.container)}
        ref={homeRef}
      >
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>
            Hi, my <br /> name is <span className={styles.name}>Shine</span>
            <span className={styles.styledPoint}>.</span>
          </h1>
          <h2 className={styles.description}>
            I'm a
            <span className={styles.role}>
              <GlitchText texts={roles} />
            </span>
            <span className={styles.styledPoint}>.</span> I build awesome
            websites
            {""} <br />
            and bring creative ideas to life on the web and on mobiles.
          </h2>
          <a href="src\docs\Resume.pdf" download="Resume" target="_blank">
            <button className={styles.resumeButton}>
              <p>Resume</p>
              <img src={downloadIcon} alt="Download resume" />
            </button>
          </a>
        </div>
        {viewWidth > 1100 && (
          <div className={classNames(styles.svgContainer)}>
            <img
              src={heroImage}
              alt="hero"
              className={classNames(styles.heroImage)}
            />
          </div>
        )}
      </div>
      <About />
      <ProjectsSection />
      <Contact />
    </>
  );
}

export default HomePage;
