import styles from "./TagsTemplate.module.css";

const TagsTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default TagsTemplate;
