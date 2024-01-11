// toggle dark vs. light mode
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkmode-checked");
  const body = document.getElementById("body");
  const allTextElements = document.querySelectorAll("#body *");
  const modeName = document.getElementById("mode-name");

  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  });

  function setDarkMode() {
    body.style.backgroundColor = "#242424";
    allTextElements.forEach(element => {
      element.style.color = "#e3e3e3";
    });
    modeName.innerText = "Dark Mode";
  }

  function setLightMode() {
    body.style.backgroundColor = "#fff";
    allTextElements.forEach(element => {
      element.style.color = "#242424";
    });
    modeName.innerText = "Light Mode";
  }
});

// fetch api
document.addEventListener("DOMContentLoaded", function () {
  const mainWrap = document.getElementById("main-wrap");

  // fetch-request
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      // Daten verarbeiten und in die Seite einfügen
      data.forEach((country) => {
        const countryBox = document.createElement("section");
        countryBox.className = "country-box";

        const countryFlag = document.createElement("img");
        countryFlag.className = "country-flag";
        countryFlag.src = country.flags.png;

        const countryData = document.createElement("section");
        countryData.className = "country-data";

        // Einbinden der Länderinformationen
        const countryName = document.createElement("strong");
        countryName.textContent = country.name.common;

        const countryPopulation = document.createElement("p");
        countryPopulation.textContent = "Population: " + country.population;

        const countryRegion = document.createElement("p");
        countryRegion.textContent = "Region: " + country.region;

        const countryCapital = document.createElement("p");
        countryCapital.textContent = "Capital: " + country.capital;

        countryData.appendChild(countryName);
        countryData.appendChild(countryPopulation);
        countryData.appendChild(countryRegion);
        countryData.appendChild(countryCapital);

        countryBox.appendChild(countryFlag);
        countryBox.appendChild(countryData);

        mainWrap.appendChild(countryBox);
      });
    })
    .catch((error) => console.error("Fehler beim Abrufen der Daten:", error));
});