/* ---------------- JSON FILE READER ---------------- */

import {getNews} from "./fetchData.js";
import {getEvents} from "./fetchData.js";

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

/* ---------------- EVENTS ---------------- */

async function getEventItems() {
    const eventItems = await getEvents();
    console.log(eventItems);
};

getEventItems();

/* ---------------- NEWS GRID ---------------- */

async function getNewsItems() {
    const newsItems = await getNews();
    generateNewsItems(newsItems);
};


async function generateNewsItems(newsItems) {
    for (let i = 0; i < 3; i++) {
        let title = document.getElementById(`div${i + 11}`);
        const html = `<h2>${newsItems[i].synopsis}</h2>`;
        title.innerHTML = html;
    };
};

/* ---------------- BUILD SCRIPT FUNCTION ---------------- */

function buildScript() {
    getLogo();
    getImage();
    getNewsItems();
};

buildScript();



