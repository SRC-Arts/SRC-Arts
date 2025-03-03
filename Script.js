function showHome() {
    console.log("Switching to Home");
    document.querySelector('.home-page').style.display = 'block';
    document.querySelector('.info-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';
}

function showInfo() {
    console.log("Switching to About");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.info-page').style.display = 'block';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';
}

function showService() {
    console.log("Switching to Services");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.info-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'block';
    document.querySelector('.contact-page').style.display = 'none';
}

function showContact() {
    console.log("Switching to Contact");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.info-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'block';
}
