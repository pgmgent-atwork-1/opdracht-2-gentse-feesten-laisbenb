function getLogo() {
    let image = document.getElementById('gf-logo');
    let html = "";
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    html += `<a href="index.html"><img src="static/img/Gentse Feesten Logos/GF-logo-2023-${randomNumber}.svg" alt="Gentse feesten logo"></a>`;
    image.innerHTML = html;
};

function buildLogo() {
    getLogo();
};

buildLogo();