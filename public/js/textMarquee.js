const pTag1 = document.querySelector(".first_text");
const textArr1 = "SEOMOON/NIGHTMARKET/SEOMOON/NIGHTMARKET/SEOMOON/NIGHTMARKET".split("/");
function initTexts(element, textArray) {
    textArray.push(...textArray);
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
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

// window.addEventListener("scroll", () => {});
const pTag1_2 = document.querySelector(".first_text2");
const textArr1_2 = "BINGO/GAME/BINGO/GAME/BINGO/GAME/BINGO/GAME/BINGO/GAME".split("/");
function initTexts_2(element, textArray) {
    textArray.push(...textArray);
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
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
