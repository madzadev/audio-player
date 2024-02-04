import React from "react";
import styles from "./ButtonsAndVolumeBox.module.css";

export const ButtonsAndVolumeBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
