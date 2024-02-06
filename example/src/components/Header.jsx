import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Audio Player for your Music</h1>
      <p className={styles.description}>
        Node.js 18.x / 20+ is required. Tested on React 18.2.0 and NextJS
        14.1.0.
      </p>
    </div>
  );
};

export default Header;
