# React audio player

GIF image goes here

## Installation

```javascript
 npm install @madzadev/audio-player
```

## Usage

```javascript
import Player from 'audio-player'
```

```javascript
const tracks = [
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Madza - AAAAAAA",
    tags: ["edm"],
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    title: "Madza - BBBBBB",
    tags: ["chill"],
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3mp3",
    title: "Madza - CCCC",
    tags: ["bass"],
  },
];

<Player source={tracks}>
```

## Features

Play/Pause
Next/Previous tracks
Loop audio
Shuffle play
Drag progress bar
Volume control
Clickable playlist
Filter audio files based on genre
Search audio files by title
Responsive design

## Options

## Color Schemes

Images goes here.

## Support

The player is hooks-based, and will work with React 16.8.0 ('the one with hooks') or higher.
