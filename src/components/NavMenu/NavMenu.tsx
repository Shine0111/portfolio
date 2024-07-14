import classNames from "classnames";
import styles from "./NavMenu.module.css";
import { useLocation } from "react-router-dom";
import useViewport from "../../hooks/useViewport";

interface Props {
  mobile?: boolean;
}

const NavMenu = ({ mobile }: Props) => {
  const location = useLocation();
  const { viewWidth } = useViewport();

  const getClassName = () => {
    return classNames({
      [styles.menuUrlsContainer]: !mobile,
      [styles.menuUrlsContainerMobile]: mobile && location.pathname === "/",
      [styles.menuUrlsContainerMobileLower]:
        mobile && location.pathname !== "/",
      [styles.menuUrlsContainerMobileLowerLower]:
        mobile && location.pathname !== "/" && viewWidth < 768,
    });
  };

  return (
    <div>
      <ul className={getClassName()}>
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
};

export default NavMenu;
