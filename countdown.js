const newYears = "1 Jan 2025";
const daysEL = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentdate = new Date();

    const TotalSeconds = (newYearsDate - currentdate) / 1000;

    const days = Math.floor(TotalSeconds / 3600 /24);
    const hours = Math.floor(TotalSeconds / 3600) % 24;
    const minutes = Math.floor(TotalSeconds / 60) % 60;
    const seconds = Math.floor(TotalSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}
countdown();

setInterval(countdown, 1000)