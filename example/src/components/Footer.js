import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <h2>
        Component and audio samples created by{' '}
        <a className='link' href='https://github.com/madzadev'>
          Madza
        </a>
      </h2>
      <h4>Check out my other music</h4>
    </div>
  )
}

export default Footer
