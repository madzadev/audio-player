import React from 'react'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'

import { Player } from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const tracks = [
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Madza - Departures',
    tags: ['edm']
  },
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'Madza - Faded',
    tags: ['chill']
  },
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    title: 'Madza - Persistence',
    tags: ['bass']
  }
]

const App = () => {
  const colors = `html{
  --playerBackground: #18191f;
  --progressBackground: #151616;
  --buttonColor: #067c29;
  --tagsHoverColor: #2cc0a0;
  --primaryColor: #ffffff;
  --secondaryText: #696969;
}`
  return (
    <Wrapper>
      <Header />
      {/* includeTags, includeSearch, showPlaylist */}
      <Player tracks={tracks} customColorScheme={colors} />
      <h1>Installation</h1>
      <SyntaxHighlighter language='bash' style={coldarkDark}>
        {`npm install @madzadev/audio-player`}
      </SyntaxHighlighter>
      <h1>Usage</h1>
      <SyntaxHighlighter language='javascript' style={coldarkDark}>
        {`import Player from '@madzadev/audio-player'`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='javascript' style={coldarkDark}>
        {`const tracks = [
          {
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            title: 'Madza - Departures',
            tags: ['edm']
          },
          {
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            title: 'Madza - Faded',
            tags: ['chill']
          },
          {
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            title: 'Madza - Persistence',
            tags: ['bass']
          }
        ]`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='jsx' style={coldarkDark}>
        {`<Player tracks={tracks} />`}
      </SyntaxHighlighter>
      <p className='note'>
        'tracks' is the mandatory prop and requires to pass in an array
        consisting of objects with `url`, `title` and `tags` keys.
      </p>
      <p className='note'>Each object in the array represents single track.</p>
      <h1>Options</h1>
      <SyntaxHighlighter language='jsx' style={coldarkDark}>
        {`<Player
        tracks={tracks}
        includeTags={true}
        includeSearch={true}
        showPlaylist={true}
        autoPlayNextTrack={true}
      />`}
      </SyntaxHighlighter>
      <p className='note'>
        In the above example the default values are displayed.
      </p>
      <h1>Features</h1>
      Play/Pause Next/Previous tracks Loop audio Shuffle play Drag progress bar
      Volume control Clickable playlist Filter audio files based on genre Search
      audio files by title Responsive design
      <h1>Color schemas</h1>
      <p className='note'>The player uses 5 color palette.</p>
      <SyntaxHighlighter language='javascript' style={coldarkDark}>
        {`const colors = 'html {
          --playerBackground: #18191f;
          --progressBackground: #151616;
          --buttonColor: #067c29;
          --tagsHoverColor: #2cc0a0;
          --primaryColor: #ffffff;
          --secondaryText: #696969;
      }'`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='jsx' style={coldarkDark}>
        {`<Player
        tracks={tracks}
        customColorScheme={colors}
      />`}
      </SyntaxHighlighter>
      <h1>Final notes</h1>
      <p className='note'>
        It's recommended to use CMS like Contentful or DatoCMS to manage you
        audio files and access them via API.
      </p>
      <p className='note'>
        Other alternatives include Google Drive and Dropbox or store you audio
        files directly in the project.
      </p>
      <Footer />
    </Wrapper>
  )
}

export default App
