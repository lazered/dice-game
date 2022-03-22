// random number generation
const randNum1 = Math.floor(Math.random() * 6) + 1;
const randNum2 = Math.floor(Math.random() * 6) + 1;

// random img selection
document
  .querySelectorAll("img")[0]
  .setAttribute("src", "images/dice" + randNum1 + ".png");
document
  .querySelectorAll("img")[1]
  .setAttribute("src", "images/dice" + randNum2 + ".png");

if (randNum1 > randNum2) {
  document.querySelector(".title").innerHTML = "Player 1 Wins";
} else if (randNum1 < randNum2) {
  document.querySelector(".title").innerHTML = "Player 2 Wins";
} else document.querySelector(".title").innerHTML = "Draw";
