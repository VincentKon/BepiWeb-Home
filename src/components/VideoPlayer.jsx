// MyYouTubePlayer.js
import React from "react";
import YouTube from "react-youtube";
import "../styles/VideoPlayer.css";

// eslint-disable-next-line react/prop-types
const MyYouTubePlayer = ({ videoId }) => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="border">
      <div className="video-responsive">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
    </div>
  );
};

export default MyYouTubePlayer;
