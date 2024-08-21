/* eslint-disable react/prop-types */
// YoutubeChannel.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import YoutubeCard from "./YoutubeCard";
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {
  Mousewheel,
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
  Keyboard,
} from "swiper/modules";
// import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

import "../styles/YoutubeChannel.css";
const playlistId = "PLvl0L8dryx16xE00vzp-Lj9kai1zU2vfY";
const API_KEYS = ["AIzaSyBB4CfC7arv49MNUAQnv6Dz-d-DHEftCRU"];
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
let i = 0;
let j = 0;
let k = 0;
const YoutubeChannel = ({ onVideoClick }) => {
  const [videos, setVideos] = useState({ recent: [], popular: [], oldest: [] });

  const fetchVideoDetails = async (videoIds, apiKeyIndex) => {
    try {
      const ids = videoIds.join("&id=");
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${ids}&key=${API_KEYS[apiKeyIndex]}`
      );
      console.log("call details:");
      console.log(response.data.items);
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
      console.log("call id:");
      console.log(response.data.items);
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
      localStorage.clear("youtubePlaylistData");
      console.log("Storing to local:");
      console.log(videosWithDetails);
      localStorage.setItem(
        "youtubePlaylistData",
        JSON.stringify(dataWithTimestamp)
      );

      // Sort videos
      const recentVideos = [...videosWithDetails].sort(
        (a, b) =>
          new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
      );
      const popularVideos = [...videosWithDetails].sort(
        (a, b) => b.snippet.viewCount - a.snippet.viewCount
      );

      setVideos({ recent: recentVideos, popular: popularVideos });
      console.log("After fetching, resulting:");
      console.log(recentVideos);
      console.log(popularVideos);
      console.log(videos);
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
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        // console.log(parsedData);
        const currentTime = Date.now();
        // Convert the timestamp into a human-readable format
        const lastFetchTime = new Date(parsedData.timestamp).toLocaleString();
        console.log("Last API call was made on:", lastFetchTime);
        if (currentTime - parsedData.timestamp < CACHE_DURATION) {
          console.log("Not fetching, restore from local");
          // Sort videos
          console.log(parsedData);

          setVideos({
            recent: [...parsedData.data].sort(
              (a, b) =>
                new Date(b.snippet.publishedAt) -
                new Date(a.snippet.publishedAt)
            ),
            popular: [...parsedData.data].sort(
              (a, b) => b.snippet.viewCount - a.snippet.viewCount
            ),
          });
          return;
        }
        console.log("already more than 6 hours");
      }
      console.log("fetching data...");
      fetchVideos();
      console.log(videos);
    };
    i = -30;
    j = -30;
    k = -30;
    loadVideos();
  }, []);

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
  // console.log(videos.recent);
  // console.log(videos.popular);
  return (
    <>
      <div className="page-title">
        <h1>Music Video</h1>
      </div>
      <div className="slider">
        {/* <div className=""> */}
        <div className="slide-container swiper">
          <h1>Recent</h1>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            grabCursor={true}
            mousewheel={true}
            navigation={{
              nextEl: ".js-swiper-button-next-recent",
              prevEl: ".js-swiper-button-prev-recent",
            }}
            pagination={{
              el: ".js-swiper-pagination-recent",
              clickable: true,
              dynamicBullets: true,
            }}
            scrollbar={{ el: ".swiper-scrollbar", draggable: true }}
            modules={[
              Mousewheel,
              Keyboard,
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
            ]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              710: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1550: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              2000: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              2500: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
          >
            <div className="asola">
              <div className="card-wrapper swiper-wrapper js-card-wrapper-recent">
                {videos.recent.map((video, index) => (
                  <SwiperSlide key={video.snippet.resourceId.videoId}>
                    <YoutubeCard
                      key={video.snippet.resourceId.videoId}
                      video={video}
                      index={index}
                      onClick={onVideoClick}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </div>
            <div className="swiper-button-next swiper-navBtn js-swiper-button-next-recent"></div>
            <div className="swiper-button-prev swiper-navBtn js-swiper-button-prev-recent"></div>
            {/* <div className=" js-swiper-button-next-recent button-slide">
              <FaArrowAltCircleRight
                className="navigation-button"
                style={iconStyles}
              />
            </div>
            <div className=" js-swiper-button-prev-recent button-slide">
              <FaArrowAltCircleLeft
                className="navigation-button"
                style={iconStyles}
              />
            </div> */}
            <div className="swiper-scrollbar"></div>
            <div className="swiper-pagination js-swiper-pagination-recent"></div>
          </Swiper>
        </div>
        <div className="slide-container swiper">
          <h1>Popular</h1>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            grabCursor={true}
            mousewheel={true}
            navigation={{
              nextEl: ".js-swiper-button-next-recent",
              prevEl: ".js-swiper-button-prev-recent",
            }}
            pagination={{
              el: ".js-swiper-pagination-recent",
              clickable: true,
              // dynamicBullets: true,
            }}
            scrollbar={{ draggable: true }}
            modules={[
              Mousewheel,
              Keyboard,
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
            ]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              710: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1550: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              2000: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              2500: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
          >
            <div className="asola">
              <div className="card-wrapper swiper-wrapper js-card-wrapper-recent">
                {videos.popular.map((video, index) => (
                  <SwiperSlide key={video.snippet.resourceId.videoId}>
                    <YoutubeCard
                      key={video.snippet.resourceId.videoId}
                      video={video}
                      index={index}
                      onClick={onVideoClick}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </div>
            <div className="swiper-button-next swiper-navBtn js-swiper-button-next-recent"></div>
            <div className="swiper-button-prev swiper-navBtn js-swiper-button-prev-recent"></div>
            {/* <div className=" js-swiper-button-next-recent button-slide">
              <FaArrowAltCircleRight
                className="navigation-button"
                style={iconStyles}
              />
            </div>
            <div className=" js-swiper-button-prev-recent button-slide">
              <FaArrowAltCircleLeft
                className="navigation-button"
                style={iconStyles}
              />
            </div> */}
            <div className="swiper-pagination js-swiper-pagination-recent"></div>
          </Swiper>
        </div>
        <div className="slide-container swiper">
          <h1>Oldest</h1>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            grabCursor={true}
            // loop={true}
            mousewheel={true}
            navigation={{
              nextEl: ".js-swiper-button-next-recent",
              prevEl: ".js-swiper-button-prev-recent",
            }}
            pagination={{
              el: ".js-swiper-pagination-recent",
              clickable: true,
              // dynamicBullets: true,
            }}
            scrollbar={{ draggable: true }}
            modules={[
              Mousewheel,
              Keyboard,
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
            ]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              710: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1550: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              2000: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              2500: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
          >
            <div className="asola">
              <div className="card-wrapper swiper-wrapper js-card-wrapper-recent">
                {[...videos.recent].reverse().map((video, index) => (
                  <SwiperSlide key={video.snippet.resourceId.videoId}>
                    <YoutubeCard
                      key={video.snippet.resourceId.videoId}
                      video={video}
                      index={index}
                      onClick={onVideoClick}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </div>
            <div className="swiper-button-next swiper-navBtn js-swiper-button-next-recent"></div>
            <div className="swiper-button-prev swiper-navBtn js-swiper-button-prev-recent"></div>
            {/* <div className=" js-swiper-button-next-recent button-slide">
              <FaArrowAltCircleRight
                className="navigation-button"
                style={iconStyles}
              />
            </div>
            <div className=" js-swiper-button-prev-recent button-slide">
              <FaArrowAltCircleLeft
                className="navigation-button"
                style={iconStyles}
              />
            </div> */}
            <div className="swiper-pagination js-swiper-pagination-recent"></div>
          </Swiper>
        </div>
        {/* </div> */}
      </div>
      {/* <div className="youtube-channel">
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
      </div> */}
    </>
  );
};

export default YoutubeChannel;
