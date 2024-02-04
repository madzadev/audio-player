import React from "react";
import styles from "./Play.module.css";

export const Play = ({ src, onClick }) => {
  return <img className={styles.play} src={src} onClick={onClick} />;
};
