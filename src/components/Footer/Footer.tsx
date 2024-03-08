import classNames from "classnames";
import styles from "./Footer.module.css";
import signature from "../../assets/shine_sign.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={classNames("hero-container-max-width")}>
        <div className={styles.footerFooter}>
          <p>
            This website is designed and developed by <i>me,</i>
          </p>
          <img src={signature} alt="Shine" className={styles.signature} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
