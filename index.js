const randNum1 = Math.floor(Math.random() * 6) + 1;
const randNum2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelectorAll("img")[0]
  .setAttribute("src", "images/dice" + randNum1 + ".png");

document
  .querySelectorAll("img")[1]
  .setAttribute("src", "images/dice" + randNum2 + ".png");

if (document.querySelector("h1").style.visibility !== hidden) {
  document.querySelector("h1").style.visibility = hidden;
}
