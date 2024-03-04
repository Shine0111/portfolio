import classNames from "classnames";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={classNames("hero-container-max-width")}>
        <div className={styles.footerFooter}>
          <p>
            This website is designed and developed by <i>me,</i>
          </p>
          <img
            src="src\assets\shine_sign.png"
            alt="Shine Signature"
            className={styles.signature}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
