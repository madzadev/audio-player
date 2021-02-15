import React from 'react'
import styles from './Next.module.css'

const Next = (props) => {
  return <img className={styles.next} src={props.src} onClick={props.onClick} />
}

export default Next
