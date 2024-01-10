/* ---------------- JSON FILE READER ---------------- */

//import {getEvents} from "./fetchData.js";

function fetchData() {
    return fetch('https://www.pgm.gent/data/gentsefeesten/events_500.json')
        .then(response => response.json());
}

/* ---------------- DISPLAY EVENTS ---------------- */

const display = document.getElementById('search-results');

/* ---------------- LOAD IN EVENTS ---------------- */

document.getElementById("search-button").addEventListener("click", function() {
    search();
    display.style.display = "flex";
});

function renderData(data) {
    const resultContainer = document.getElementById('search-results');
    resultContainer.innerHTML = "";

    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML =  `<article class="article-event search-article relative">
        <img src="${item.image.thumb}" alt="Event Image">
        <div class="event-date">
            <p>${item.day_of_week.slice(0, 2)} juli</p>
        </div>
        <div class="artist-information">
            <h2>${item.title}</h2>
            <p><span class="red-box">${item.location}</span> ${item.start} u</p>
        </div>
        </article>` ;
        resultContainer.appendChild(itemElement);
    });
}

function search() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    fetchData()
        .then(data => {
            renderData(data.filter(item => item.title.toLowerCase().includes(searchTerm)))
        })
        .catch(error => console.error('Error fetching data:', error));
}

fetchData().then(data => renderData(data));
