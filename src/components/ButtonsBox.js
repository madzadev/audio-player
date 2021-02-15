import React from 'react'
import styles from './ButtonsBox.module.css'

const ButtonsBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default ButtonsBox
