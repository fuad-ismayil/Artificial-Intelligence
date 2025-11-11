AOS.init();
const menuBtn = document.querySelector(".fa-bars")
const mobileMenuDiv = document.querySelector(".mobile-menu")
const closeBtn = document.querySelector(".fa-xmark")
const awardsCards = document.querySelector(".awards-in")

menuBtn.addEventListener("click", openMenu)
function openMenu() {
    mobileMenuDiv.classList.add("active");
}

var closeMenu = () => {
    mobileMenuDiv.classList.remove("active");
};
closeBtn.addEventListener("click", closeMenu);


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
        600: { slidesPerView: 3 },
        900: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
    },
});

const awardsSwiper = new Swiper(".awards", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,

    autoplay: {
        delay: 1700,
        disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
        0: { slidesPerView: 1, centeredSlides: true },
        768: { slidesPerView: 2, spaceBetween: 35 },
        1200: { slidesPerView: 4 },
    },
});