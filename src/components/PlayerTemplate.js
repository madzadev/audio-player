import styles from './PlayerTemplate.module.css'
import React from 'react'

const PlayerTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default PlayerTemplate
