/* ---------------- JSON FILE READER ---------------- */

import {getEvents} from "./fetchData.js";

async function fetchEvents() {
    let eventData = await getEvents();
    return eventData;
};

/* ---------------- LOAD IN EVENTS ---------------- */

document.getElementById("search-button").addEventListener("click", function() {
    search();
    document.getElementById('search-results').style.display = "flex";
});

function renderEvents(data) {
    console.log(data);
    const resultContainer = document.getElementById('search-results');
    resultContainer.innerHTML = "";

    const resultTrackerContainer = document.getElementById('number-of-results');
    let resultTracker = 0;

    data.forEach(item => {
        resultTracker++;
        const itemElement = document.createElement('div');
        itemElement.innerHTML =  `<article class="article-event search-article relative">
        <img src="${item.image.full}" alt="Event Image">
        <div class="event-date">
        <p>${item.day_of_week.slice(0, 2)}  ${item.day} juli</p>
        </div>
        <div class="artist-information">
        <h2>${item.title}</h2>
        <p><span class="red-box">${item.location}</span> ${item.start} u</p>
        </div>
        </article>` ;
        resultContainer.appendChild(itemElement);
    });

    resultTrackerContainer.innerHTML = `<p><strong>${resultTracker} resultaten gevonden</strong></p>`;
    console.log(`${resultTracker} results found`);
};

function search() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    fetchEvents()
        .then(data => {
            renderEvents(data.filter(item => item.title.toLowerCase().includes(searchTerm)))
        })
        .catch(error => console.error('Error fetching data:', error));
};

fetchEvents()