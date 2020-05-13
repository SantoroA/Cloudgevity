function formatWeekDay(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = days[now.getDay()];
  return weekDay;
}

function formatTime(now) {
  let currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinute = now.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  return `${currentHour}h${currentMinute}min`;
}

function showCityInfo(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#city-input");
  let apiKey = "2b3715c71ce846298a7fbee953bac1d5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
  axios
    .get(`${apiUrl}q=${cityValue.value}&appid=${apiKey}&units=metric`)
    .then(formatWeatherInfo);
}

function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "2b3715c71ce846298a7fbee953bac1d5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
  axios
    .get(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(formatWeatherInfo);
}

function formatWeatherInfo(response) {
  let tempCelsius = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let showCity = response.data.name;
  let country = response.data.sys.country;
  let windSpeed = response.data.wind.speed;
  let temperatureElement = document.querySelector("#temperature-element");
  let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let cityElement = document.querySelector("#current-city");
  let windElement = document.querySelector("#wind-speed");
  cityElement.innerHTML = `${showCity}, ${country}`;
  temperatureElement.innerHTML = tempCelsius;
  descriptionElement.innerHTML = description;
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${windSpeed}m/s`;
}

function getPosition() {
  navigator.geolocation.getCurrentPosition(handlePosition);
}

let date = new Date();
let weekDayHtml = document.querySelector("#week-day");
let currentTime = document.querySelector("#time");
currentTime.innerHTML = formatTime(date);
weekDayHtml.innerHTML = formatWeekDay(date);

let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", showCityInfo);

let currCityButton = document.querySelector("#button-current-city");
currCityButton.addEventListener("click", getPosition);
