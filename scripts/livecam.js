filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  switch (c) {
    case "all":
      changeHeadingImage("images/kerrostalo.webp");
      break;
    case "living_room":
      changeHeadingImage("images/living_room.png");
      break;
    case "bedroom1":
      changeHeadingImage("images/bedroom.png");
      break;
    case "bedroom2":
      changeHeadingImage("images/bedroom2.png");
      break;
    case "kitchen":
      changeHeadingImage("images/kitchen.png");
      break;
    case "hallway":
      changeHeadingImage("images/hallway.png");
      break;
    default:
      changeHeadingImage("images/kerrostalo.webp");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function changeHeadingImage(imageSrc) {
  const headingImage = document.querySelector(".heading-image");
  headingImage.src = imageSrc;
}

function loadFinnishTranslations() {
  // Load the Finnish translations JSON file
  fetch("translations-fi.json") // Replace with the actual file path
    .then((response) => response.json())
    .then((data) => {
      // Set the title of the page based on the Finnish translation
      document.title = data.header.title;

      // Set button labels based on Finnish translations
      document.querySelector(".btn.all").textContent = data.buttons.all;
      document.querySelector(".btn.living_room").textContent =
        data.buttons.living_room;
      // ...and so on for other elements
    })
    .catch((error) => {
      console.error("Error loading Finnish translations:", error);
    });
}

// Call the function to load Finnish translations when needed
loadFinnishTranslations();