AOS.init(); // Initializing AOS library
const menuBtn = document.querySelector(".fa-bars");
const mobileMenuDiv = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".fa-xmark");
const awardsCards = document.querySelector(".awards-in");

const openMenu = () => mobileMenuDiv.classList.add("active"); // arrow function for opening mobile menu

menuBtn.addEventListener("click", openMenu); // event listener for triggering openMenu arrow function


const closeMenu = () => mobileMenuDiv.classList.remove("active"); // arrow function for closing mobile menu

closeBtn.addEventListener("click", closeMenu); // event listener for triggering closeMenu arrow function

// IIFE async arrow function for inserting award cards using fetched JSON data
(async () => {
    const awardsUrl = "./public/json/awards.json"
    const cavab = await fetch(awardsUrl)
    const awardsData = await cavab.json()
    awardsData.forEach(card => {
        awardsCards.innerHTML += `<div class="a-cards swiper-slide">
                    <img src="${card.img}" alt="ai awards" />
                    <h4 class="open-sans-mid text-center">${card.title}</h4>
                    <article>${card.despcription}</article>
                </div>`
    })
})();

// Setup responsive Swiper slider for brand logos
const brendsSwiper = new Swiper(".brends-logos", {
    slidesPerView: 3,
    spaceBetween: 75,
    loop: true,
    autoplay: {
        delay: 1700,
        disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1200: { slidesPerView: 3 }
    }
});

// Setup responsive Swiper slider for awards
const awardsSwiper = new Swiper(".awards", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 1700,
        disableOnInteraction: false
    },
    speed: 1000,
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 25},
        768: { slidesPerView: 2, spaceBetween: 35},
        1200: { slidesPerView: 4, spaceBetween: 50}
    },
});