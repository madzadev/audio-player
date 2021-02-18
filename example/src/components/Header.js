import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>React Player for your Music</h1>
      <p className={styles.description}>
        Based on hooks, requires React v.16.8+
      </p>
    </div>
  )
}

export default Header
