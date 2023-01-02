var swiper = new Swiper(".feature", {
    // cssMode: true,
    slidesPerView: 3,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: true,
});
var swiper = new Swiper(".eventSwiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// var swiper2 = new Swiper(".rollingBanner", {
//     // cssMode: true,
//     slidesPerView: 1,
//     autoplay: {
//         delay: 1000,
//         disableOnInteraction: false,
//         waitForTransition: false,
//     },
//     // spaceBetween: 50,
//     loop: true,
//     // navigation: {
//     //     nextEl: ".swiper-button-next",
//     //     prevEl: ".swiper-button-prev",
//     // },
//     // pagination: {
//     //     el: ".swiper-pagination",
//     // },
//     mousewheel: false,
//     keyboard: false,
// });
