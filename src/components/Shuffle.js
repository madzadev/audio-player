import styles from './Shuffle.module.css'
import React from 'react'

const Shuffle = (props) => {
  return (
    <img className={styles.shuffle} src={props.src} onClick={props.onClick} />
  )
}

export default Shuffle
