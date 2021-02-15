import styles from "./Shuffle.module.css";

const Shuffle = (props) => {
  return (
    <img className={styles.shuffle} src={props.src} onClick={props.onClick} />
  );
};

export default Shuffle;
