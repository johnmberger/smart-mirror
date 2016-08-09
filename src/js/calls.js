// Makes google maps direction API call
function getCommuteInfo() {

  var directionsService = new google.maps.DirectionsService();
  var start = homeAddress + ' ' + homeZip;
  var end = workAddress + ' ' + workZip;
  var request = {
    origin: start,
    destination: end,
    travelMode: commuteOption,
  };
  directionsService.route(request, function(data) {
    commuteTime = data.routes[0].legs[0].duration.text;

    // Call function now
    updateTravelTime();

    // Set looping 10-minute interval to get travel info
    setInterval(function() {
      updateTravelTime();
      console.log('Travel time updated!');
    }, 600000);
  });
}

function getWeather() {

  // Google Maps geocoding API call to get city name and state
  $.ajax({
    type: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + homeAddress + ' ' + homeZip + '&key=AIzaSyD46wfvOAuJ42fx0lCbeTf0iPQuVqCVrqU',

  }).done(function(data) {

    // Setting city, state, and latitute/longitude based on home address
    var state = data.results[0].address_components[data.results[0].address_components.length - 4].short_name;

    var city = data.results[0].address_components[3].long_name;
    locationNow = data.results[0].address_components[3].long_name;

    latLong = data.results[0].geometry.location.lat + ',' + data.results[0].geometry.location.lng;

    //re-formatting city name
    city = city.replace('St.', 'Saint');
    city = city.replace(/[\. ,-]+/g, "_").toLowerCase();

    // weather underground forecast API call
    $.ajax({
      type: 'GET',
      url: 'https://api.wunderground.com/api/e08af41f3bd0ad92/forecast/q/' + state + '/' + city + '.json',
    }).done(function(results) {

      // Set names of next three days
      forecast.tomorrow.day = results.forecast.simpleforecast.forecastday[1].date.weekday_short;

      forecast.second.day = results.forecast.simpleforecast.forecastday[2].date.weekday_short;

      forecast.third.day = results.forecast.simpleforecast.forecastday[3].date.weekday_short;

      // Set highs for next three days
      forecast.tomorrow.high = results.forecast.simpleforecast.forecastday[1].high.fahrenheit;

      forecast.second.high = results.forecast.simpleforecast.forecastday[2].high.fahrenheit;

      forecast.third.high = results.forecast.simpleforecast.forecastday[3].high.fahrenheit;

      // Set lows for next three days
      forecast.tomorrow.low = results.forecast.simpleforecast.forecastday[1].low.fahrenheit;

      forecast.second.low = results.forecast.simpleforecast.forecastday[2].low.fahrenheit;

      forecast.third.low = results.forecast.simpleforecast.forecastday[3].low.fahrenheit;

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
      currentWeather.high = results.forecast.simpleforecast.forecastday[0].high.fahrenheit;

      currentWeather.low = results.forecast.simpleforecast.forecastday[0].low.fahrenheit;

      // Set current text forecast (only the first two sentences)
      currentWeather.stat = results.forecast.txt_forecast.forecastday[0].fcttext.split('.').slice(0,2).join('. ') + '.';

      // Call weather getters/setters now
      updateForecast();
      getCurrentWeather();

      // Set looping 10 minute interval to re-call functions
      setInterval(function() {
        updateForecast();
        getCurrentWeather();
        console.log('Forecast updated!');
        console.log('Current Weather Updated!');
      }, 600000);
    });
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
    currentWeather.temp =  Math.ceil(result.currently.temperature);

    // Updating current weather with current info
    updateCurrentWeather();

  });
}

function getNews() {

  $.ajax({
    type: 'GET',
    url: 'https://newsapi.org/v1/articles?source=googlenews&sortBy=top&apiKey=ba604b50072a4ce99115e57a57765990'
  }).done(function(result) {

    // Updating news with articles
    news.article1 = result.articles[0].title;
    news.article2 = result.articles[1].title;
    news.article3 = result.articles[2].title;
    news.article4 = result.articles[3].title;

    // Update news displayed now
    updateNews();

    // Set looping interval to update news every 10 minutes
    setInterval(function() {
      updateNews();
      console.log('News Updated!');
    }, 600000);
  })
}
