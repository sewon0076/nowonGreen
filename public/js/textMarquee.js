const pTag1 = document.querySelector(".first_text");
const textArr1 = "TRADITIONAL/MARKET/SINCE/JOSEON/TRADITIONAL/MARKET/SINCE/JOSEON".split("/");
function initTexts(element, textArray) {
    textArray.push(...textArray);
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0`;
    }
}
initTexts(pTag1, textArr1);
let count1 = 0;
let count2 = 0;
function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translateX(0)`;
        count = 0;
    }
    element.style.transform = `translateX(${count * direction}px)`;
    return count;
}

function animate() {
    count1++;
    count2++;

    count1 = marqueeText(count1, pTag1, -1);
    window.requestAnimationFrame(animate);
}
animate();

// marquee2===========================
const pTag1_2 = document.querySelector(".first_text2");
const textArr1_2 = "350M/LENGTH/80/STORES/350M/LENGTH/80/STORES".split("/");
function initTexts_2(element, textArray) {
    textArray.push(...textArray);
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0`;
    }
}
initTexts_2(pTag1_2, textArr1_2);
let count1_2 = 0;
let count2_2 = 0;
function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translateX(0)`;
        count = 0;
    }
    element.style.transform = `translateX(${count * direction}px)`;
    return count;
}

function animate_2() {
    count1_2++;
    count2_2++;

    count1_2 = marqueeText(count1_2, pTag1_2, -1);
    window.requestAnimationFrame(animate_2);
}
animate_2();
// =======================3==========================
const pTag1_3 = document.querySelector(".first_text3");
const textArr1_3 = "CENTER/OF/DAEGU/CENTER/OF/DAEGU/CENTER/OF/DAEGU/CENTER/OF/DAEGU".split("/");
function initTexts_3(element, textArray) {
    textArray.push(...textArray);
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0`;
    }
}
initTexts_3(pTag1_3, textArr1_3);
let count1_3 = 0;
let count2_3 = 0;
function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translateX(0)`;
        count = 0;
    }
    element.style.transform = `translateX(${count * direction}px)`;
    return count;
}

function animate_3() {
    count1_3++;
    count2_3++;

    count1_3 = marqueeText(count1_3, pTag1_3, -1);
    window.requestAnimationFrame(animate_3);
}
animate_3();
// ====================================================4
const pTag1_4 = document.querySelector(".first_text4");
const textArr1_4 = "ARTISTIC/SEOMOON/ARTISTIC/SEOMOON".split("/");
function initTexts_4(element, textArray) {
    textArray.push(...textArray);
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0`;
    }
}
initTexts_4(pTag1_4, textArr1_4);
let count1_4 = 0;
let count2_4 = 0;
function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translateX(0)`;
        count = 0;
    }
    element.style.transform = `translateX(${count * direction}px)`;
    return count;
}

function animate_4() {
    count1_4++;
    count2_4++;

    count1_4 = marqueeText(count1_4, pTag1_4, -1);
    window.requestAnimationFrame(animate_4);
}
animate_4();

// =======================main
