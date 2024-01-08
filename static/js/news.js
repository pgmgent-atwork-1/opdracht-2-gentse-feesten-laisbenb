/* ---------------- JSON FILE READER ---------------- */

import {getNews} from "./fetchData.js";

/* ---------------- GENERATE LOGO AND IMAGE SYNCH ---------------- */

const randomNumber = Math.floor(Math.random() * 6) + 1;

function getNewsPageLogo() {
    const firstLogo = document.getElementById('gf-header-logo');
    const secondLogo = document.getElementById('gf-footer-logo');
    const thirdLogo = document.getElementById('gf-menu-logo');
    const logoSrc = `static/img/Gentse Feesten Logos/GF-logo-2023-${randomNumber}.svg`;
    firstLogo.src = logoSrc;
    secondLogo.src = logoSrc;
    thirdLogo.src = logoSrc;
};

function getNewsPageImage() {
    const secondImage = document.getElementById('gf-footer-image');
    const thirdImage = document.getElementById('gf-menu-image');
    const imageSrc = `static/img/Gentse Feesten Logos/campagne-${randomNumber}.png`;
    secondImage.src = imageSrc;
    thirdImage.src = imageSrc;
};

/* ---------------- LOAD IN NEWS ITEMS ---------------- */

async function getNewsPageItems() {
    const newsItems = await getNews();
    generateNewsPageItems(newsItems);
};

function generateNewsPageItems(newsItems) {
   console.log(newsItems);
   const newNewsItems = document.getElementById('newsItems');
   let html = "";
   for (const newsItem in newsItems) {
    html += `<article class="newsbox flex relative">
    <div class="left-newsbox">
        <h2>${newsItems[newsItem].title}</h2>
    </div>
        <img src="${newsItems[newsItem].picture.large}" alt="News image">
    </article>
    <div class"red-bg">Obama</div>`
    console.log(newsItems[newsItem].picture.large);
   };
   newNewsItems.innerHTML = html;
};

function buildNewsPage() {
    getNewsPageLogo();
    getNewsPageImage();
    getNewsPageItems();
};

buildNewsPage();