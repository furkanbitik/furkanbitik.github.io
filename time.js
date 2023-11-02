const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function countdown() {
    let differenceDate = Date.now() - Date.parse('2022-06-03')

    const days = Math.floor(differenceDate / DAY);
    differenceDate -= days * DAY;
    const hours = Math.floor(differenceDate / HOUR);
    differenceDate -= hours * HOUR;
    const minutes = Math.floor(differenceDate / MINUTE);
    differenceDate -= minutes * MINUTE;
    const seconds = Math.floor(differenceDate / SECOND);

    document.querySelector('.js-days').innerHTML = days;
    document.querySelector('.js-hours').innerHTML = hours;
    document.querySelector('.js-minutes').innerHTML = minutes;
    document.querySelector('.js-seconds').innerHTML = seconds;
}

setInterval(countdown, 1000);