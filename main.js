fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    var ulkeler = data;
    var mainDiv = document.createElement("div");
    mainDiv.className = "main";

    ulkeler.forEach(function (ulke) {
      var cardDiv = document.createElement("div");
      cardDiv.className = "card"; 

      var imgElemnt = document.createElement("img");
      imgElemnt.src = ulke.flags.png;

      var countryName = document.createElement("li");
      countryName.textContent = ulke.name.common;
      countryName.className = "countryName";

      var capital = document.createElement("div");
      capital.textContent = ulke.capital;

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
