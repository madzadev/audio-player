import styles from "./PlaylistItem.module.css";

const PlaylistItem = (props) => {
  return (
    <p
      className={props.className == "active" ? styles.active : styles.track}
      data-key={props.data_key}
      src={props.src}
      title={props.title}
      onClick={props.onClick}
    >
      {props.title}
    </p>
  );
};

export default PlaylistItem;
