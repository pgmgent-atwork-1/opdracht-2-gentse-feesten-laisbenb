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
        document.getElementById('categoriesAndEvents').innerHTML += `<div class="category-titles flex">
        <h2 id="event-title-${i}" class=" container">${category}</h2><a href="#" id="arrow-up"><svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="32" viewBox="0 0 18 32">
        <path d="M17.809 9.9l-8.88-9.9-8.929 9.897 2.225 2.007 5.189-5.752-0 25.848h2.997l0-25.863 5.169 5.763z"></path>
        </svg></a></div>
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
    document.getElementById('arrow-up').addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    console.log(`Filtered events for day ${filterDay}`);
};

fetchEventCategories();