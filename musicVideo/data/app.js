import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { recent } from "./data/recent.js";
import { popular } from "./data/popular.js";

function getRecentCardHTML() {
  let html = "";
  recent.items.forEach(function (item) {
    let imgUrl = item.snippet.thumbnails.standard
      ? item.snippet.thumbnails.standard.url
      : item.snippet.thumbnails.high.url;
    html += `
        <div class="card swiper-slide">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                
                <img
                    src="${imgUrl}"
                    alt=""
                    class="card-img"
                />
                </div>
            </div>
            <div class="card-content">
                <h class="order">#${item.snippet.position + 1}</h>
                <h2 class="name">${item.snippet.title}</h2>
                <a href="#details">
                <button class="button js-popup-button-recent" data-product-id="${
                  item.id
                }">View More</button>
                </a>
                
            </div>
        </div>
        `;
  });
  document.querySelector(".js-card-wrapper-recent").innerHTML = html;
}
function getOldestCardHTML() {
  let i = 0;
  let html = "";
  recent.items.reverse().forEach(function (item) {
    i++;
    let imgUrl = item.snippet.thumbnails.standard
      ? item.snippet.thumbnails.standard.url
      : item.snippet.thumbnails.high.url;
    html += `
        <div class="card swiper-slide">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                
                <img
                    src="${imgUrl}"
                    alt=""
                    class="card-img"
                />
                </div>
            </div>
            <div class="card-content">
                <h class="order">#${i}</h>
                <h2 class="name">${item.snippet.title}</h2>
                <a href="#details">
                <button class="button js-popup-button-recent" data-product-id="${item.id}">View More</button>
                </a>
                
            </div>
        </div>
        `;
  });
  document.querySelector(".js-card-wrapper-oldest").innerHTML = html;
}
function getPopularCardHTML() {
  let html = "";
  popular.items.forEach(function (item) {
    let imgUrl = item.snippet.thumbnails.standard
      ? item.snippet.thumbnails.standard.url
      : item.snippet.thumbnails.high.url;
    html += `
        <div class="card swiper-slide">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                
                <img
                    src="${imgUrl}"
                    alt=""
                    class="card-img"
                />
                </div>
            </div>
            <div class="card-content">
                <h class="order">#${item.snippet.position + 1}</h>
                <h2 class="name">${item.snippet.title}</h2>
                <a href="#details">
                <button class="button js-popup-button-popular" data-product-id="${
                  item.id
                }">View More</button>
                </a>
                
            </div>
        </div>
        `;
  });
  document.querySelector(".js-card-wrapper-popular").innerHTML = html;
}

getRecentCardHTML();
getPopularCardHTML();
getOldestCardHTML();

document.querySelectorAll(".js-popup-button-recent").forEach(function (button) {
  let html;
  button.addEventListener("click", function () {
    let contentDetails;
    let itemId = button.dataset.productId;
    recent.items.forEach(function (item) {
      if (item.id === itemId) {
        contentDetails = item.snippet;
      }
    });
    let releaseDate = contentDetails.publishedAt.substring(0, 10);
    let date = dayjs(releaseDate).format("MMMM D, YYYY");
    html = `
        <div class="popup__img">
              <iframe src="https://www.youtube.com/embed/${
                contentDetails.resourceId.videoId
              }"></iframe>
              <a href="#" class="popup__close">&times;</a>
            </div>
            <div class="popup__desc">
              <div class="popup__header">
                <h1>${contentDetails.title}</h1>
                <h4>Release Date: ${date}</h4>
              </div>
              <div class="popup__text">
                <p>
                  ${contentDetails.description.replace(/\n/g, "<br>")}}
                </p>
              </div>
              <a href="https://www.youtube.com/watch?v=${
                contentDetails.resourceId.videoId
              }/" class="button_close popup__btn">See More</a>
            </div>
        `;
    document.querySelector(".js-popup-content").innerHTML = html;
    localStorage.setItem("popupTarget", html);
  });
});
document.querySelectorAll(".js-popup-button-oldest").forEach(function (button) {
  let html;
  button.addEventListener("click", function () {
    let contentDetails;
    let itemId = button.dataset.productId;
    recent.items.forEach(function (item) {
      if (item.id === itemId) {
        contentDetails = item.snippet;
      }
    });
    let releaseDate = contentDetails.publishedAt.substring(0, 10);
    let date = dayjs(releaseDate).format("MMMM D, YYYY");
    html = `
        <div class="popup__img">
              <iframe src="https://www.youtube.com/embed/${
                contentDetails.resourceId.videoId
              }"></iframe>
              <a href="#" class="popup__close">&times;</a>
            </div>
            <div class="popup__desc">
              <div class="popup__header">
                <h1>${contentDetails.title}</h1>
                <h4>Release Date: ${date}</h4>
              </div>
              <div class="popup__text">
                <p>
                  ${contentDetails.description.replace(/\n/g, "<br>")}}
                </p>
              </div>
              <a href="https://www.youtube.com/watch?v=${
                contentDetails.resourceId.videoId
              }/" class="button_close popup__btn">See More</a>
            </div>
        `;
    document.querySelector(".js-popup-content").innerHTML = html;
    localStorage.setItem("popupTarget", html);
  });
});
document
  .querySelectorAll(".js-popup-button-popular")
  .forEach(function (button) {
    let html;
    button.addEventListener("click", function () {
      let contentDetails;
      let itemId = button.dataset.productId;
      popular.items.forEach(function (item) {
        if (item.id === itemId) {
          contentDetails = item.snippet;
        }
      });
      let releaseDate = contentDetails.publishedAt.substring(0, 10);
      let date = dayjs(releaseDate).format("MMMM D, YYYY");

      html = `
        <div class="popup__img">
              <iframe src="https://www.youtube.com/embed/${
                contentDetails.resourceId.videoId
              }"></iframe>
              <a href="#" class="popup__close">&times;</a>
            </div>
            <div class="popup__desc">
              <div class="popup__header">
                <h1>${contentDetails.title}</h1>
                <h4>Release Date: ${date}</h4>
              </div>
              <div class="popup__text">
                <p>
                  ${contentDetails.description.replace(/\n/g, "<br>")}}
                </p>
              </div>
              <a href="https://www.youtube.com/watch?v=${
                contentDetails.resourceId.videoId
              }/" class="button_close popup__btn">See More</a>
            </div>
        `;
      document.querySelector(".js-popup-content").innerHTML = html;
      localStorage.setItem("popupTarget", html);
    });
  });

let popupHistory = localStorage.getItem("popupTarget");
// console.log(popupHistory);
if (popupHistory) {
  document.querySelector(".js-popup-content").innerHTML = popupHistory;
}
