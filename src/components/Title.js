import styles from "./Title.module.css";

const Title = (props) => {
  return <h1 className={styles.title}>{props.title}</h1>;
};

export default Title;
