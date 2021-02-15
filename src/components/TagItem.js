import styles from './TagItem.module.css'
import React from 'react'

const TagItem = (props) => {
  return (
    <div
      className={props.className == 'active' ? styles.active : styles.tag}
      onClick={props.onClick}
    >
      {props.tag}
    </div>
  )
}

export default TagItem
