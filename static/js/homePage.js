/* ---------------- JSON FILE READER ---------------- */

import {getNews} from "./fetchData.js";
import {getEvents} from "./fetchData.js";

/* ---------------- EVENTS ---------------- */

async function getEventItems() {
    const eventItems = await getEvents();
    generateEventItems(eventItems);
};

function generateEventItems(eventItems) {
    //day , day_of_week , start , title , location , month=juli , image
    let html = "";
    let checkNumber = -1;
    for (let i = 0; i < 8; i++) {
        console.log(`Checknumber start = ${checkNumber}`);
        let randomEventNumber = Math.floor(Math.random() * 500);
        console.log(randomEventNumber);
        if (checkNumber != randomEventNumber && eventItems[randomEventNumber].image !== null) {
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
        } else {
            randomEventNumber = Math.floor(Math.random() * 500);
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
        console.log(`Second random number check = ${checkNumber}`);
        };
        checkNumber = randomEventNumber;
        console.log(`Checknumber end = ${checkNumber}`);
    };
    // HErschrijf deze code met .slice() method.
};

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
    getNewsItems();
    getEventItems();
};

buildScript();



