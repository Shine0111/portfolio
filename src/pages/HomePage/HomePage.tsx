import classNames from "classnames";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={classNames("container-max-width", styles.container)}>
      <h1 className={styles.heroTitle}>
        Hi, my <br /> name is <span className={styles.name}>Shine</span>
        <span className={styles.styledPoint}>.</span>
      </h1>
    </div>
  );
}

export default HomePage;
