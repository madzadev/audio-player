import styles from "./Play.module.css";

const Play = (props) => {
  return (
    <img className={styles.play} src={props.src} onClick={props.onClick} />
  );
};

export default Play;
