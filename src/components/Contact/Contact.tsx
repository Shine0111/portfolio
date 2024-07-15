import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import classNames from "classnames";
import styles from "./Contact.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div id="contact">
      <div className={styles.titleContainer}>
        <h2 className={classNames(styles.title, "italic-title")}>
          Get in touch
        </h2>
      </div>
      <div className={styles.contactContainer}>
        <div
          className={classNames("container-max-width", styles.formContainer)}
        >
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                <p>Name:</p>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                <p>Email:</p>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                <p>Message:</p>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={classNames(styles.input, styles.textarea)}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
