import React from "react";
import styles from "./Search.module.css";

export const Search = ({ onChange, value, placeholder }) => {
  return (
    <input
      type="text"
      name="search"
      className={styles.search}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
