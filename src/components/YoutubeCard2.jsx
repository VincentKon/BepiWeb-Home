/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "../styles/YoutubeCard.css";

const YoutubeCard = ({ video, onClick }) => {
  const title = video.snippet.title;
  const thumbnails = video.snippet.thumbnails;
  const videoId = video.snippet.resourceId.videoId;
  return (
    <div onClick={() => onClick(videoId)} className="youtube-card-container">
      <a className="youtube-card">
        <img
          src={
            // thumbnails.maxres?.url ||
            thumbnails.standard?.url ||
            thumbnails.high?.url ||
            thumbnails.medium?.url
          }
          alt={title}
        />
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default YoutubeCard;
