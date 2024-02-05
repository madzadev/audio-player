import React from "react";
import styles from "./TagItem.module.css";

export const TagItem = ({ status, onClick, tag }) => {
  return (
    <div
      className={`${styles.tag} ${status == "active" ? styles.active : ""}`}
      onClick={onClick}
    >
      {tag}
    </div>
  );
};
