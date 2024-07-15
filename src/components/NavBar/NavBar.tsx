import useViewport from "../../hooks/useViewport";
import styles from "./NavBar.module.css";
import classNames from "classnames";
import NavMenu from "../NavMenu/NavMenu";
import { useEffect, useState } from "react";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import useScrollDetector from "../../hooks/useScrollDetector";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { viewWidth, breakpoint } = useViewport();
  const isScrolling = useScrollDetector();
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  // Close mobile Menu when window width gets larger
  useEffect(() => {
    if (viewWidth > breakpoint) setIsMenu(true);
    if (viewWidth < breakpoint) setIsMenu(true);
  }, [viewWidth, breakpoint]);
  const handleMenuButton = () => {
    setIsMenu(!isMenu);
  };

  const getStickyClassName = isScrolling ? "sticky" : "";

  return (
    <div className={classNames(styles.header, getStickyClassName)}>
      <div
        className={classNames(
          styles.navbarContainer,
          "hero-container-max-width"
        )}
      >
        <h2 className={styles.logoText} onClick={() => navigate("/")}>
          Shine Randriamialison
        </h2>
        {viewWidth >= breakpoint && <NavMenu />}
        {viewWidth < breakpoint && (
          <HamburgerButton open={isMenu} onClick={handleMenuButton} />
        )}
      </div>
      {isMenu ||
        (viewWidth < breakpoint && (
          <NavMenu onClickEvent={() => setIsMenu(!isMenu)} mobile />
        ))}
    </div>
  );
}

export default NavBar;
