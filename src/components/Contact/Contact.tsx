import { useState, ChangeEvent, FormEvent, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import classNames from "classnames";
import styles from "./Contact.module.css";
import { useHash } from "../../contexts/HashContext";
import { isDarkReaderEnabled } from "../../configs/darkmode";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMailSent, setIsMailSent] = useState<boolean>(false);
  const { hash, setHash } = useHash();

  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hash === "#contact") {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }

    return () => setHash("");
  }, [hash, setHash]);

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

    setIsLoading(true);

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
          setIsLoading(false);
          setIsMailSent(true);
        },
        (err) => {
          console.log("FAILED...", err);
          setIsLoading(false);
          setIsMailSent(false);
        }
      );
  };

  return (
    <div id="contact" className="container-max-width" ref={contactRef}>
      <div className={styles.titleContainer}>
        <h2 className={classNames(styles.title, "italic-title")}>
          Get in touch
        </h2>
      </div>
      <div className={styles.contactContainer}>
        <div
          className={classNames(
            "container-max-width",
            `${
              isDarkReaderEnabled()
                ? styles.formContainerDark
                : styles.formContainer
            }`
          )}
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
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isMailSent ? true : false}
            >
              {isLoading && <span className="loader"></span>}
              {!isLoading && <span>{isMailSent ? "Sent" : "Send"}</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
