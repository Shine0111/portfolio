import useViewport from "../../hooks/useViewport";
import styles from "./NavBar.module.css";
import classNames from "classnames";
import NavMenu from "../NavMenu/NavMenu";
import { useEffect, useState } from "react";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { useNavigate } from "react-router-dom";
import { useHash } from "../../contexts/HashContext";

function NavBar() {
  const { viewWidth, breakpoint } = useViewport();
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();
  const { setHash } = useHash();

  // Close mobile Menu when window width gets larger
  useEffect(() => {
    if (viewWidth > breakpoint) setIsMenu(true);
    if (viewWidth < breakpoint) setIsMenu(true);
  }, [viewWidth, breakpoint]);
  const handleMenuButton = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className={classNames(styles.header, "sticky")}>
      <div
        className={classNames(
          styles.navbarContainer,
          "hero-container-max-width"
        )}
      >
        <h2
          className={styles.logoText}
          onClick={() => {
            navigate("/");
            setHash("#home");
          }}
        >
          Shine Randriamialison
        </h2>
        {viewWidth >= breakpoint && (
          <NavMenu onClickEvent={(hash) => setHash(hash)} />
        )}
        {viewWidth < breakpoint && (
          <HamburgerButton open={isMenu} onClick={handleMenuButton} />
        )}
      </div>
      {isMenu ||
        (viewWidth < breakpoint && (
          <NavMenu
            onClickEvent={(hash) => {
              setIsMenu(!isMenu);
              setHash(hash);
            }}
            mobile
          />
        ))}
    </div>
  );
}

export default NavBar;
