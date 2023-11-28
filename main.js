fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    var countries = data;
    var mainDiv = document.createElement("div");
    mainDiv.className = "main";

    countries.forEach(function (country) {
      var cardDiv = document.createElement("div");
      cardDiv.className = "card"; 

      var imgElemnt = document.createElement("img");
      imgElemnt.src = country.flags.png;

      var countryName = document.createElement("li");
      countryName.textContent = country.name.common;
      countryName.className = "countryName";

      var capital = document.createElement("div");
      capital.textContent = country.capital;

      cardDiv.appendChild(imgElemnt);
      cardDiv.appendChild(countryName);
      cardDiv.appendChild(capital);
      mainDiv.appendChild(cardDiv);
    });
    document.getElementById("app").appendChild(mainDiv);

    var input = document.querySelector("#search");
    var cards = document.querySelectorAll(".card");

    input.addEventListener("keyup", function (ev) {
      var text = ev.target.value.toLowerCase();

      cards.forEach(function (card) {
        var countryName = card.querySelector(".countryName").innerText.toLowerCase();
        if (countryName.includes(text)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  })
  .catch((error) => {
    console.log("Error" + error);
  });
