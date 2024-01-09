/* ---------------- JSON FILE READER ---------------- */

import {getEvents} from "./fetchData.js";

/* ---------------- LOAD IN EVENTS ---------------- */
async function loadEvents() {
    const eventItems = await getEvents();
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    search(eventItems, searchTerm);

    console.log(eventItems);
};

function search(events, searchTerm) {
    const resultBox = document.getElementById('search-results');
    resultBox.innerHTML = "";

    const filteredEvents = events.filter(event => {
        return event.title.toLowerCase().includes(searchTerm)
    });

    if (filteredEvents.length > 0) {
        filteredEvents.forEach(event => {
            const eventContainer = document.createElement('div');
            eventContainer.textContent = `${event.title}`;
            resultBox.appendChild(eventContainer);
        });
    } else {
        resultBox.textContent = 'Geen evenementen gevonden';
    }
    //console.log(eventItems);
    //console.log("OBAMA A NIFFOOOW");
};

loadEvents();