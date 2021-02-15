import styles from './Title.module.css'
import React from 'react'

const Title = (props) => {
  return <h1 className={styles.title}>{props.title}</h1>
}

export default Title
