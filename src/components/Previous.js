import styles from './Previous.module.css'
import React from 'react'

const Previous = (props) => {
  return (
    <img className={styles.previous} src={props.src} onClick={props.onClick} />
  )
}

export default Previous
