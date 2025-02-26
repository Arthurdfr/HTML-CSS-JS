const countdown = document.getElementById('countdown');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

stopButton.disabled = true

let timer;
let remainingTime = 0;

function updateCountdown() {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startCountdown() {
    timer = setInterval(function() {
    if (remainingTime > 0) {
        remainingTime--;
        updateCountdown();
    } else {
        stopCountdown();
    }
    }, 1000);
}

function stopCountdown() {
    clearInterval(timer);
}

function resetCountdown() {
    stopCountdown();
    remainingTime = 5 * 60;
    updateCountdown();
}

startButton.addEventListener('click', function() {
    startButton.disabled = true;
    stopButton.disabled = false;
    remainingTime = 5 * 60; // 5 minutes in seconds
    startCountdown();
});

stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    stopCountdown();
});

resetButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetCountdown();
});