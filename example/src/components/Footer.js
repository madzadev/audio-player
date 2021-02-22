import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <h3>
        Component and audio created by{' '}
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/madzadev'
        >
          Madza
        </a>
        .
      </h3>
      <h4>
        Have a suggestion?{' '}
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/madzadev/audio-player'
        >
          Contribute{' '}
        </a>
        to project!
      </h4>
      {/* <p>
        More music on{' '}
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.youtube.com/911madza'
        >
          YouTube
        </a>{' '}
        and{' '}
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://soundcloud.com/999madza'
        >
          SoundCloud
        </a>
        .
      </p> */}
    </div>
  )
}

export default Footer
