// #ScrimbaChallengeWeek - Valentine's Challenge Week 2022 - Day 5 Challenge

// Task:
// 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
// 2. Use that color to update the background color of the body.

// Stretch goals:
// - Add the option to change the color of the heart.

const body = document.body;
const heart = document.getElementById("heart");
document.getElementById("btn").addEventListener("click", changeColor);

async function changeColor() {
  const response = await fetch("https://apis.scrimba.com/hexcolors/?count=2");
  const data = await response.json();
  body.style.setProperty("background", data.colors[0].value);
  heart.style.setProperty("--white", data.colors[1].value);
}
