import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import YoutubeCard from "./YoutubeCard";
export const Slider2 = ({ videos }) => {
  return (
    <>
      <div className="js-slide-content-recent slide-content">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={25}
          slidesPerView={3}
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
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            840: {
              slidesPerView: 2,
            },
            1170: {
              slidesPerView: 3,
            },
            1540: {
              slidesPerView: 4,
            },
            2000: {
              slidesPerView: 5,
            },
            2500: {
              slidesPerView: 6,
            },
          }}
        >
          <div className="card-wrapper swiper-wrapper js-card-wrapper-recent">
            {videos.map((video) => (
              <SwiperSlide key={video.snippet.resourceId.videoId}>
                <YoutubeCard
                  key={video.snippet.resourceId.videoId}
                  video={video}
                  onClick={onVideoClick}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="swiper-button-next swiper-navBtn js-swiper-button-next-recent"></div>
      <div className="swiper-button-prev swiper-navBtn js-swiper-button-prev-recent"></div>
      <div className="swiper-pagination js-swiper-pagination-recent"></div>
    </>
  );
};
