import React, { useEffect, useState } from "react";
import "./VideoGallery.css";

import Header from "../Header";
import Footer from "../Footer";

// 🔥 HERO IMPORT
import Hero from "../Hero/Hero2";

function VideoGallery() {

  const [songVideos, setSongVideos] = useState([]);
  const [messageVideos, setMessageVideos] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const API_KEY = "AIzaSyAGGzkBqZ_1jFXvYCalYjn5M0S5hhlmcwE";

  const SONG_PLAYLIST = "PLAjobZt-T5wzOZgmxGH6_UkIKUUpkEa2H";
  const MESSAGE_PLAYLIST = "PLAjobZt-T5wzccS9VpaCk9b6Llgq8dZNc";
  const CHANNEL_ID = "UC6BnmdAkOs2delp7bUmPzBA";

  const fetchPlaylist = (playlistId, setFunction) => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=${playlistId}&key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (!data.items) return;

        const list = data.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url
        }));

        setFunction(list);
      })
      .catch(err => console.error(err));
  };

  const fetchChannelVideos = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`)
      .then(res => res.json())
      .then(data => {
        if (!data.items) return;

        const list = data.items
          .filter(item => item.id.videoId)
          .map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url
          }));

        setChannelVideos(list);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchPlaylist(SONG_PLAYLIST, setSongVideos);
    fetchPlaylist(MESSAGE_PLAYLIST, setMessageVideos);
    fetchChannelVideos();
  }, []);

  const getVideos = () => {
    if (selected === "songs") return songVideos;
    if (selected === "messages") return messageVideos;
    if (selected === "channel") return channelVideos;
    return [];
  };

  return (
    <>
      <Header />

      {/* 🔥 HERO */}
      <Hero 
        title="Video Gallery" 
        subtitle="✿ Watch & Be Inspired" 
      />

      <section className="video-gallery">

        <h1 className="heading"> Video Gallery</h1>

        {!selected && (
          <div className="album-container">

            <div>
              <div className="album-card" onClick={() => setSelected("songs")}>
                <img 
                  src={songVideos.length > 0 ? songVideos[0].thumbnail : "https://via.placeholder.com/300x200"} 
                  alt="Songs" 
                />
                <div className="overlay">
                  {/* <div className="play-btn">▶</div> */}
                  <h3>Songs</h3>
                </div>
              </div>
              <h3>Songs</h3>
            </div>

            <div>
              <div className="album-card" onClick={() => setSelected("messages")}>
                <img src={messageVideos[0]?.thumbnail} alt="Messages" />
                <div className="overlay">
                  {/* <div className="play-btn">▶</div> */}
                  <h3>Messages</h3>
                </div>
              </div>
              <h3>Messages</h3>
            </div>

            <div>
              <div className="album-card" onClick={() => setSelected("channel")}>
                <img src={channelVideos[0]?.thumbnail} alt="Latest" />
                <div className="overlay">
                  {/* <div className="play-btn">▶</div> */}
                  <h3>Latest</h3>
                </div>
              </div>
              <h3>Latest</h3>
            </div>

          </div>
        )}

        {selected && (
          <>
            <button className="back-btn" onClick={() => setSelected(null)}>
              ⬅ Back
            </button>

            {/* <h2 className="album-title">
              {selected === "songs" && " Songs"}
              {selected === "messages" && " Messages"}
              {selected === "channel" && " Latest"}
            </h2> */}

            <div className="video-grid">
              {getVideos().map(video => (
                <div className="video-card" key={video.id}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                  <p>{video.title}</p>
                </div>
              ))}
            </div>
          </>
        )}

      </section>

      <Footer />
    </>
  );
}

export default VideoGallery;