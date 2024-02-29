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
      <button className={styles.menuIcon} onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default HamburgerButton;
