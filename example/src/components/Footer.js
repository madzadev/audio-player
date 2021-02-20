import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <h2>
        Component and audio samples created by{' '}
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/madzadev'
        >
          Madza
        </a>
      </h2>
      <h4>All my music in YouTube and SoundCloud.</h4>
    </div>
  )
}

export default Footer
