async function getNews() {
    let newsItems = await fetch('https://www.pgm.gent/data/gentsefeesten/news.json');
    newsItems = await newsItems.json();
    return newsItems;
};

export {getNews};

async function getEvents() {
    let eventItems = await fetch('https://www.pgm.gent/data/gentsefeesten/events_500.json');
    eventItems = await eventItems.json();
    return eventItems;
};

export {getEvents};