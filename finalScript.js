let text = "Final Question:\n";
let text2 = "Will You Be My Valentine?";
let text3 = "YIPPEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";

const speed = 50;
const correctAnswer = "a";

let nextPage = false;
let i = 0;
let j = 0;
let f = 0;
let l = 0;
let count = 0;

const buttons = document.querySelectorAll(".answers button");
let typing = document.getElementById("intro-question");
let button_content = document.getElementById("intro-button");
const q1 = document.getElementById("yesBtn");
const q2 = document.getElementById("noBtn");
const result = document.getElementById("result");

function startTyping() {
    i = 0;
    j = 0;
    f= 0;
    l=0;
    typing.textContent = "";
    typeText1();
}

function nextQuestion() {
    button_content.classList.add("hidden");
    q1.classList.remove("hidden");
    q2.classList.remove("hidden");
}

function typeText1() {
    if (i < text.length) {
        typing.textContent += text[i++];
        setTimeout(typeText1, speed);
    } else {
        setTimeout(typeText2, 550);
    }
}

function typeText2() {
    if (j < text2.length) {
        typing.textContent += text2[j++];
        setTimeout(typeText2, speed);
    } else {
        setTimeout(nextQuestion, 200);
    }
}

function typesText3() {
    if (f < text3.length) {
        typing.textContent += text3[f++];
        setTimeout(typesText3, speed);
    }
}





function moveButtonRandomly(btn) {
    const padding = 20;
    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.dataset.value === correctAnswer) {
            q1.classList.add("hidden");
            q2.classList.add("hidden");
            typing.textContent = "";
            setTimeout(typesText3, 200);
        }
    });
});


document.getElementById("intro-button").addEventListener("click", startTyping);

q2.addEventListener("mouseenter", () => {
    moveButtonRandomly(q2);
});

