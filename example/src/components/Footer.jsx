import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.contribute}>
        Have a suggestion?{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/madzadev/audio-player"
        >
          Contribute{" "}
        </a>
        to the project!
      </p>
      <p>
        Audio player & music by{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/madzadev"
        >
          Madza
        </a>
      </p>
    </div>
  );
};

export default Footer;
