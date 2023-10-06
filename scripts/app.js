// const getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// let ms = 2000;
// const func = () => {
//   const randNum = getRandomInt(2800, 3000); // Gets random number between 2800 and 3000
//   document.querySelector('#usage span').textContent = randNum;
// };

// func();
// setInterval(func, ms);

// *******************

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to continuously update and display random wattage numbers
const updateRandomWattage = () => {
  const toggleContainers = document.querySelectorAll(".filterDiv.grid-item");

  toggleContainers.forEach((toggleContainer) => {
    const toggleCheckbox = toggleContainer.querySelector(".toggle-checkbox");
    const wattageSpan = toggleContainer.querySelector(".wattage");

    if (toggleCheckbox.checked) {
      const randNum = getRandomInt(1, 900);
      wattageSpan.textContent = randNum + "W";
    } else {
      wattageSpan.textContent = "OFF"; // Display "OFF" when it's off
    }
  });

  // Recalculate the total wattage for "switch-all" toggle
  updateTotalWattage();
};

// Function to update and display the total wattage for "switch-all" toggle
const updateTotalWattage = () => {
  const allToggleContainers = document.querySelectorAll(".filterDiv.grid-item");
  let totalWattage = 0;

  allToggleContainers.forEach((toggleContainer) => {
    const toggleCheckbox = toggleContainer.querySelector(".toggle-checkbox");
    const wattageSpan = toggleContainer.querySelector(".wattage");

    if (toggleCheckbox.checked) {
      if (wattageSpan.textContent !== "OFF") {
        totalWattage += parseInt(wattageSpan.textContent, 10);
      }
    }
  });

  // Update the "switch-all" total wattage
  const switchAllWattageSpan = document.querySelector("#switch-all .wattage");
  switchAllWattageSpan.textContent = totalWattage + "W";
};

// Initialize the continuous random wattage updates
setInterval(updateRandomWattage, 2000);

// Initialize the total wattage calculation for "switch-all" toggle
updateTotalWattage();

// ************

const navItems = document.querySelectorAll(".mobile-bottom-nav__item");
navItems.forEach(function (e, i) {
  e.addEventListener("click", function (e) {
    navItems.forEach(function (e2, i2) {
      e2.classList.remove("mobile-bottom-nav__item--active");
    });
    this.classList.add("mobile-bottom-nav__item--active");
  });
});
