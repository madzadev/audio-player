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
    url:
      'https://assets.ctfassets.net/zlsyc9paq6sa/71vPzAEAd6TejG1d3BXvBP/3f81f5c1d9e781f5c10f8711e7569e76/Caspa___Rusko_-_Rock_Bottom__Madza_Remake_.mp3',
    title: 'Madza - Departures',
    tags: ['edm']
  },
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'Madza - Faded',
    tags: ['chill']
  },
  {
    url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
    title: 'Madza - Persistence',
    tags: ['bass']
  }
]

const App = () => {
  // !multiple tags render
  // !search empty return message
  // !mobile view drag button worker
  // !mobile view title, volume and time positioning
  // !upper header, contribute to github, author
  // !change music included in examples
  // !first search result not playlist
  // !click tag do not play, if not play

  const colors = `html{
  --playerBackground: #18191f;
  --progressBar: #151616;
  --dragsAndTags: #9440f3;
  --tagsHover: #2cc0a0;
  --primaryText: #ffffff;
  --secondaryText: #575a77;
}`
  return (
    <Wrapper>
      <Header />
      {/* includeTags, includeSearch, showPlaylist */}
      <Player trackList={tracks} customColorScheme={colors} />
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
            url: 'https://www.audioplayer.madza.dev/Madza-Departures.mp3',
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
        {`<Player trackList={tracks} />`}
      </SyntaxHighlighter>
      <p className='warning'>
        <code>'trackList'</code> is the mandatory prop and requires to pass in
        an array consisting of objects with `url`, `title` and `tags` keys.
      </p>
      <p className='note'>
        Each object in the array represents single track. Multiple tags are
        possible per track.
      </p>
      <h1>Options</h1>
      <p className='note'>
        The default values of available options props are displayed below.
      </p>
      <SyntaxHighlighter language='jsx' style={coldarkDark}>
        {`<Player
        trackList={tracks}
        includeTags={true}
        includeSearch={true}
        showPlaylist={true}
        autoPlayNextTrack={true}
      />`}
      </SyntaxHighlighter>

      {/* <h1>Features</h1>
      Play/Pause Next/Previous tracks Loop audio Shuffle play Drag progress bar
      Volume control Clickable playlist Filter audio files based on genre Search
      audio files by title Responsive design */}
      <h1>Color schemas</h1>
      <p className='note'>
        The player uses 5 color palette by default. Custom color schemas are
        currently being designed.
      </p>
      <p className='warning'>
        For now, you can further customize the player by editing the colors
        variable below.
      </p>
      <SyntaxHighlighter language='javascript' style={coldarkDark}>
        {`const colors = \`html {
          --tagsBackground: #9440f3;
          --tagsText: #ffffff;
          --tagsBackgroundHoverActive: #2cc0a0;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #ffffff;
          --playerBackground: #18191f;
          --titleColor: #ffffff; 
          --timeColor: #ffffff;
          --progressSlider: #9440f3;
          --progressUsed: #ffffff;
          --progressLeft: #151616;
          --volumeSlider: #9440f3;
          --volumeUsed: #ffffff;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffffff;
      }\``}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='jsx' style={coldarkDark}>
        {`<Player
        trackList={tracks}
        customColorScheme={colors}
      />`}
      </SyntaxHighlighter>
      <h1>Sizing</h1>
      <p className='warning'>
        The player is set to span 100% of the width of the container you include
        it in.
      </p>
      <p className='note'>
        Tags, loop and shuffle functionality is currently disabled in mobile
        views.
      </p>
      <h1>Final notes</h1>
      <p className='warning'>
        It's recommended to use CMS like Contentful or DatoCMS to manage you
        audio files and access them via API.
      </p>
      <p className='note'>
        Other alternatives include Google Drive and Dropbox or store you audio
        files directly in the project.
      </p>
      <hr />
      <Footer />
    </Wrapper>
  )
}

export default App
