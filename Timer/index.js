const timer = document.getElementById("timer");

let hour = 0;
let minute = 0;
let second = 0;
let stopTime = true;

function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stopTime == false) {
    stopTime = true;
  }
}

function timerCycle() {
  if (stopTime == false) {
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);

    second = second + 1;

    if (second == 60) {
      minute = minute + 1;
      second = 0;
    }
    if (minute == 60) {
      hour = hour + 1;
      minute = 0;
      second = 0;
    }

    if (second < 10 || second == 0) {
      second = "0" + second;
    }
    if (minute < 10 || minute == 0) {
      minute = "0" + minute;
    }
    if (hour < 10 || hour == 0) {
      hour = "0" + hour;
    }

    timer.innerHTML = hour + ":" + minute + ":" + second;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
  timer.innerHTML = "00:00:00";
}
