import styles from './Play.module.css'
import React from 'react'

const Play = (props) => {
  return <img className={styles.play} src={props.src} onClick={props.onClick} />
}

export default Play
