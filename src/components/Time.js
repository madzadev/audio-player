import styles from './Time.module.css'
import React from 'react'

const Time = (props) => {
  return <h1 className={styles.time}>{props.time}</h1>
}

export default Time
