import classNames from "classnames";
import styles from "./NavMenu.module.css";
import { useLocation } from "react-router-dom";
import useViewport from "../../hooks/useViewport";

interface Props {
  mobile?: boolean;
  onClickEvent?: () => void;
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

  return (
    <div>
      <ul className={getClassName()}>
        <a href="/">
          <li onClick={() => onClickEvent?.()}>HOME</li>
        </a>
        <a href="/#about" onClick={() => onClickEvent?.()}>
          <li>ABOUT</li>
        </a>
        <a href="/#projects" onClick={() => onClickEvent?.()}>
          <li>PROJECTS</li>
        </a>
        <a href="/#contact" onClick={() => onClickEvent?.()}>
          <li>CONTACT</li>
        </a>
      </ul>
    </div>
  );
};

export default NavMenu;
