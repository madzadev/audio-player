import styles from './TagsTemplate.module.css'
import React from 'react'

const TagsTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default TagsTemplate
