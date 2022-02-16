// #ScrimbaChallengeWeek - Valentine's Challenge Week 2022 - Day 3 Challenge

// Task:
// - Write the JavaScript to grab the message from the paragraph and correct its capitalization.
// - It should read "Valentine's"
// - Render the corrected message to the DOM.

// Stretch goals:
// - Add the functionality to correctly capitalize multiple words.
// - Example: "Happy Valentine's Day".

document.getElementById("btn").addEventListener("click", correct);
const paragraph = document.getElementById("paragraph");

function capitalization(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function correct() {
  greeting = paragraph.textContent.toLowerCase().split(" ");
  greeting = greeting.map(capitalization);
  paragraph.textContent = greeting.join(" ");
}


