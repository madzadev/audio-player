import React from 'react'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'

import { Player } from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

const tracks = [
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Madza - AAAAAAA',
    tags: ['edm']
  },
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'Madza - BBBBBB',
    tags: ['chill']
  },
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
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
      <SyntaxHighlighter language='bash' style={dracula}>
        {`npm install @madzadev/audio-player`}
      </SyntaxHighlighter>
      <h1>Usage</h1>
      <SyntaxHighlighter language='javascript' style={dracula}>
        {`import Player from '@madzadev/audio-player'`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='javascript' style={dracula}>
        {`const tracks = [
          {
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            title: 'Madza - AAAAAAA',
            tags: ['edm']
          },
          {
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            title: 'Madza - BBBBBB',
            tags: ['chill']
          },
          {
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            title: 'Madza - CCCC',
            tags: ['bass']
          }
        ]`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='jsx' style={dracula}>
        {`<Player tracks={tracks} />`}
      </SyntaxHighlighter>
      <h1>Options</h1>
      <p>Include tags: Yes/No</p>
      <p>Include search: Yes/No</p>
      <p>Include shuffle: Yes/No</p>
      <p>Show playlist: Yes/No</p>
      <h1>Features</h1>
      Play/Pause Next/Previous tracks Loop audio Shuffle play Drag progress bar
      Volume control Clickable playlist Filter audio files based on genre Search
      audio files by title Responsive design
      <h1>Color schemas</h1>
      <Footer />
    </Wrapper>
  )
}

export default App
