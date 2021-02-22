import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        Player component and audio samples created by{' '}
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/madzadev'
        >
          Madza
        </a>
      </p>
      <p>
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
      </p>
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
