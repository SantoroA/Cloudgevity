let now = new Date();

function formatWeekDay() {
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
  let weekDayHtml = document.querySelector("#week-day");
  weekDayHtml.innerHTML = weekDay;
}

function formatTime() {
  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();
  let currentTime = document.querySelector("#time");
  currentTime.innerHTML = `${currentHour}h${currentMinute}min`;
}

function showCity(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#city-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = cityValue.value;
}

let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", showCity);

formatWeekDay();
formatTime();
