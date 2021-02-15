import styles from "./Previous.module.css";

const Previous = (props) => {
  return (
    <img className={styles.previous} src={props.src} onClick={props.onClick} />
  );
};

export default Previous;
