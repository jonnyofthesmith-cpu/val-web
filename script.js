let text = "I have a question for you... ";
let text2 = "But first,";
let text3 =" a quiz!";
let nextPage = false;
const speed = 60;

let i = 0;
let j = 0;
let typing = document.getElementById("intro-question");
let button_content = document.getElementById("intro-button");

function startTyping() {
  i = 0;    
  j = 0;        
  f= 0;        
  typing.textContent = "";  
  typeText1();
  if (button_content.textContent == "Next"){
    window.location.href="quiz.html";
  }
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
    setTimeout(typeText3, 200);
  }
}

function typeText3() {
  if (f < text3.length) {
    typing.textContent += text3[f++];
    setTimeout(typeText3, speed);
  }else{
    setTimeout(100);
    button_content.textContent = "Next";
  }
}

document.getElementById("intro-button").addEventListener("click", startTyping);