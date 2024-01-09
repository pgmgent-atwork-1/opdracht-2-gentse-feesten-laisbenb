const randomNumber = Math.floor(Math.random() * 6) + 1;

function getLogo() {
    const firstLogo = document.getElementById('gf-header-logo');
    const secondLogo = document.getElementById('gf-footer-logo');
    const thirdLogo = document.getElementById('gf-menu-logo');
    const logoSrc = `static/img/Gentse Feesten Logos/GF-logo-2023-${randomNumber}.svg`;
    firstLogo.src = logoSrc;
    secondLogo.src = logoSrc;
    thirdLogo.src = logoSrc;
};

function getImage() {
    const firstImage = document.getElementById('gf-main-image');
    const secondImage = document.getElementById('gf-footer-image');
    const thirdImage = document.getElementById('gf-menu-image');
    const imageSrc = `static/img/Gentse Feesten Logos/campagne-${randomNumber}.png`;
    if (firstImage) {
        firstImage.src = imageSrc;
    };
    secondImage.src = imageSrc;
    thirdImage.src = imageSrc;
};

getLogo();
getImage();