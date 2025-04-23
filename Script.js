function showHome() {
    console.log("Switching to Home");
    document.querySelector('.home-page').style.display = 'block';
    document.querySelector('.portfolio-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';
}

function showPortfolio() {
    console.log("Switching to Portfolio");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.portfolio-page').style.display = 'block';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';
}

function showService() {
    console.log("Switching to Services");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.portfolio-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'block';
    document.querySelector('.contact-page').style.display = 'none';
}

function showContact() {
    console.log("Switching to Contact");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.portfolio-page').style.display = 'none';
    document.querySelector('.services-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", () {

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const artItems = document.querySelectorAll(".art-item");

    filterButtons.forEach(button {
        button.addEventListener("click", () {
            const filter = button.dataset.filter;

            artItems.forEach(item {
                if (filter === "all" || item.dataset.category === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                });

            artItems.forEach(item {
                if (filter === "digital" || item.dataset.category === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                });       
            
           artItems.forEach(item {
                if (filter === "traditional" || item.dataset.category === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                });

            artItems.forEach(item {
                if (filter === "animation" || item.dataset.category === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                });
            });
        });
    });
});
   
    const modal = document.getElementById("popup-modal");
    const modalImg = document.getElementById("popup-image");
    const closePopup = document.getElementById("close-popup");

    artItems.forEach(item {
        item.addEventListener("click", () {
            modalImg.src = item.querySelector("img").src;
            modal.classList.remove("hidden");
        });
    });

    closePopup.addEventListener("click", () {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});
