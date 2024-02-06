import React from "react";
import styles from "./PlaylistTemplate.module.css";

export const PlaylistTemplate = ({ children, visibility }) => {
  return visibility && <div className={styles.wrapper}>{children}</div>;
};
