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
