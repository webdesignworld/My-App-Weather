function displayWeatherCondition(response) {
  console.log(response);
}

function search(event) {
  event.preventDefault();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = "paris";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);

  let searchElement = document.querySelector("#new-city"); //Berlin

  let cityInput = document.querySelector("#city-input"); //input on form
  searchElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-form"); //form
searchForm.addEventListener("submit", search);
