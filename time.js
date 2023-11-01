// Dom Elements
const daysRemaining = document.getElementById("days");
const hoursRemaining = document.getElementById("hours");
const minutesRemaining = document.getElementById("minutes");
const secondsRemaining = document.getElementById("seconds");

const msg = document.querySelector(".message");

// Display Date Function
function displayDate() {
  // Current Date
  let currentDate = new Date();
  let destinationDate = new Date(2022, 5, 3); // 3 Haziran 2022

  // Difference in Milliseconds
  let difference = currentDate - destinationDate;

  // Convert milliseconds to seconds
  let seconds = Math.floor(difference / 1000);

  // Calculate days, hours, minutes, and remaining seconds
  let days = Math.floor(seconds / (24 * 60 * 60));
  let hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  let minutes = Math.floor((seconds % (60 * 60)) / 60);
  let remainingSeconds = seconds % 60;

  // Update DOM elements
  daysRemaining.textContent = days;
  hoursRemaining.textContent = hours;
  minutesRemaining.textContent = minutes;
  secondsRemaining.textContent = remainingSeconds;
}

// Initial Call
displayDate();
// Call Every 1 Second
setInterval(displayDate, 1000);

// Dom Element Fot Light-Dark Mode Toogler
document.querySelector("#light-dark-toogle").onclick = function (e) {
  // Giving The Class dark to the Body
  document.body.classList.toggle("dark");
  // Toggle The Moon Shape
  e.target.classList.toggle("fa-moon");
  // Toggle The Sun Shape
  e.target.classList.toggle("fa-sun");
};