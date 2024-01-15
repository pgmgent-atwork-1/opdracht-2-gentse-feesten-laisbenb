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

    document.getElementById('categories').innerHTML = `<img src="../static/img/gentse-feesten-icoontjes/tag.svg" alt="Tag icon">`;
};

fetchEventCategories();