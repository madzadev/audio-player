import React from "react";
import styles from "./Progress.module.css";

export const Progress = ({
  value,
  onChange,
  onMouseUp,
  onTouchEnd,
  progress,
}) => {
  return (
    <div className={styles.container}>
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={value}
        className={styles.slider}
        id="myRange"
        onChange={onChange}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        style={{
          background: `linear-gradient(90deg, var(--progressUsed) 0%, var(--progressUsed) ${Math.floor(
            value
          )}%, var(--bufferLoaded) ${Math.floor(
            value
          )}%, var(--bufferLoaded) ${Math.floor(
            progress
          )}%, var(--progressLeft) ${Math.floor(
            progress
          )}%, var(--progressLeft) 100%)`,
          // background: `linear-gradient(90deg, var(--progressUsed) ${Math.floor(
          //   value
          // )}%, var(--progressLeft) ${Math.floor(value)}%)`,
        }}
      />
    </div>
  );
};
