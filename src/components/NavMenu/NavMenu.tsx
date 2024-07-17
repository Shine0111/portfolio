import classNames from "classnames";
import styles from "./NavMenu.module.css";
import { useLocation } from "react-router-dom";
import useViewport from "../../hooks/useViewport";
import { Link } from "react-router-dom";

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
      {/* <ul className={getClassName()}>
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
      </ul> */}
      <div className={getClassName()}>
        <Link to="/" onClick={onClickEvent}>
          HOME
        </Link>
        <Link to="/#about" onClick={onClickEvent}>
          ABOUT
        </Link>
        <Link to="/#projects" onClick={onClickEvent}>
          PROJECTS
        </Link>
        <Link to="/#contact" onClick={onClickEvent}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
