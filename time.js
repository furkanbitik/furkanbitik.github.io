// Selecting DOM elements
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
 let remainingSeconds = Math.floor(seconds % 60);

 // Update the display
 daysRemaining.textContent = days;
 hoursRemaining.textContent = hours;
 minutesRemaining.textContent = minutes;
 secondsRemaining.textContent = remainingSeconds;

 // Check if the event has already occurred
 if (difference > 0) {
 clearInterval(countdown);
 msg.textContent = "Congratulations! The wedding is over!";
 }
}

// Start the countdown
displayDate();
setInterval(displayDate, 1000);

// Toggle Light-Dark Theme
document.getElementById("light-dark-toogle").addEventListener("click", function () {
 document.body.classList.toggle("dark");
});