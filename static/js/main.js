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
};

/* ---------------- EVENTS ---------------- */

async function getEventItems() {
    const eventItems = await getEvents();
    //console.log(eventItems);
    generateEventItems(eventItems);
};

function generateEventItems(eventItems) {
    //day , day_of_week , start , title , location , month=juli , image
    let html = "";
    for (let i = 0; i < 8; i++) {
        const randomEventNumber = Math.floor(Math.random() * 500);
        let checkNumber = -1;
        if (checkNumber != randomEventNumber) {
            let event = document.getElementById('events');
        html += `<article class="article-event relative">
        <div class="artist-image">
            <img src="${eventItems[randomEventNumber].image.full}" alt="Image of event">
        </div>
        <div class="event-date">
            <p>${eventItems[randomEventNumber].day_of_week} ${eventItems[randomEventNumber].day} juli</p>
        </div>
        <div class="artist-information">
            <h2>${eventItems[randomEventNumber].title}</h2>
            <p><span class="red-box">${eventItems[randomEventNumber].location}</span> ${eventItems[randomEventNumber].start} u </p>
        </div>
        </article>`;
        event.innerHTML = html;
        };
        checkNumber = randomEventNumber;
        console.log(randomEventNumber);
    };
    // BUGS: null niet gefiltered !
    // HErschrijf deze code met .slice() method.
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



