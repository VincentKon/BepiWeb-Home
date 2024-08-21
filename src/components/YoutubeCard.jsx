/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
// import "../styles/YoutubeCard.css";
import "../styles/YoutubeChannel.css";

const YoutubeCard = ({ video, onClick, index }) => {
  const title = video.snippet.title;
  const thumbnails = video.snippet.thumbnails;
  const videoId = video.snippet.resourceId.videoId;
  // console.log(index + " " + title);
  return (
    <div onClick={() => onClick(videoId)} className="card swiper-slide">
      <div className="card-border">
        <div className="image-content">
          <span className="overlay"></span>
          <div className="card-image">
            <img
              src={
                // thumbnails.maxres?.url ||
                thumbnails.standard?.url ||
                thumbnails.high?.url ||
                thumbnails.medium?.url
              }
              alt=""
              className="card-img"
            />
            <button className="top-left-btn">#{index + 1}</button>
          </div>
        </div>
        <div className="card-content">
          <h2 className="name">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;
