/* eslint-disable react/prop-types */
// YoutubeChannel.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import YoutubeCard from "./YoutubeCard";
import Slider from "react-slick";
import "../styles/YoutubeChannel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const playlistId = "PLvl0L8dryx16xE00vzp-Lj9kai1zU2vfY";
const API_KEYS = ["AIzaSyBB4CfC7arv49MNUAQnv6Dz-d-DHEftCRU"];
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

const YoutubeChannel = ({ channelId, onVideoClick }) => {
  const [videos, setVideos] = useState({ recent: [], popular: [] });

  const fetchVideoDetails = async (videoIds, apiKeyIndex) => {
    try {
      const ids = videoIds.join("&id=");
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${ids}&key=${API_KEYS[apiKeyIndex]}`
      );
      console.log("call details");
      return response.data.items;
    } catch (error) {
      console.error(
        `Error fetching video details with API key index ${apiKeyIndex}`,
        error
      );
      if (apiKeyIndex + 1 < API_KEYS.length) {
        return fetchVideoDetails(videoIds, apiKeyIndex + 1);
      } else {
        return [];
      }
    }
  };

  const fetchVideos = async (apiKeyIndex = 0) => {
    if (apiKeyIndex >= API_KEYS.length) {
      console.error("All API keys have failed");
      return;
    }

    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=${playlistId}&key=${API_KEYS[apiKeyIndex]}`
      );
      console.log("call id");
      const videoIds = response.data.items.map(
        (item) => item.snippet.resourceId.videoId
      );
      const videoDetails = await fetchVideoDetails(videoIds, apiKeyIndex);

      // Combine video details with playlist items
      const videosWithDetails = response.data.items.map((item) => {
        const videoDetail = videoDetails.find(
          (detail) => detail.id === item.snippet.resourceId.videoId
        );
        return {
          ...item,
          snippet: {
            ...item.snippet,
            viewCount: videoDetail?.statistics.viewCount || 0,
            publishedAt: videoDetail?.snippet.publishedAt || "",
          },
        };
      });

      const dataWithTimestamp = {
        timestamp: Date.now(),
        data: videosWithDetails,
      };

      localStorage.setItem(
        "youtubePlaylistData",
        JSON.stringify(dataWithTimestamp)
      );
      // console.log(dataWithTimestamp);

      data.youtubePlaylistData = dataWithTimestamp;

      // Sort videos
      const recentVideos = [...videosWithDetails].sort(
        (a, b) =>
          new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
      );
      const popularVideos = [...videosWithDetails].sort(
        (a, b) => b.snippet.viewCount - a.snippet.viewCount
      );

      setVideos({ recent: recentVideos, popular: popularVideos });
    } catch (error) {
      console.error(
        `Error fetching playlist videos with API key index ${apiKeyIndex}`,
        error
      );
      fetchVideos(apiKeyIndex + 1);
    }
  };
  useEffect(() => {
    const loadVideos = () => {
      const cachedData = localStorage.getItem("youtubePlaylistData");
      // console.log(cachedData);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        // console.log(parsedData.data);
        const currentTime = Date.now();
        // Convert the timestamp into a human-readable format
        const lastFetchTime = new Date(parsedData.timestamp).toLocaleString();
        console.log("Last API call was made on:", lastFetchTime);
        if (currentTime - parsedData.timestamp < CACHE_DURATION) {
          console.log(parsedData.data);
          // console.log(parsedData.timestamp);
          // Sort videos
          setVideos({
            recent: [...parsedData.data].sort(
              (a, b) =>
                new Date(b.snippet.publishedAt) -
                new Date(a.snippet.publishedAt)

              // parsedData.data.sort(
              //   (a, b) =>
              //     new Date(b.snippet.publishedAt) -
              //     new Date(a.snippet.publishedAt)
            ),
            popular: [...parsedData.data].sort(
              (a, b) => b.snippet.viewCount - a.snippet.viewCount

              // parsedData.data.sort(
              //   (a, b) =>
              //     Number(b.snippet.viewCount) - Number(a.snippet.viewCount)
            ),
          });
          console.log(videos);
          return;
        }
      }
      fetchVideos();
    };

    loadVideos();
  }, [channelId]);

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="youtube-channel">
        <h1>Recent</h1>
        <Slider {...settings}>
          {videos.recent.map((video) => (
            <YoutubeCard
              key={video.snippet.resourceId.videoId}
              video={video}
              onClick={onVideoClick}
            />
          ))}
        </Slider>
      </div>
      <div className="youtube-channel">
        <h1>Popular</h1>
        <Slider {...settings}>
          {videos.popular.map((video) => (
            <YoutubeCard
              key={video.snippet.resourceId.videoId}
              video={video}
              onClick={onVideoClick}
            />
          ))}
        </Slider>
      </div>
      <div className="youtube-channel">
        <h1>Oldest</h1>
        <Slider {...settings}>
          {[...videos.recent].reverse().map((video) => (
            <YoutubeCard
              key={video.snippet.resourceId.videoId}
              video={video}
              onClick={onVideoClick}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default YoutubeChannel;
