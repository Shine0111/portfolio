import classNames from "classnames";
import styles from "./NavMenu.module.css";
import { useLocation } from "react-router-dom";
import useViewport from "../../hooks/useViewport";
import { Link } from "react-router-dom";
import {
  enableDarkMode,
  isDarkReaderEnabled,
  disableDarkMode,
} from "../../configs/darkmode";
import { Around } from "@theme-toggles/react";

interface Props {
  mobile?: boolean;
  onClickEvent?: (hash: string) => void;
}

const NavMenu = ({ mobile, onClickEvent }: Props) => {
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

  const handleLinkClick = (hash: string) => {
    if (onClickEvent) {
      onClickEvent(hash);
    }
  };

  const toggleDarkMode = () => {
    const isEnabled = isDarkReaderEnabled();
    if (!isEnabled) {
      enableDarkMode({
        brightness: 100,
        contrast: 100,
        sepia: 10,
      });
    } else {
      disableDarkMode();
    }
  };

  return (
    <div className={styles.superContainer}>
      <div className={getClassName()}>
        <Link to="/" onClick={() => handleLinkClick("#home")}>
          HOME
        </Link>
        <Link to="/#about" onClick={() => handleLinkClick("#about")}>
          ABOUT
        </Link>
        <Link to="/#projects" onClick={() => handleLinkClick("#projects")}>
          PROJECTS
        </Link>
        <Link to="/#contact" onClick={() => handleLinkClick("#contact")}>
          CONTACT
        </Link>
        <Around
          duration={750}
          placeholder={"theme"}
          onClickCapture={toggleDarkMode}
          style={{ marginLeft: "auto" }}
        />
      </div>
    </div>
  );
};

export default NavMenu;
