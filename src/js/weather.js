// Barf pile of element getters
var dayTomorrow = document.getElementById('day-tomorrow');
var daySecond = document.getElementById('day-second');
var dayThird = document.getElementById('day-third');

var $iconNow = $('#current-icon');
var $iconTomorrow = $('#icon-tomorrow');
var $iconSecond = $('#icon-second');
var $iconThird = $('#icon-third');

var highTomorrow = document.getElementById('high-tomorrow');
var highSecond = document.getElementById('high-second');
var highThird = document.getElementById('high-third');

var lowTomorrow = document.getElementById('low-tomorrow');
var lowSecond = document.getElementById('low-second');
var lowThird = document.getElementById('low-third');

var currentLocation = document.getElementById('current-location');
var tempNow = document.getElementById('current-temp');
var highNow = document.getElementById('current-high');
var lowNow = document.getElementById('current-low');
var statusNow = document.getElementById('current-status');

var homeAddress;
var homeZip;
var workAddress;
var workZip;

// Update forecast
function updateForecast() {

  // Set Days of forecast
  dayTomorrow.innerHTML = forecast.tomorrow.day;
  daySecond.innerHTML = forecast.second.day;
  dayThird.innerHTML = forecast.third.day;

  // Update forecast icons
  $iconTomorrow.empty();
  $iconTomorrow.append(forecast.tomorrow.icon);
  $iconSecond.empty();
  $iconSecond.append(forecast.second.icon);
  $iconThird.empty();
  $iconThird.append(forecast.third.icon);

  // Set highs
  highTomorrow.innerHTML = forecast.tomorrow.high;
  highSecond.innerHTML = forecast.second.high;
  highThird.innerHTML = forecast.third.high;

  // Set lows
  lowTomorrow.innerHTML = forecast.tomorrow.low;
  lowSecond.innerHTML = forecast.second.low;
  lowThird.innerHTML = forecast.third.low;

}

function updateCurrentWeather() {

  // Update current temp and text description
  currentLocation.innerHTML = locationNow;

  tempNow.innerHTML = currentWeather.temp;
  highNow.innerHTML = currentWeather.high;
  lowNow.innerHTML = currentWeather.low;
  statusNow.innerHTML = currentWeather.stat;

  // Update current weather icon
  $iconNow.empty();
  $iconNow.append(currentWeather.icon);
  iconMover();
}

// Weather icon position helper
function iconMover() {
  var width = $("#current-temp").outerWidth;
  $('#current-icon').css('margin-left', width);
}
