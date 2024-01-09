/* ---------------- JSON FILE READER ---------------- */

import {getNews} from "./fetchData.js";

/* ---------------- LOAD IN NEWS ITEMS ---------------- */

async function getNewsPageItems() {
    const newsItems = await getNews();
    generateNewsPageItems(newsItems);
};

function generateNewsPageItems(newsItems) {
   console.log(newsItems);
   const newNewsItems = document.getElementById('newsItems');
   let html = "";
   for (const newsItem in newsItems) {
    html += `<article class="newsbox flex relative">
    <div class="left-newsbox flex">
        <h2>${newsItems[newsItem].title}</h2>
        <div class="arrow-chevron flex">
            <div class="arrow"></div>
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12.5 7c.384 0 .768.146 1.06.439l8.26 8.261-8.26 8.261a1.5 1.5 0 0 1-2.121-2.122l6.14-6.14-6.14-6.139a1.502 1.502 0 0 1 1.06-2.561z"/></svg>
        </div>
    </div>
        <img src="${newsItems[newsItem].picture.large}" alt="News image">
        <div class="red-bg"></div>
    </article>`
    console.log(newsItems[newsItem].picture.large);
   };
   newNewsItems.innerHTML = html;
};

getNewsPageItems();
