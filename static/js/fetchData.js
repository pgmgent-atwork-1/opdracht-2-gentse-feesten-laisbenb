async function getNews() {
    let newsItems = await fetch('https://www.pgm.gent/data/gentsefeesten/news.json');
    newsItems = await newsItems.json();
    return newsItems;
}

export {getNews};