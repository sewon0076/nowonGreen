let vh = window.innerHeight;
console.log(window.location.pathname);
window.onload = function () {
    if (location.pathname == "/") {
        window.addEventListener("scroll", (event) => {
            logoScroll();
            imageScrolling();
        });
    } else {
        if(location.pathname == "/performance" || location.pathname == "/promotion"){
            mainLogo.style.transition = "none";
            header.classList.remove("scroll");
            mainLogo.classList.add("scroll");
            window.addEventListener("scroll", (event) => {
                subHeader();
            });
        }else{
            mainLogo.classList.add("scroll");
            header.classList.add("scroll");
            mainLogo.style.transition = "none";
        }

    }
};

let m_btn = document.querySelector(".cate_btn");
let m_btn_remove = document.querySelector(".mobile_gnb_btn");
let mobile_gnb = document.querySelector(".mobile_gnb");

m_btn.addEventListener("click", (event) => {
    if (m_btn.click) {
        mobile_gnb.classList.add("onClick");
    } else {
        mobile_gnb.classList.remove("onClick");
    }
});
m_btn_remove.addEventListener("click", (event) => {
    mobile_gnb.classList.remove("onClick");
});
let header = document.querySelector(".header_wrap");
let mainLogo = document.querySelector("#main_logo");
// let scrollH = window.scrollY;

// let drop = document.getElementsByClassName('drop');
// let dropdown = document.getElementsByClassName('dropdown');
// drop.addEventListener()
// drop.mouseover(function(){
//     dropdown.classList.add('dropOn');
// })
// drop.mouseout(function (){
//     dropdown.classList.remove('dropOn');
// });

function logoScroll() {
    if (window.scrollY < vh - 100) {
        header.classList.remove("scroll");
    } else if (window.scrollY > vh - 100) {
        header.classList.add("scroll");
    }
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mainLogo.classList.add("scroll");
    } else if (
        document.body.scrollTop >= 0 ||
        document.documentElement.scrollTop >= 0 ||
        document.body.scrollTop < 10 ||
        document.documentElement.scrollTop < 10
    ) {
        mainLogo.classList.remove("scroll");
    }
}
function subHeader() {
    if (window.scrollY < vh - 100) {
        header.classList.remove("scroll");
        mainLogo.classList.add("scroll");
    }else if(window.scrollY > vh - 100){
        header.classList.add("scroll"); 
        mainLogo.classList.add("scroll");
    }
}

let textWrap = document.querySelector(".main_sec5");
let satis = document.querySelector("#satis");
let imagine = document.querySelector("#imagine");
let textTop = textWrap.offsetTop - 100;
let textAreaHeight = vh * 2 - 150;
let totalArea = textTop + textAreaHeight;
console.log(textAreaHeight);
console.log(textTop + textAreaHeight);

function imageScrolling() {
    if (textTop < window.scrollY && totalArea > window.scrollY) {
        satis.classList.add("scroll");
        imagine.classList.add("scroll");
    } else if (totalArea < window.scrollY || textTop > window.scrollY) {
        satis.classList.remove("scroll");
        imagine.classList.remove("scroll");
    }
}

// let mainSec5 = document.querySelector(".main_sec5");
// let images = document.querySelector(".main_sec5_images");
// let imagesHeight = images.getBoundingClientRect().bottom - images.getBoundingClientRect().top;
// const contentTop = mainSec5.getBoundingClientRect().top + window.scrollY;
// let box = document.querySelector(".boxbox");
// let boxh = box.getBoundingClientRect().top + window.scrollY - 2000;
// // console.log(mainSec5.getBoundingClientRect().top)
// // console.log(window.scrollY)
// // console.log(contentTop)
// // console.log(box.offsetTop);
// //스크롤 Y가 대상의 꼬대기 값 더하기 높이 값보다 클떄 사라짐
// //위에서 부터 섹션5까지의 길이가 scrollY 와 같거나 클때 클래스 없음
// //섹션 5부터 그림 박스까지의 길이 + offsetTop값이 scroll Y 보다 클떄 클래스 추가
// //scroll Y가 그림박스 길이를 넘어가면 클래스 없애기
// function scrolling() {
// 	if (1000 < window.scrollY) {
// 		mainSec5.classList.add("sec5sticky");
// 	} else if (2000 < window.scrollY || mainSec5.offsetTop + imagesHeight < window.scrollY) {
// 		mainSec5.classList.remove("sec5sticky");
// 	}
// }
// function scrolling(){
//     if( contentTop <= window.scrollY){
//         mainSec5.classList.add('sec5sticky');//위에서 부터의 길이가 스크롤 길이보다 작거나 같을때
//         if( boxh < window.scrollY){
//             console.log('hh');
//             mainSec5.classList.remove('sec5sticky');
//         }
//     }else{
//         console.log('gg')
//         mainSec5.classList.remove('sec5sticky');
//     }
// }
// console.log('again')
// console.log(window.scrollY);
// console.log(mainSec5.offsetTop);
// console.log(mainSec5Images.getBoundingClientRect().top);
// console.log(mainSec5Images.getBoundingClientRect().bottom);
// console.log(mainSec5Images.getBoundingClientRect().bottom - mainSec5Images.getBoundingClientRect().top);
// let text_banner = document.querySelector(".text_banner");
// text_banner.id.add("text_banner1");
// let clone = text_banner.cloneNode(true);
// clone.id.add("text_banner2");

// document.querySelector(".text_banner_wrap").appendChild(clone);
// document.querySelector("#text_banner1").style.left = "0px";
// document.querySelector("#text_banner2").style.left = document.querySelector(".text_banner").offsetWidth + "px";
// text_banner.classList.add("original");
// clone.classList.add("clone");

// let rollerWidth = document.querySelector(".text_banner").offsetWidth; //회전 배너 너비값
// let betweenDistance = 1; //이동 크기 - 정수여야 함
// originalID = window.setInterval(betweenRollCallback, parseInt(1000 / 100), betweenDistance, document.querySelector("#text_banner1"));
// cloneID = window.setInterval(betweenRollCallback, parseInt(1000 / 100), betweenDistance, document.querySelector("#text_banner2"));

// //인터벌 애니메이션 함수(공용)
// function betweenRollCallback(d, text_banner) {
//     let left = parseInt(text_banner.style.left);
//     text_banner.style.left = left - d + "px"; //이동
//     //조건부 위치 리셋
//     if (rollerWidth + (left - d) <= 0) {
//         text_banner.style.left = rollerWidth + "px";
//         console.log("rolling");
//     }
// }
// betweenRollCallback();\

// let about_sec2 = document.querySelector(".about_sec2");
// let about_sec2_Top = about_sec2.offsetTop;
// let about_sec2_height = vh - 100;
// let keyword = document.querySelectorAll(".keyword");
// function keywordScroll() {
//     let height = about_sec2_Top + about_sec2_height;
//     if (about_sec2_top < window.scrollY && height > window.scrollY) {
//         for (i = 0; i <= keyword.length; i++) {
//             keyword[i].classList.add("scroll");
//             console.log(i);
//         }
//     }
// }
