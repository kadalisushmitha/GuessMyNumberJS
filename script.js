"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hichScore = 0;

const dispayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// console.log((document.querySelector(".message").textContent = "harish"));
// document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // no input
  if (!guess) {
    dispayMessage("no number!!!");

    //player wins
  } else if (guess === secretNumber) {
    dispayMessage("correct number!!!");

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highhScore) {
      highhScore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //greater than or less than the secrentNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   else if (guess > secretNumber) {
  //     dispayMessage("too high!!");
  //   } else if (guess < secretNumber) {
  //     dispayMessage("too low!!!");
  //   }
});
// console.log(document.querySelector(".guess").Value);

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
