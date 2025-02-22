function showInfo() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.info-page').style.display = 'block';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';
}

function showHome() {
    document.querySelector('.info-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}

function showService() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.info-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'block';
    document.querySelector('.contact-page').style.display = 'none';
}

function showContact() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.info-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'block';
}
