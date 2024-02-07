import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.credits}>
        Audio player and music created by{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/madzadev"
        >
          Madza
        </a>
        !
      </p>
      <p>
        Have a suggestion?{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/madzadev/audio-player"
        >
          Contribute{" "}
        </a>
        to project!
      </p>
    </div>
  );
};

export default Footer;
