import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>React component for your Music</h1>
    </div>
  )
}

export default Header
