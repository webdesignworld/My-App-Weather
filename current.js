function showWeather(response) {
  let h1 = document.querySelector("#real-weather");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${temperature}°C`;
}

function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `${temperature}&#176;C`;
  let h1 = document.querySelector("#real-weather");
  h1.innerHTML = message;
}

let apiKey = "3499ef150985eccadd080ff408a018df";
let units = "metric";
let city = "paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longtitude = position.coords.longtitude;
  let units = "metric";
  let apiKey = "3499ef150985eccadd080ff408a018df";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units${units}`;

  navigator.geolocation.getCurrentPosition(retrievePosition);
  axios.get(apiUrl).then(showTemperature);
}

let button = document.querySelector("#current-location");
button.addEventListener("click", retrievePosition);
let h2 = document.querySelector("#new-city");
h1.innerHTML = message;
