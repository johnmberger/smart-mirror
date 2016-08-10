var homeAddress;
var homeZip;
var workAddress;
var workZip;

// Update forecast
function updateForecast() {

  // Set Days of forecast
  var dayTomorrow = document.getElementById('day-tomorrow');
  var daySecond = document.getElementById('day-second');
  var dayThird = document.getElementById('day-third');

  dayTomorrow.innerHTML = forecast.tomorrow.day;
  daySecond.innerHTML = forecast.second.day;
  dayThird.innerHTML = forecast.third.day;

  // Update forecast icons
  var $iconTomorrow = $('#icon-tomorrow');
  var $iconSecond = $('#icon-second');
  var $iconThird = $('#icon-third');

  $iconTomorrow.empty();
  $iconTomorrow.append(forecast.tomorrow.icon);
  $iconSecond.empty();
  $iconSecond.append(forecast.second.icon);
  $iconThird.empty();
  $iconThird.append(forecast.third.icon);

  // Set highs
  var highTomorrow = document.getElementById('high-tomorrow');
  var highSecond = document.getElementById('high-second');
  var highThird = document.getElementById('high-third');

  highTomorrow.innerHTML = forecast.tomorrow.high;
  highSecond.innerHTML = forecast.second.high;
  highThird.innerHTML = forecast.third.high;

  // Set lows
  var lowTomorrow = document.getElementById('low-tomorrow');
  var lowSecond = document.getElementById('low-second');
  var lowThird = document.getElementById('low-third');

  lowTomorrow.innerHTML = forecast.tomorrow.low;
  lowSecond.innerHTML = forecast.second.low;
  lowThird.innerHTML = forecast.third.low;

}

var locationNow;

function updateCurrentWeather() {

  // Update current temp, current location, text description, and chance of rain
  var currentLocation = document.getElementById('current-location');
  var tempNow = document.getElementById('current-temp');
  var highNow = document.getElementById('current-high');
  var lowNow = document.getElementById('current-low');
  var statusNow = document.getElementById('current-status');
  var rainChance = document.getElementById('chance-of-rain');

  currentLocation.innerHTML = locationNow;
  tempNow.innerHTML = currentWeather.temp;
  highNow.innerHTML = currentWeather.high;
  lowNow.innerHTML = currentWeather.low;
  statusNow.innerHTML = currentWeather.stat;
  rainChance.innerHTML = currentWeather.chanceOfRain;

  // Update current weather icon
  var $iconNow = $('#current-icon');

  $iconNow.empty();
  $iconNow.append(currentWeather.icon);
  // Reposition Icon if necessary
  iconMover();
}

// Weather icon position formatter
function iconMover() {
  var width = $("#current-temp").outerWidth;
  $('#current-icon').css('margin-left', width);
}
