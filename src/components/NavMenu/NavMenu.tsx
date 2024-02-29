import styles from "./NavMenu.module.css";

interface Props {
  mobile?: boolean;
}

const NavMenu = ({ mobile }: Props) => {
  return (
    <>
      <ul
        className={
          mobile ? styles.menuUrlsContainerMobile : styles.menuUrlsContainer
        }
      >
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
    </>
  );
};

export default NavMenu;
