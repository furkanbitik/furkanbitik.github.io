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

    // Date object for destination
    var destinationDate = new Date("January 1, 2022 00:00:00");

    // Function to calculate time difference
    function timeDifference(destinationDate) {
      var currentDate = new Date();
      var difference = destinationDate - currentDate;
      return difference;
    }

    // Function to calculate days, hours, minutes, and seconds
    function calculateTime(timeDifference) {
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      return [days, hours, minutes, seconds];
    }

    // Function to update countdown display
    function updateCountdown() {
      var timeLeft = timeDifference(destinationDate);
      var timeElements = calculateTime(timeLeft);
      document.getElementById("countdown").innerHTML = "Time remaining until destination: " + timeElements[0] + " days, " + timeElements[1] + " hours, " + timeElements[2] + " minutes, and " + timeElements[3] + " seconds.";
    }

    // Call updateCountdown function every second to keep countdown updated
    setInterval(updateCountdown, 1000);