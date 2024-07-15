import classNames from "classnames";
import styles from "./HomePage.module.css";
import useViewport from "../../hooks/useViewport";
import GlitchText from "../../components/GlicthText/GlitchText";
import heroImage from "../../assets/portfolio-hero-v1.svg";
import About from "../../components/About/About";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Contact from "../../components/Contact/Contact";

function HomePage() {
  const { viewWidth } = useViewport();
  const roles = ["front-end developer", "javascript developer"];
  return (
    <>
      <div className={classNames("hero-container-max-width", styles.container)}>
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
        </div>
        {viewWidth > 1100 && (
          <div className={styles.svgContainer}>
            <img src={heroImage} alt="hero" className={styles.heroImage} />
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
