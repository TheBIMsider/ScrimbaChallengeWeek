// #ScrimbaChallengeWeek - Valentine's Challenge Week 2022 - Day 2 Challenge

// Task:
// - Write a function to update the message in the greeting-display paragraph each time the  form is updated.

// Stretch goals:
// - Only display "from" when the sender field is filled in
// - Allow the user to add a custom greeting.

const greetingDisplay = document.getElementById("greeting-display");
const toInput = document.getElementById("recipient-input");
const greeting = document.getElementById("greeting-select");
const fromInput = document.getElementById("sender-input");

toInput.addEventListener("keyup", writeGreeting);
greeting.addEventListener("change", writeGreeting);
fromInput.addEventListener("keyup", writeGreeting);

function writeGreeting() {
  greetingDisplay.innerText = `To: ${toInput.value + " 🥰"}

  ${greeting.value}
  
  From: ${fromInput.value + " ❤️"}
  `;
}
