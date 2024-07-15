import classNames from "classnames";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h2 className="italic-title">Get in touch</h2>
      </div>
      <div className={classNames("container-max-width", styles.formContainer)}>
        Email
      </div>
    </div>
  );
};

export default Contact;
