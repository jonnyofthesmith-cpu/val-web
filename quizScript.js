const correctAnswer1 = "b";
const correctAnswer2 = "a";
const correctAnswer3 = "b";

const correctAnswer4 = "c";
const correctAnswer5 = "d";
const correctAnswer6 = "b";

let text0 = "What Dwarve Do I Play In Deep Rock Galactic?";
let text1 = "Who has more hours on Balatro?";
let text2 = "What Is My Rank In Valorant?";
let text3 = "Finish The Phrase:\n\"1 + 1...\"";
let text4 = "When Was Our First Hug?";
let text5 = "Where Was Our First Brunch?";

let typing = document.getElementById("question");

let qNum = 1;
let ranNum;
let count = 0;
let firstq = 1;

const speed = 40;

function getRand(max) {
    return Math.floor(Math.random() * max);
}

const buttons = document.querySelectorAll(".answers button");
const result = document.getElementById("result");
const question = document.getElementById("question");
const background = document.querySelector(".bg1");


const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");


function startTyping(textNum, textString) {
    typingText(textNum, textString);
}
function typingText(textNum, textString) {

    if (textNum < textString.length) {
        typing.textContent += textString[textNum++];
        setTimeout(() => typingText(textNum, textString), speed);
    }
}
function wrongAns() {
    count = count + 1;
    ranNum = getRand(4);
    console.log(count);
    switch (ranNum) {
        case 0:
            ranNum = getRand(4);
            result.textContent = "Wrong O:";
            break;
        case 1:
            ranNum = getRand(4);
            result.textContent = "Wrong o:";
            break;
        case 2:
            ranNum = getRand(4);
            result.textContent = "Wrong D:";
            break;
        case 3:
            ranNum = getRand(4);
            result.textContent = "Wrong ):";
            break;
        case 4:
            ranNum = getRand(4);
            result.textContent = "Wrong >:";
            break;
    }
    if (count >= 10) {
        result.textContent = "Wh";
        for (let i = 0; i <= count; i++) {
            result.textContent = result.textContent + "aa";
        }
    }

}
function clear() {
    buttons.forEach(b => b.classList.remove("selected"));
    typing.textContent = "";
    result.textContent = "";
}
function question2() {
    clear();
    typingText(0, text1);
    q1.textContent = "Me"; q1.dataset.value = "a";
    q2.textContent = "You"; q2.dataset.value = "b";
    q3.textContent = "Definitely You"; q3.dataset.value = "c";
    q4.textContent = "Undoubtedly You"; q4.dataset.value = "d";

}
function question3() {
    clear();
    typingText(0, text2);
    q1.textContent = "Radiant";
    q2.textContent = "Immortal";
    q3.textContent = "Gold";
    q4.textContent = "Iron";

}
function question4() {
    clear();
    typingText(0, text3);
    background.classList.replace("bg1", "bg2");
    q1.textContent = "I Think We Should Match Profile Pics";
    q2.textContent = "Let's Give It A Shoot?";
    q3.textContent = "I Think It Could Work No?";
    q4.textContent = "PLEASE PLEASE PLEASE";

}
function question5() {
    clear();
    typingText(0, text4);
    q1.textContent = "May 25th 2025";
    q2.textContent = "January 67st 2025";
    q3.textContent = "August 17th 2003";
    q4.textContent = "January 3rd 2025";
}
function question6() {
    clear();
    typingText(0, text5);
    q1.textContent = "A Corner Cafe";
    q2.textContent = "Starving Artist";
    q3.textContent = "Sisters & Co";
    q4.textContent = "McDonald";
}
function swapPage() {
    window.location.href = "finalQuestion.html";
}
function loadq1() {
}
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("selected"));
        button.classList.add("selected");
        if (qNum == 1) {
            if (button.dataset.value === correctAnswer1) {
                result.textContent = "Correct :D";
                count = 0;
                qNum = 2;
                setTimeout(question2, 1000);
            } else {
                wrongAns();
            }
        } else if (qNum == 2) {
            if (button.dataset.value === correctAnswer2) {
                result.textContent = "Correct :D";
                count = 0;
                qNum = 3;
                setTimeout(question3, 1000);
            } else {
                wrongAns();
            }
        } else if (qNum == 3) {
            if (button.dataset.value === correctAnswer3) {
                result.textContent = "Correct :D";
                count = 0;
                qNum = 4;
                setTimeout(question4, 1000);
            } else {
                wrongAns();
            }
        } else if (qNum == 4) {
            if (button.dataset.value === correctAnswer4) {
                result.textContent = "Correct :D";
                count = 0;
                qNum = 5;
                setTimeout(question5, 1000);
            } else {
                wrongAns();
            }
        } else if (qNum == 5) {
            if (button.dataset.value === correctAnswer5) {
                result.textContent = "Correct :D";
                count = 0;
                qNum = 6;
                setTimeout(question6, 1000);
            } else {
                wrongAns();
            }
        } else if (qNum == 6) {
            if (button.dataset.value === correctAnswer6) {
                result.textContent = "Correct :D";
                count = 0;
                qNum = 7;
                setTimeout(swapPage, 1000);
            } else {
                wrongAns();
            }
        }
    });
});

window.onload = function () {
    typingText(0, text0);
}

