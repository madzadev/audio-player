import React from 'react'

import { Player } from 'audio-player-3'
import 'audio-player-3/dist/index.css'

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
      <h1>This is my audio player</h1>
      <Player tracks={tracks} />
    </>
  )
}

export default App
