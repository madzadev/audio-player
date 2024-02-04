import React from "react";
import styles from "./PlaylistTemplate.module.css";

export const PlaylistTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
