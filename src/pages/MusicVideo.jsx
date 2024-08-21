// MusicVideo.jsx
import React, { useState } from "react";
import "../styles/MusicVideo.css";
import YoutubeChannel from "../components/YoutubeChannel";
import MyYouTubePlayer from "../components/VideoPlayer";
import Footer from "../components/Footer";

function MusicVideo() {
  const [selectedVideoId, setSelectedVideoId] = useState("NC1Ng_k42hY");

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <section className="musicVideo">
      <div className="container">
        <MyYouTubePlayer videoId={selectedVideoId} className="player" />
        <YoutubeChannel
          channelId="UCzMH_wvOIMaZA5oXVgfGVcw"
          onVideoClick={handleVideoClick}
        />
      </div>
      <Footer />
    </section>
  );
}

export default MusicVideo;
