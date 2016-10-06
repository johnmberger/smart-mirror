var commuteOption;
var homeAddress;
var homeZip;
var workAddress;
var workZip;
var state;
var city;
var bikesAvailable;
var docksAvailable;

function getCommuteInfo() {

  // Initialize google maps directions service
  var directionsService = new google.maps.DirectionsService();
  var start = homeAddress + ' ' + homeZip;
  var end = workAddress + ' ' + workZip;
  var request = {
    origin: start,
    destination: end,
    travelMode: commuteOption,
  };
  // Grab commute time
  directionsService.route(request, function(data) {

    if (data.status !== 'OK' || typeof data == 'undefined') {
      alert('Invalid address. Please try again.');
      location.reload();
    } else {

      commuteTime = data.routes[0].legs[0].duration.text;

      // Call update function now
      updateTravelTime();
      getLeaveByTime();
      console.log('directions updated');
    }
  });
}

var latLong;

function getWeather() {

    // Weather Underground forecast API call
    $.ajax({
      type: 'GET',
      url: 'https://api.wunderground.com/api/e08af41f3bd0ad92/forecast/q/' + state + '/' + city + '.json',
    }).done(function(results) {

      // Set names of next three days
      forecast.tomorrow.day = results.forecast.simpleforecast.forecastday[1].date.weekday_short;

      forecast.second.day = results.forecast.simpleforecast.forecastday[2].date.weekday_short;

      forecast.third.day = results.forecast.simpleforecast.forecastday[3].date.weekday_short;

      // Set highs for next three days
      forecast.tomorrow.high = results.forecast.simpleforecast.forecastday[1].high.fahrenheit + '°';

      forecast.second.high = results.forecast.simpleforecast.forecastday[2].high.fahrenheit + '°';

      forecast.third.high = results.forecast.simpleforecast.forecastday[3].high.fahrenheit + '°';

      // Set lows for next three days
      forecast.tomorrow.low = results.forecast.simpleforecast.forecastday[1].low.fahrenheit + '°';

      forecast.second.low = results.forecast.simpleforecast.forecastday[2].low.fahrenheit + '°';

      forecast.third.low = results.forecast.simpleforecast.forecastday[3].low.fahrenheit + '°';

      // Assign icons and point to correct element weatherIcons map
      var icon0 = results.forecast.simpleforecast.forecastday[0].icon;
      currentWeather.icon = weatherIcons[icon0];

      var icon1 = results.forecast.simpleforecast.forecastday[1].icon;
      forecast.tomorrow.icon = weatherIcons[icon1];

      var icon2 = results.forecast.simpleforecast.forecastday[2].icon;
      forecast.second.icon = weatherIcons[icon2];

      var icon3 = results.forecast.simpleforecast.forecastday[3].icon;
      forecast.third.icon = weatherIcons[icon3];

      // Set today's high and low
      currentWeather.high = results.forecast.simpleforecast.forecastday[0].high.fahrenheit + '°';

      currentWeather.low = results.forecast.simpleforecast.forecastday[0].low.fahrenheit + '°';

      // Set current text forecast (only the first two sentences)
      currentWeather.stat = results.forecast.txt_forecast.forecastday[0].fcttext.split('.').slice(0,2).join('. ') + '.';

      // Set current chance of rain
      currentWeather.chanceOfRain = results.forecast.txt_forecast.forecastday[0].pop + '%';

      // Call weather getters/setters now
      updateForecast();
      getCurrentWeather();
      console.log('forecast updated');

    }).fail(function() {
      alert('Weather Underground API Error!');
  });
}

function getCurrentWeather() {

  var forecastUrl = 'https://api.forecast.io/forecast/c979c2d9632bfb5cf848267a7b1ff63b/' + latLong;

  // forecast.io API call
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: forecastUrl,
  }).done(function(result) {

    // Setting current temp (rounding up)
    currentWeather.temp =  Math.ceil(result.currently.temperature) + '°';

    // Updating current weather with current info
    updateCurrentWeather();

  }).fail(function() {
    alert('Forecast.io API Error!');
  });
}

function getNews() {

  // Newsapi call to get Google News headlines
  $.ajax({
    type: 'GET',
    url: 'https://newsapi.org/v1/articles?source=googlenews&sortBy=top&apiKey=ba604b50072a4ce99115e57a57765990'
  }).done(function(result) {

    // Updating news object with article titles
    news.article1 = result.articles[0].title;
    news.article2 = result.articles[1].title;
    news.article3 = result.articles[2].title;
    news.article4 = result.articles[3].title;

    // Update news displayed now
    updateNews();
    console.log('news updated');

  }).fail(function() {
    alert('News API error occurred!');
  });
}

function getBcycleInfo() {
  $.ajax({
    type: 'GET',
    url: 'https://gbfs.bcycle.com/bcycle_denver/station_status.json'
  }).done(function(result) {

    bikesAvailable = result.data.stations[52].num_bikes_available;
    docksAvailable = result.data.stations[52].num_docks_available;

    var bcycleInfo = document.getElementById('bcycle');
    bcycleInfo.innerHTML = `Bikes: ${bikesAvailable} | Docks: ${docksAvailable}`;

    if (bikesAvailable < 2) {
      $('#bcycle').css('color', 'darkred');
    } else {
      $('#bcycle').css('color', 'white');
    }
    console.log('bcycle info updated');
  });
}
