import styles from './PlaylistTemplate.module.css'
import React from 'react'

const PlaylistTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default PlaylistTemplate
