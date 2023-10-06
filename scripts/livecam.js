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
    case "corridor":
      changeHeadingImage("images/corridor.png");
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

const navbar = document.getElementById("myBtnContainer");

navbar.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    const link = event.target;
    const linkLeft = link.offsetLeft;
    const linkWidth = link.clientWidth;
    const navbarWidth = navbar.clientWidth;
    const newScrollLeft = linkLeft - navbarWidth / 2 + linkWidth / 2;
    navbar.scrollLeft = newScrollLeft;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the language dropdown and language icon
  var dropdown = document.querySelector(".language-dropdown");
  var languageIcon = document.querySelector("#language-icon");

  // Add a click event listener to the document
  document.addEventListener("click", function (event) {
    // Check if the click is outside the language dropdown or language icon
    if (
      !dropdown.contains(event.target) &&
      !languageIcon.contains(event.target)
    ) {
      // Close the dropdown by removing the "active" class
      dropdown.classList.remove("active");
    }
  });

  // Toggle the dropdown when clicking on the language icon
  languageIcon.addEventListener("click", function () {
    dropdown.classList.toggle("active");
  });

  // Add a click event listener to language options
  var languageOptions = document.querySelectorAll(
    ".language-dropdown .dropdown-content div"
  );
  languageOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      // Close the dropdown when a language option is clicked
      dropdown.classList.remove("active");

      // Remove the "highlight" class from all options
      languageOptions.forEach(function (opt) {
        opt.classList.remove("highlight");
      });

      // Add the "highlight" class to the clicked option
      this.classList.add("highlight");
    });
  });
});
