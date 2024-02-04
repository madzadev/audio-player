import React from "react";
import styles from "./Volume.module.css";

export const Volume = ({ onChange, value }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="range"
        min="1"
        max="100"
        defaultValue="80"
        className={styles.slider}
        id="myRange"
        onChange={onChange}
        style={{
          background: `linear-gradient(90deg, var(--volumeUsed) ${
            value * 100
          }%, var(--volumeLeft) ${value * 100}%)`,
        }}
      />
    </div>
  );
};
