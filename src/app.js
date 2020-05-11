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
    currentMinute = `0{currentMinute}`;
  }

  return `${currentHour}h${currentMinute}min`;
}

function showCity(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#city-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = cityValue.value;
}

function switchToFahrenheit() {
  let currTemp = document.querySelector("#current-temperature");
  currTemp.innerHTML = "82";
}
function switchToCelcius() {
  let currTemp = document.querySelector("#current-temperature");
  currTemp.innerHTML = "28";
}

let date = new Date();
let weekDayHtml = document.querySelector("#week-day");
weekDayHtml.innerHTML = formatWeekDay(date);
let currentTime = document.querySelector("#time");
currentTime.innerHTML = formatTime(date);

let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", showCity);

let fahrenheitLink = document.querySelector("#switch-to-fahrenheit");
let celciusLink = document.querySelector("#switch-to-celcius");

fahrenheitLink.addEventListener("click", switchToFahrenheit);
celciusLink.addEventListener("click", switchToCelcius);
