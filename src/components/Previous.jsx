import React from "react";
import styles from "./Previous.module.css";

export const Previous = ({ src, onClick }) => {
  return <img className={styles.previous} src={src} onClick={onClick} />;
};
