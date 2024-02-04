import React from "react";
import styles from "./PlayerTemplate.module.css";

export const PlayerTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
