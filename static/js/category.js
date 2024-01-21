/* ---------------- JSON FILE READER ---------------- */

import {getEvents} from "./fetchData.js";

async function fetchEventCategories() {
    let eventData = await getEvents();
    collectEventCategories(eventData);
};

function collectEventCategories(eventData) {
    let categoryArray = [];
    for (const event of eventData) {
            categoryArray.push(...event.category);
    };
    let filteredCategoryArray = [...new Set(categoryArray)];

    for (let i = 0; i < filteredCategoryArray.length; i++) {
        const category = filteredCategoryArray[i];
        document.getElementById('categories').innerHTML  += `<div class="flex one-category">
        <img class="tag-svg" src="../static/img/gentse-feesten-icoontjes/tag.svg" alt="Tag icon"> <p class="black">${category}</p>
        </div>`;
        const eventContentID = `eventContent_${i}`;
        document.getElementById('categoriesAndEvents').innerHTML += `<h2>${category}</h2>
        <div id="${eventContentID}"></div>`;
        console.log(category);
        for (const event of eventData) {
            if (event.category.includes(category)) {
                //console.log(event.category.includes(filteredCategoryArray[i]));
                console.log(event.category);
                document.getElementById(eventContentID).innerHTML += `<p>${event.title}</p>`
            };
        };
    };
};

fetchEventCategories();