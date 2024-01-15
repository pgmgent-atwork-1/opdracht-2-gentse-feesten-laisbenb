/* ---------------- JSON FILE READER ---------------- */

import {getNews} from "./fetchData.js";
import {getEvents} from "./fetchData.js";

/* ---------------- EVENTS ---------------- */

async function getEventItems() {
    const eventItems = await getEvents();
    console.log(eventItems);
    generateEventItems(eventItems);
};

function generateEventItems(eventItems) {
    //day , day_of_week , start , title , location , month=juli , image
    let html = "";
    let checkNumber = -1;
    for (let i = 0; i < 8; i++) {
        console.log(`Check number start = ${checkNumber}`);
        let randomEventNumber = Math.floor(Math.random() * eventItems.length);
        const eventItem = eventItems[randomEventNumber];
        console.log(randomEventNumber);
        if (checkNumber != randomEventNumber) {
            let event = document.getElementById('events');
        html += `<article class="article-event relative">
        <div class="artist-image">
            <img src="${eventItem.image.full}" alt="Image of event">
        </div>
        <div class="event-date">
            <p>${eventItem.day_of_week.slice(0, 2)} ${eventItem.day} juli</p>
        </div>
        <div class="artist-information">
            <h2>${eventItem.title}</h2>
            <p><span class="red-box">${eventItem.location}</span> ${eventItem.start} u </p>
        </div>
        </article>`;
        event.innerHTML = html;
        } else {
            randomEventNumber = Math.floor(Math.random() * 500);
            let event = document.getElementById('events');
        html += `<article class="article-event relative">
        <div class="artist-image">
            <img src="${eventItem.image.full}" alt="Image of event">
        </div>
        <div class="event-date">
            <p>${eventItem.day_of_week.slice(0, 2)} ${eventItem.day} juli</p>
        </div>
        <div class="artist-information">
            <h2>${eventItem.title}</h2>
            <p><span class="red-box">${eventItem.location}</span> ${eventItem.start} u </p>
        </div>
        </article>`;
        event.innerHTML = html;
        console.log(`Second random number check = ${checkNumber}`);
        };
        checkNumber = randomEventNumber;
        console.log(`Check number end = ${checkNumber}`);
    };
    // Herschrijf deze code met .slice() method.
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



