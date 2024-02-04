import React from "react";
import styles from "./Next.module.css";

export const Next = ({ src, onClick }) => {
  return <img className={styles.next} src={src} onClick={onClick} />;
};
