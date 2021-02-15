import React from 'react'
import styles from './PageTemplate.module.css'

const PageTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default PageTemplate
