function showHome() {
    document.querySelector('.home-page').style.display = 'block';
    document.querySelector('.info-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';
}

function showInfo() {
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.info-page').style.display = 'block';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';
}

function showService() {
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.info-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'block';
    document.querySelector('.contact-page').style.display = 'none';
}

function showContact() {
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.info-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'block';
}
