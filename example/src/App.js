import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import { Player } from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'

const tracks = [
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Madza - AAAAAAA',
    tags: ['edm']
  },
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Madza - BBBBBB',
    tags: ['chill']
  },
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Madza - CCCC',
    tags: ['bass']
  }
]

const App = () => {
  return (
    <>
      <Header />
      <Player tracks={tracks} />
      <h1>Installation</h1>
      <h1>Usage</h1>
      <h1>Options</h1>
      <h1>Features</h1>
      <h1>Color schemas</h1>
      <Footer />
    </>
  )
}

export default App
