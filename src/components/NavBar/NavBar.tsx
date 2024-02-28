import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navbarContainer}>
      <h2>Shine Randriamialison</h2>
      <ul className={styles.menuUrlsContainer}>
        <a href="">
          <li>HOME</li>
        </a>
        <a href="">
          <li>ABOUT</li>
        </a>
        <a href="">
          <li>PROJECTS</li>
        </a>
        <a href="">
          <li>CONTACT</li>
        </a>
      </ul>
    </div>
  );
}

export default NavBar;
