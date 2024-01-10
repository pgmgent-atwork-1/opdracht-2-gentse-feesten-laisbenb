/* ---------------- JSON FILE READER ---------------- */

//import {getEvents} from "./fetchData.js";

function fetchData() {
    return fetch('https://www.pgm.gent/data/gentsefeesten/events_500.json')
        .then(response => response.json());
}

/* ---------------- LOAD IN EVENTS ---------------- */

document.getElementById("search-button").addEventListener("click", function() {
    search();
});

function renderData(data) {
    const resultContainer = document.getElementById('search-results');
    resultContainer.innerHTML = "";

    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent =  item.title;
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
