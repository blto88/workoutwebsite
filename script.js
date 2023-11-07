const timers = {};

function startTimer(timerId, days) {
    if (!timers[timerId]) {
        const timerElement = document.getElementById(timerId + "-timer");
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + days);

        const timerInterval = setInterval(updateTimer, 1000);

        function updateTimer() {
            const currentDate = new Date();
            const timeLeft = endDate - currentDate;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerElement.textContent = "Timer Expired";
                delete timers[timerId];
            } else {
                const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

                timerElement.textContent = `${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`;
            }
        }
        timers[timerId] = timerInterval;
    }
}

function stopTimer(timerId) {
    if (timers[timerId]) {
        clearInterval(timers[timerId]);
        document.getElementById(timerId + "-timer").textContent = "Timer Stopped";
        delete timers[timerId];
    }
}