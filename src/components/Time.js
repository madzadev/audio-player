import styles from "./Time.module.css";

const Time = (props) => {
  return <h1 className={styles.time}>{props.time}</h1>;
};

export default Time;
