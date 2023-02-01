"use strict";
// Selectors
const loader = document.querySelector(".loader");

const maxMark = document.querySelector(".max");
const minMark = document.querySelector(".min");
const grade = document.querySelector(".grade");
const calculateBtn = document.querySelector(".calculate-btn");
const startBtn = document.querySelector(".start-btn");

function subjects() {
  const math = document.querySelector("#math").value,
    english = document.querySelector("#english").value,
    physics = document.querySelector("#physics").value,
    chemistry = document.querySelector("#chemistry").value;
  const numbers = [+math, +english, +physics, +chemistry];
  calculateGrade(numbers);

  // Max Scrore ************************************
  let maxValue = Math.max(math, english, physics, chemistry);

  if (maxValue == math) {
    maxMark.textContent = `The High Score Is Math ${maxValue}% 👍`;
  } else if (maxValue == english) {
    maxMark.textContent = `The High Score Is English ${maxValue}% 👍`;
  } else if (maxValue == physics) {
    maxMark.textContent = `The High Score Is Physics ${maxValue}% 👍`;
  } else if (maxValue == chemistry) {
    maxMark.textContent = `The High Score Is Chemistry ${maxValue}% 👍`;
  }

  // Min Scrore ************************************
  let minValue = Math.min(math, english, physics, chemistry);

  if (minValue == math) {
    minMark.textContent = `The Low Score Is Math ${minValue}% 😔`;
  } else if (minValue == english) {
    minMark.textContent = `The Low Score Is English ${minValue}% 😔`;
  } else if (minValue == physics) {
    minMark.textContent = `The Low Score Is Physics ${minValue}% 😔`;
  } else if (minValue == chemistry) {
    minMark.textContent = `The Low Score Is Chemistry ${minValue}% 😔`;
  }
}

function Btns() {
  grade.textContent = "Press the button to start 😁";
  calculateBtn.style.display = "none";
  startBtn.addEventListener("click", () => {
    grade.textContent = "Your average garde will appear here 🙄";
    calculateBtn.style.display = "block";
    startBtn.style.display = "none";
    math.removeAttribute("disabled");
    english.removeAttribute("disabled");
    physics.removeAttribute("disabled");
    chemistry.removeAttribute("disabled");
    setTimeout(() => {
      calculateBtn.removeAttribute("disabled");
    }, 2000);
  });
}
Btns();

function calculateGrade(numbers) {
  let sum = 0;
  for (let value of numbers) {
    sum += value;
  }
  const average = sum / numbers.length;

  if (average < 60)
    grade.innerHTML = `Your Average Grade is <span>${average}</span> %  <span id="badspan">F</span>`;
  else if (average < 70)
    grade.innerHTML = `Your Average Grade is <span>${average}</span> % <span>C</span>`;
  else if (average < 80)
    grade.innerHTML = `Your Average Grade is <span>${average}</span> % <span>D</span>`;
  else if (average < 90)
    grade.innerHTML = `Your Average Grade is <span>${average}</span> % <span>B</span>`;
  else
    grade.innerHTML = `Your Average Grade is <span>${average}</span> % <span>A</span>`;
}

calculateBtn.addEventListener("click", () => {
  subjects();
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 1100);
});
