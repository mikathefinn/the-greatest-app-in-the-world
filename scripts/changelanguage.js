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
      document.querySelector(".usagetext1").textContent = data.usagetext1;
      document.querySelector(".usagetext2").textContent = data.usagetext2;
      document.querySelector(".btn_all").textContent = data.btn_all;
      document.querySelector(".btn_lr").textContent = data.btn_lr;
      document.querySelector(".btn_br1").textContent = data.btn_br1;
      document.querySelector(".btn_br2").textContent = data.btn_br2;
      document.querySelector(".btn_kitchen").textContent = data.btn_kitchen;
      document.querySelector(".btn_corr").textContent = data.btn_corr;
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
