const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let ms = 2000;
const func = () => {
  const randNum = getRandomInt(2800, 3000); // Gets random number between 2800 and 3000
  document.querySelector('#usage span').textContent = randNum;
};

func();
setInterval(func, ms);

let timerInterval;
let totalSeconds = 0;
let temperature = 100;

function updateTemperature() {
    document.getElementById("temperature").textContent = temperature;
}

function increaseTemperature() {
    temperature += 10;
    if (temperature > 360) {
        temperature = 360;
    }
    updateTemperature();
}

function decreaseTemperature() {
    temperature -= 10;
    if (temperature < 100) {
        temperature = 100 ;
    }
    updateTemperature();
  }



function startTimer() {
  const timerInput = document.getElementById('timer').value.split(':');
  const minutes = parseInt(timerInput[0]);
  const seconds = parseInt(timerInput[1]);

  if (!isNaN(minutes) && !isNaN(seconds) && (minutes > 0 || seconds > 0)) {
      totalSeconds = minutes * 60 + seconds;
      timerInterval = setInterval(updateTimer, 1000);
  }
}
function updateTimer() {
  const timerDisplay = document.getElementById('timerDisplay');
  if (totalSeconds > 0) {
      totalSeconds--;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      timerDisplay.textContent = `Time remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  } else {
      clearInterval(timerInterval);
      timerDisplay.textContent = 'Timer Expired';
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  totalSeconds = 0;
  document.getElementById('timer').value = '';
  document.getElementById('timerDisplay').textContent = '';
}