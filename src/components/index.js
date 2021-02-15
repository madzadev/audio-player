import styles from "../styles/Music.module.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import PageTemplate from "./PageTemplate";
import PlayerTemplate from "./PlayerTemplate";
import Title from "./Title";
import Time from "./Time";
import Progress from "./Progress";
import ButtonsBox from "./ButtonsBox";
import LoopCurrent from "./LoopCurrent";
import Previous from "./Previous";
import Play from "./Play";
import Pause from "./Pause";
import Next from "./Next";
import Shuffle from "./Shuffle";
import Volume from "./Volume";
import PlaylistTemplate from "./PlaylistTemplate";
import PlaylistItem from "./PlaylistItem";
import TagsTemplate from "./TagsTemplate";
import TagItem from "./TagItem";
import Search from "./Search";

function Player({ tracks }) {
  const [query, updateQuery] = useState("");

  let playlist = [];

  const [audio, setAudio] = useState(null);
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(0);
  const [time, setTime] = useState(0);
  const [slider, setSlider] = useState(1);
  const [drag, setDrag] = useState(0);
  const [volume, setVolume] = useState(0.8);
  let [end, setEnd] = useState(0);
  const [shuffled, setShuffled] = useState(false);
  const [looped, setLooped] = useState(false);

  const [filter, setFilter] = useState([]);
  let [curTrack, setCurTrack] = useState(0);

  // Helper function
  const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);

  useEffect(() => {
    const audio = new Audio(tracks[curTrack].url);

    const setAudioData = () => {
      setLength(audio.duration);
      setTime(audio.currentTime);
    };

    const setAudioTime = () => {
      const curTime = audio.currentTime;
      setTime(curTime);
      setSlider(curTime ? ((curTime * 100) / audio.duration).toFixed(1) : 0);
    };

    const setAudioVolume = () => setVolume(audio.volume);

    const setAudioEnd = () => setEnd((end += 1));

    // events on audio object
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("volumechange", setAudioVolume);
    audio.addEventListener("ended", setAudioEnd);

    setAudio(audio);
    setTitle(tracks[curTrack].title);
  }, []);

  const shufflePlaylist = (arr) => {
    if (arr.length === 1) return arr;
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...shufflePlaylist(arr.filter((_, i) => i != rand))];
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (shuffled) {
        playlist = shufflePlaylist(playlist);
      }
      !looped ? next() : play();
    }
  }, [end]);

  useEffect(() => {
    if (audio != null) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audio != null) {
      pause();
      const val = Math.round((drag * audio.duration) / 100);
      audio.currentTime = val;
    }
  }, [drag]);

  const play = () => {
    setActive(true);
    audio.play();
  };

  const pause = () => {
    setActive(false);
    audio.pause();
  };

  const loop = () => {
    setLooped(!looped);
  };

  useEffect(() => {
    if (audio != null) {
      audio.src = tracks[curTrack].url;
      setTitle(tracks[curTrack].title);
      play();
    }
  }, [curTrack]);

  const previous = () => {
    const index = playlist.indexOf(curTrack);
    index != 0
      ? setCurTrack((curTrack = playlist[index - 1]))
      : setCurTrack((curTrack = playlist[playlist.length - 1]));
  };

  const next = () => {
    const index = playlist.indexOf(curTrack);
    index != playlist.length - 1
      ? setCurTrack((curTrack = playlist[index + 1]))
      : setCurTrack((curTrack = playlist[0]));
  };

  const shuffle = () => {
    setShuffled(!shuffled);
  };

  const playlistItemClickHandler = (e) => {
    const num = Number(e.currentTarget.getAttribute("data-key"));
    const index = playlist.indexOf(num);
    setCurTrack((curTrack = playlist[index]));
  };

  const aaa = useRef(true);
  useEffect(() => {
    if (aaa.current) {
      aaa.current = false;
    } else {
      if (!playlist.includes(curTrack)) {
        setCurTrack((curTrack = playlist[0]));
      }
    }
  }, [filter]);

  const tagClickHandler = (e) => {
    const tag = e.currentTarget.innerHTML;
    if (!filter.includes(tag)) {
      setFilter([...filter, tag]);
    } else {
      let filteredArray = filter.filter((item) => item !== tag);
      setFilter([...filteredArray]);
    }
  };

  return (
    <PageTemplate>
      <TagsTemplate>
        {tracks
          .filter(
            (track, index, array) =>
              array.findIndex(
                (el) => el.tags.toString() === track.tags.toString()
              ) === index
          )
          .map((track, index) => {
            return (
              <TagItem
                key={index}
                className={
                  filter.length !== 0 && filter.includes(track.tags.toString())
                    ? "active"
                    : ""
                }
                tag={track.tags.toString()}
                onClick={tagClickHandler}
              />
            );
          })}
      </TagsTemplate>
      <Search
        value={query}
        onChange={(e) => updateQuery(e.target.value.toLowerCase())}
        placeholder={`Search ${tracks.length} tracks...`}
      />
      <PlayerTemplate>
        <div className={styles.title_time_wrapper}>
          <Title title={title} />
          <Time
            time={`${!time ? "0:00" : fmtMSS(time)}/${
              !length ? "0:00" : fmtMSS(length)
            }`}
          />
        </div>

        <Progress
          value={slider}
          onChange={(e) => {
            setSlider(e.target.value);
            setDrag(e.target.value);
          }}
          // !Fix onMouseUp on mobile (equal to ontouchend)
          onMouseUp={play}
        />
        <div className={styles.buttons_volume_wrapper}>
          <ButtonsBox>
            <LoopCurrent
              src={
                looped ? "./icons/loop_current.png" : "./icons/loop_none.png"
              }
              onClick={loop}
            />
            <Previous src={"./icons/previous.png"} onClick={previous} />
            {active ? (
              <Pause src={"./icons/pause.png"} onClick={pause} />
            ) : (
              <Play src={"./icons/play.png"} onClick={play} />
            )}
            <Next src={"./icons/next.png"} onClick={next} />
            <Shuffle
              src={
                shuffled
                  ? "./icons/shuffle_all.png"
                  : "./icons/shuffle_none.png"
              }
              onClick={shuffle}
            />
          </ButtonsBox>
          <Volume
            value={volume}
            onChange={(e) => {
              setVolume(e.target.value / 100);
            }}
          />
        </div>
      </PlayerTemplate>

      <PlaylistTemplate>
        {tracks
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .sort((a, b) => a.title.includes("Remix") - b.title.includes("Remix"))

          .map((el, index) => {
            if (filter.length === 0 || filter.includes(el.tags[0])) {
              playlist.push(index);

              return (
                <PlaylistItem
                  className={curTrack == index ? "active" : ""}
                  key={index}
                  data_key={index}
                  title={el.title}
                  src={el.url}
                  onClick={playlistItemClickHandler}
                />
              );
            }
          })}
      </PlaylistTemplate>
    </PageTemplate>
  );
}

// const client = require("contentful").createClient({
//   space: process.env.SPACE_ID,
//   accessToken: process.env.ACCESS_TOKEN,
// });

// export async function getStaticProps(context) {
//   const tracks = await client
//     .getEntries({ content_type: "audio" })
//     .then((response) => {
//       return response.items;
//     })
//     .catch(console.error);

//   return {
//     props: { tracks },
//   };
// }

export default Player;
