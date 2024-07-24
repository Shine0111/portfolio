import { isDarkReaderEnabled } from "../../configs/darkmode";
import styles from "./HamburgerButton.module.css";

interface Props {
  open: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ open, onClick }: Props) => {
  return (
    <div
      className={
        open ? styles.hamburgerMenu : `${styles.hamburgerMenu} ${styles.open}`
      }
    >
      <button
        className={
          isDarkReaderEnabled?.() ? styles.menuIconWhite : styles.menuIcon
        }
        onClick={onClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default HamburgerButton;
