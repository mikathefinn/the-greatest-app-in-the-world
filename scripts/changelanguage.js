let currentLanguage = "en"; // Default language is English

function changeLanguage(language) {
  currentLanguage = language;
  loadTranslations();
}

function loadTranslations() {
  fetch(`translations-${currentLanguage}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Update HTML elements with translated content
      const usagetextElement = document.getElementById("usagetext");
      usagetextElement.innerHTML = data.usagetext;
      document.querySelector("btn_all").textContent = data.btn_all;
      document.getElementById("englishButton").textContent =
        data.buttons.english;
      document.getElementById("finnishButton").textContent =
        data.buttons.finnish;
    })
    .catch((error) => {
      console.error("Error loading translations:", error);
    });
}

// Initial load of translations
loadTranslations();
