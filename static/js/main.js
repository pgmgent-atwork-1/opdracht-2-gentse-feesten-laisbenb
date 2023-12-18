/* ---------------- JSON FILE READER ---------------- */

import {getNews} from "./fetchData.js";

async function getNewsItems() {
    const newsItems = await getNews();
    console.log(newsItems);
};

getNewsItems();

/* newsItems[i].synopsis*/

/* ---------------- GENERATE LOGO AND IMAGE SYNCH ---------------- */

const randomNumber = Math.floor(Math.random() * 6) + 1;

function getLogo() {
    let image = document.getElementById('gf-logo');
    const html = `<a href="index.html"><img src="static/img/Gentse Feesten Logos/GF-logo-2023-${randomNumber}.svg" alt="Gentse feesten logo"></a>`;
    image.innerHTML = html;
};

function getImage() {
    let image = document.getElementById('gf-image');
    const html = `<img src="static/img/Gentse Feesten Logos/campagne-${randomNumber}.png" alt="Gentse fees ten image">`;
    image.innerHTML = html;
}

function buildLogo() {
    getLogo();
    getImage();
};

buildLogo();

/* ---------------- NEWS GRID ---------------- */

