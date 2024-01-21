/* ---------------- JSON FILE READER ---------------- */

import {getEvents} from "./fetchData.js";

async function fetchEventCategories() {
    let eventData = await getEvents();
    const urlParams = new URLSearchParams(window.location.search);
    const filterDay = urlParams.get('day');
    collectEventCategories(eventData, filterDay);
};

function collectEventCategories(eventData, filterDay) {
    let categoryArray = [];
    for (const event of eventData) {
            categoryArray.push(...event.category);
    };
    let filteredCategoryArray = [...new Set(categoryArray)];

    for (let i = 0; i < filteredCategoryArray.length; i++) {
        const category = filteredCategoryArray[i];
        const eventContentID = `eventContent_${i}`;
        document.getElementById('categories').innerHTML  += `<div class="flex one-category">
        <img class="tag-svg" src="../static/img/gentse-feesten-icoontjes/tag.svg" alt="Tag icon"> <a href="#" class="scroll-links black" data-target="event-title-${i}">${category}</a>
        </div>`;
        document.getElementById('categoriesAndEvents').innerHTML += `<h2 id="event-title-${i}" class="category-titles container">${category}</h2>
        <div id="${eventContentID}" class="event-category-content"></div>`;
        //console.log(category);
        for (const event of eventData) {
            if (event.category.includes(category) && (event.day === filterDay)) {
                //console.log(event.category.includes(filteredCategoryArray[i]));
                //console.log(event.category);
                document.getElementById(eventContentID).innerHTML += `<article class="article-event relative">
                <div class="artist-image">
                    <img src="${event.image.full}" alt="Image of event">
                </div>
                <div class="artist-information">
                    <h2>${event.title}</h2>
                    <p><span class="red-box">${event.location}</span> ${event.start} u </p>
                </div>
                </article>`;
            };
        };
    };
    const scrollLinks = document.querySelectorAll('.scroll-links');
    console.log(scrollLinks);
    scrollLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("Link clicked");

            const scrollToLocation = link.getAttribute('data-target');
            console.log("Scroll to location:", scrollToLocation);
            const scrollTo = document.getElementById(scrollToLocation);
            console.log("Scroll to element:", scrollTo);
            if (scrollTo) {
                window.scrollTo({
                    top: scrollTo.offsetTop,
                    behavior: 'smooth'
                });
            };
        });
    });
    console.log(`Filtered events for day ${filterDay}`);
};

fetchEventCategories();