// #ScrimbaChallengeWeek - Valentine's Challenge Week 2022 - Day 1 Challenge

// Task:
// - Write the JavaScript to calculate the total cost of the selected options from the form.
// - Display the total cost in the cost-el span.

// Stretch goals:
// - Display an error message if the user doesn't fill in all the options
// - Add a custom checkbox for the ballon option

document.getElementById("btn").addEventListener("click", calculate);
let costEl = document.getElementById("cost-el");
let food = document.getElementById("food-select");
let transportation = document.getElementById("transport-select");


function calculate() {
  let ballon = document.getElementById("balloon-checkbox").checked;
  let cost = parseInt(food.value) + parseInt(transportation.value);
  costEl.innerText = "$" + cost;
  if (ballon == true) {
    costEl.innerText = "$" + cost + " 🎈";
    if (food.value === "") {
      alert("Food Selection Needed");
      costEl.innerText = "";
    } else if (transportation.value === "") {
      alert("Transport Selection Needed");
      costEl.innerText = "";
    }
  }
}
