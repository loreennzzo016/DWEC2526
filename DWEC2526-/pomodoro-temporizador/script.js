function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function startTimer(duration, display, intervalRef) {
  let time = duration;
  display.textContent = formatTime(time);
  clearInterval(intervalRef.value);

  intervalRef.value = setInterval(() => {
    time--;
    display.textContent = formatTime(time);
    if (time <= 0) clearInterval(intervalRef.value);
  }, 1000);
}

// Focus
const focusDisplay = document.getElementById("focusTime");
const focusInput = document.getElementById("focusInput");
let focusInterval = { value: null };

document.getElementById("startFocus").onclick = () => {
  const minutes = parseInt(focusInput.value);
  startTimer(minutes * 60, focusDisplay, focusInterval);
};

document.getElementById("pauseFocus").onclick = () =>
  clearInterval(focusInterval.value);

// Break
const breakDisplay = document.getElementById("breakTime");
const breakInput = document.getElementById("breakInput");
let breakInterval = { value: null };

document.getElementById("startBreak").onclick = () => {
  const minutes = parseInt(breakInput.value);
  startTimer(minutes * 60, breakDisplay, breakInterval);
};

document.getElementById("pauseBreak").onclick = () =>
  clearInterval(breakInterval.value);
