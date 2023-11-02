const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function countdown() {

    let differenceDate = Date.parse('2023-04-25T19:35:13.200Z') - Date.now();

    const days = Math.floor(differenceDate / DAY);
    differenceDate -= days * DAY;
    const hours = Math.floor(differenceDate / HOUR);
    differenceDate -= hours * HOUR;
    const minutes = Math.floor(differenceDate / MINUTE);

    document.querySelector('.js-days').innerHTML = days;
    document.querySelector('.js-hours').innerHTML = hours;
    document.querySelector('.js-minutes').innerHTML = minutes;
}

setInterval(countdown, 1000);