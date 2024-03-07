import classNames from "classnames";
import styles from "./HomePage.module.css";
import useViewport from "../../hooks/useViewport";
import GlitchText from "../../components/GlicthText/GlitchText";

function HomePage() {
  const { viewWidth } = useViewport();
  const roles = ["front-end developer", "javascript developer"];
  return (
    <div className={classNames("hero-container-max-width", styles.container)}>
      <div>
        <h1 className={styles.heroTitle}>
          Hi, my <br /> name is <span className={styles.name}>Shine</span>
          <span className={styles.styledPoint}>.</span>
        </h1>
        <h2 className={styles.description}>
          I'm a
          <span className={styles.role}>
            <GlitchText texts={roles} />
          </span>
          <span className={styles.styledPoint}>.</span> I build awesome websites
          {""} <br />
          and bring creative ideas to life on the web and on mobiles.
        </h2>
      </div>
      {viewWidth > 1120 && (
        <div className={styles.svgContainer}>
          <img src="src\assets\portfolio-hero-v1.svg" alt="hero" />
        </div>
      )}
    </div>
  );
}

export default HomePage;
