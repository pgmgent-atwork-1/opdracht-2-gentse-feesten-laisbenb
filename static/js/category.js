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
    console.log(filteredCategoryArray);
    console.log(filteredCategoryArray.length);

    for (let i = 0; i < filteredCategoryArray.length; i++) {
        document.getElementById('categories').innerHTML  += `<div class="flex one-category">
        <img class="tag-svg" src="../static/img/gentse-feesten-icoontjes/tag.svg" alt="Tag icon"> <p class="black">${filteredCategoryArray[i]}</p>
        </div>`;
    };
};

fetchEventCategories();