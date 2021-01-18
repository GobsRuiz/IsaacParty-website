const countDownText_days = document.getElementById("header_content_countdown_days");
const countDownText_hours = document.getElementById("header_content_countdown_hours");
const countDownText_minutes = document.getElementById("header_content_countdown_minutes");
const countDownText_seconds = document.getElementById("header_content_countdown_seconds");

// Date
const dateTime = new Date("January 21 2021 24:00:00");



// Functions
// Update countdown
function updateCountdown() {
    const currentDate = new Date();
    const calc = dateTime - currentDate;
    
    const days = Math.floor(calc / 1000 / 60 / 60 / 24);
    const hours = Math.floor(calc / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(calc / 1000 / 60) % 60;
    const seconds = Math.floor(calc / 1000) % 60;

    setCountdown(days, hours, minutes, seconds);
}

// Set textContent
function setCountdown(days, hours, minutes, seconds) {
    countDownText_days.textContent = textContentCountdown(days);
    countDownText_hours.textContent = textContentCountdown(hours);
    countDownText_minutes.textContent = textContentCountdown(minutes);
    countDownText_seconds.textContent = textContentCountdown(seconds);
}

// Get text
function textContentCountdown(variable) {
    let value = variable < 10 ? "0" + variable : variable
    return value; 
}

// Load 
window.addEventListener("load", () => {
    updateCountdown();
})

// Interval
setInterval(() => {
    updateCountdown();
}, 1000);