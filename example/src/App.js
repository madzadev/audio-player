import React from 'react'
import Wrapper from './components/Wrapper'
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
<Wrapper>
<Header />
      <Player tracks={tracks} />
      <h1>Installation</h1>
      <p>npm install @madzadev/audio-player</p>
      <h1>Usage</h1>
      <p>import Player from '@madzadev/audio-player'</p>

      <h1>Options</h1>
      <h1>Features</h1>
      Play/Pause Next/Previous tracks Loop audio Shuffle play Drag progress bar Volume control Clickable playlist Filter audio files based on genre Search audio files by title Responsive design
      <h1>Color schemas</h1>
      <Footer />
  </Wrapper>
  )
}

export default App
