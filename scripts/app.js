const toggleContainers = document.querySelectorAll(".filterDiv.grid-item");
const switchAllCheckbox = document.querySelector(
  "#switch-all .toggle-checkbox"
);

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const updateRandomWattage = () => {
  toggleContainers.forEach((toggleContainer) => {
    const toggleCheckbox = toggleContainer.querySelector(".toggle-checkbox");
    const wattageSpan = toggleContainer.querySelector(".wattage");

    if (toggleCheckbox.checked) {
      let minWattage, maxWattage;

      if (toggleContainer.classList.contains("living_room")) {
        minWattage = 40;
        maxWattage = 55;
      } else if (toggleContainer.classList.contains("kitchen")) {
        minWattage = 110;
        maxWattage = 140;
      } else if (toggleContainer.classList.contains("bedroom1")) {
        minWattage = 2;
        maxWattage = 4;
      } else if (toggleContainer.classList.contains("bedroom2")) {
        minWattage = 2;
        maxWattage = 4;
      } else if (toggleContainer.classList.contains("corridor")) {
        minWattage = 2;
        maxWattage = 4;
      } else if (toggleContainer.classList.contains("bathroom")) {
        minWattage = 2;
        maxWattage = 4;
      }

      const randNum = getRandomInt(minWattage, maxWattage);
      wattageSpan.textContent = randNum + "W";
    } else {
      wattageSpan.textContent = "OFF";
    }
  });
};

const toggleChangeHandler = () => {
  updateRandomWattage();

  // Calculate the totalWattage based on the state of room toggles
  let totalWattage = 0;
  let anyRoomToggleOn = false;

  toggleContainers.forEach((toggleContainer) => {
    const toggleCheckbox = toggleContainer.querySelector(".toggle-checkbox");
    if (toggleCheckbox.checked) {
      let minWattage, maxWattage;

      if (toggleContainer.classList.contains("living_room")) {
        minWattage = 40;
        maxWattage = 55;
      } else if (toggleContainer.classList.contains("kitchen")) {
        minWattage = 110;
        maxWattage = 140;
      } else if (toggleContainer.classList.contains("bedroom1")) {
        minWattage = 2;
        maxWattage = 4;
      } else if (toggleContainer.classList.contains("bedroom2")) {
        minWattage = 2;
        maxWattage = 4;
      } else if (toggleContainer.classList.contains("corridor")) {
        minWattage = 2;
        maxWattage = 4;
      } else if (toggleContainer.classList.contains("bathroom")) {
        minWattage = 2;
        maxWattage = 4;
      }

      const randNum = getRandomInt(minWattage, maxWattage);
      totalWattage += randNum;
      anyRoomToggleOn = true;
    }
  });

  // Update the "switch-all" total wattage and toggle state
  const switchAllTotalWattageSpan = document.querySelector(
    "#switch-all .wattage"
  );
  switchAllTotalWattageSpan.textContent = anyRoomToggleOn
    ? totalWattage + "W"
    : "OFF";

  // Toggle the switch-all checkbox based on the state of any room toggle
  switchAllCheckbox.checked = anyRoomToggleOn;
};

toggleContainers.forEach((toggleContainer) => {
  const toggleCheckbox = toggleContainer.querySelector(".toggle-checkbox");
  toggleCheckbox.addEventListener("change", toggleChangeHandler);
});

// Initialize the total wattage and switch-all toggle state
updateRandomWattage();
toggleChangeHandler(); // Added to initialize the switch-all state
setInterval(updateRandomWattage, 2000);
