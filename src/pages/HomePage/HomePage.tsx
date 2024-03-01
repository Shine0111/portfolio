import classNames from "classnames";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={classNames("container-max-width", styles.container)}>
      <h1 className={styles.heroTitle}>
        Hi, my <br /> name is <span className={styles.name}>Shine</span>
        <span className={styles.styledPoint}>.</span>
      </h1>
      <h2 className={styles.description}>
        I'm a <span className={styles.role}>front-end developer</span>
        <span className={styles.styledPoint}>.</span> I build awesome websites{" "}
        <br /> and bring creative ideas to life on the web and on mobiles.
      </h2>
    </div>
  );
}

export default HomePage;
