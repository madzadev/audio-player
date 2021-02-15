import styles from "./PlayerTemplate.module.css";

const PlayerTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PlayerTemplate;
