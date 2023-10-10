const toggleContainers = document.querySelectorAll(".filterDiv.grid-item");
const switchAllCheckbox = document.querySelector(
  "#switch-all .toggle-checkbox"
);

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const updateRandomWattage = () => {
  let totalWattage = 0;
  let anyRoomToggleOn = false;

  toggleContainers.forEach((toggleContainer) => {
    const toggleCheckbox = toggleContainer.querySelector(".toggle-checkbox");
    const wattageSpan = toggleContainer.querySelector(".wattage");

    if (toggleCheckbox.checked) {
      let minWattage = 0;
      let maxWattage = 0;

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
      totalWattage += randNum;
      console.log(anyRoomToggleOn);

      anyRoomToggleOn = true;
      console.log(anyRoomToggleOn);
    } else {
      wattageSpan.textContent = "OFF";
    }
  });

  const switchAllTotalWattageSpan = document.querySelector(
    "#switch-all .wattage"
  );
  switchAllTotalWattageSpan.textContent = anyRoomToggleOn
    ? totalWattage + "W"
    : "OFF";

  // Update the "switch-all" checkbox state
  switchAllCheckbox.checked = anyRoomToggleOn;
};

toggleContainers.forEach((toggleContainer) => {
  const toggleCheckbox = toggleContainer.querySelector(".toggle-checkbox");
  toggleCheckbox.addEventListener("change", updateRandomWattage);
});

switchAllCheckbox.addEventListener("change", () => {
  const isChecked = switchAllCheckbox.checked;

  // Loop through room toggle checkboxes and update their state
  toggleContainers.forEach((roomToggleContainer) => {
    const roomToggleCheckbox =
      roomToggleContainer.querySelector(".toggle-checkbox");

    // Check or uncheck the room toggles based on the "switch-all" state
    roomToggleCheckbox.checked = isChecked;

    switchAllCheckbox.checked = !switchAllCheckbox.checked;
  });

  updateRandomWattage();
});

const alinpainike = document.querySelector("#switch-all");

alinpainike.addEventListener("change", () => {
  console.log("Painoit alinta painiketta.");
  console.log(alinpainike);
  switchAllCheckbox.checked = !switchAllCheckbox.checked;
});

setInterval(updateRandomWattage, 2000);

updateRandomWattage(); // Initialize the state
