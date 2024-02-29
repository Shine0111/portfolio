import useViewport from "../../hooks/useViewport";
import styles from "./NavBar.module.css";
import classNames from "classnames";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

function NavBar() {
  const { viewWidth, breakpoint } = useViewport();
  const [isMenu, setIsMenu] = useState(false);
  const handleMenuButton = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div className={styles.header}>
      <div
        className={classNames(styles.navbarContainer, "container-max-width")}
      >
        <h2 className={styles.logoText}>Shine Randriamialison</h2>
        {viewWidth >= breakpoint && <NavMenu />}
        {viewWidth < breakpoint && (
          <HamburgerButton open={isMenu} onClick={handleMenuButton} />
        )}
      </div>
      {isMenu || (viewWidth < breakpoint && <NavMenu mobile />)}
    </div>
  );
}

export default NavBar;
