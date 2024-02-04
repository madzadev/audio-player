import React from "react";
import styles from "./TitleAndTimeBox.module.css";

export const TitleAndTimeBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
