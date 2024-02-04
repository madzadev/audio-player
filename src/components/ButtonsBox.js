import React from "react";
import styles from "./ButtonsBox.module.css";

export const ButtonsBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
