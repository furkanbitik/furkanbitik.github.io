// İmage

document.getElementById('imageButton').addEventListener('click', function(){
    document.getElementById('imageModal').style.display = 'block';
    });

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function countdown() {
    // 25/04/23 02:00
    let differenceDate = Date.parse('2022-06-03T00:00:00.000Z') - Date.now();

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


