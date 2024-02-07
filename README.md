# React/NextJS Audio Player

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/madzadev/audio-player/graphs/commit-activity)
[![GitHub issues](https://img.shields.io/github/issues/madzadev/audio-player)](https://github.com/madzadev/audio-player/issues/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)

![Player Preview](https://i.imgur.com/qVX68ve.gif)

### Demo: [https://audioplayer.madza.dev](https://audioplayer.madza.dev)

---

## Requirements

Node.js 18.x / 20+ is required.

Tested on React 18.2.0 and NextJS 14.1.0.

## Installation

```javascript
 npm install @madzadev/audio-player
```

## Usage

```javascript
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
```

```javascript
const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];
```

```javascript
<Player trackList={tracks} />
```

The only mandatory prop is `trackList` for audio source.

It requires to pass in an array consisting of objects with `url`, `title` and `tags` keys.

## Options

There are multiple optional props you can use to configure the player.

The default values of them are displayed below.

```javascript
<Player
  trackList={tracks}
  includeTags={true}
  includeSearch={true}
  showPlaylist={true}
  sortTracks={true}
  autoPlayNextTrack={true}
/>
```

## Color schemes

You can customize the design of the player by editing the `colors` object below.

Include only those properties, that you want to customize.

```javascript
const colors = {
  tagsBackground: "#9440f3",
  tagsText: "#ffffff",
  tagsBackgroundHoverActive: "#2cc0a0",
  tagsTextHoverActive: "#ffffff",
  searchBackground: "#18191f",
  searchText: "#ffffff",
  searchPlaceHolder: "#575a77",
  playerBackground: "#18191f",
  titleColor: "#ffffff",
  timeColor: "#ffffff",
  progressSlider: "#9440f3",
  progressUsed: "#ffffff",
  progressLeft: "#151616",
  bufferLoaded: "#202222",
  volumeSlider: "#9440f3",
  volumeUsed: "#ffffff",
  volumeLeft: "#151616",
  playlistBackground: "#18191f",
  playlistText: "#575a77",
  playlistBackgroundHoverActive: "#18191f",
  playlistTextHoverActive: "#ffffff",
};
```

```javascript
<Player trackList={tracks} customColorScheme={colors} />
```

## Final notes

The audio files can be stored and accessed both locally in your project via file path (e.g., `public/yourtrack.mp3`) or using external host and providing direct URL to the source (e.g., `https://website.com/yourtrack.mp3`).

This project is under MIT license, so be free to check it out and contribute!
