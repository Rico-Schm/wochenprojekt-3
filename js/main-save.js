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


// fetch die api
document.addEventListener("DOMContentLoaded", function () {
  const mainWrap = document.getElementById("main-wrap");
  const continentsFilter = document.getElementById("continents");
  const searchInput = document.getElementById("search");

  // Fetch-Request
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      // Funktion zum Filtern nach Kontinent
      const filterByContinent = (countries, continent) => {
        return continent ? countries.filter(country => country.region === continent) : countries;
      };

      // Funktion zum Filtern nach Suchbegriff
      const filterBySearch = (countries, searchTerm) => {
        return searchTerm
          ? countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
          : countries;
      };

      // Funktion zum Aktualisieren der Länder
      const updateCountries = (selectedContinent, searchTerm) => {
        mainWrap.innerHTML = "";

        const filteredByContinent = filterByContinent(data, selectedContinent);
        const filteredBySearch = filterBySearch(filteredByContinent, searchTerm);

        const countriesToDisplay = searchTerm ? filteredBySearch : filteredByContinent;

        countriesToDisplay.forEach((country) => {
          const countryBox = document.createElement("section");
          countryBox.className = "country-box";

          const countryFlag = document.createElement("img");
          countryFlag.className = "country-flag";
          countryFlag.src = country.flags.png;

          const countryData = document.createElement("section");
          countryData.className = "country-data";

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
      };

      // Event-Listener für die Änderung des Kontinents
      continentsFilter.addEventListener("change", function () {
        const selectedContinent = continentsFilter.value;
        const searchTerm = searchInput.value;
        updateCountries(selectedContinent === "" ? null : selectedContinent, searchTerm);
      });

      // Event-Listener für die Eingabe im Suchfeld
      searchInput.addEventListener("input", function () {
        const selectedContinent = continentsFilter.value;
        const searchTerm = searchInput.value;
        updateCountries(selectedContinent === "" ? null : selectedContinent, searchTerm);
      });

      // Initialisierung mit allen Ländern
      updateCountries(null, null);
    })
    .catch((error) => console.error("Fehler beim Abrufen der Daten:", error));
});