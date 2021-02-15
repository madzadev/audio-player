import styles from "./TagItem.module.css";

const TagItem = (props) => {
  return (
    <div
      className={props.className == "active" ? styles.active : styles.tag}
      onClick={props.onClick}
    >
      {props.tag}
    </div>
  );
};

export default TagItem;
