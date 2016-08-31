$(document).ready(function() {
  getNews();
  getBcycleInfo();
  setInterval(function() {
    getNews();
    getBcycleInfo();
  }, 600000);
});

$('form').on('submit', function(event) {
  event.preventDefault();

  homeAddress = $('#home-address').val();
  homeZip = $('#home-zip-code').val();

  workAddress = $('#work-address').val();
  workZip = $('#work-zip-code').val();

  commuteOption = $('input:radio[name="commuteOptions"]:checked').val();

  if (commuteOption === 'BICYCLING') {
    $('.commute-time').prepend('<i class="fa fa-2x fa-bicycle" aria-hidden="true"></i>');
  } else if (commuteOption === 'WALKING') {
    $('.commute-time').prepend('<i class="fa fa-2x fa-male" aria-hidden="true"></i>');
  } else {
    $('.commute-time').prepend('<i class="fa fa-2x fa-car" aria-hidden="true"></i>');
  }

  if ($('#affirm-checkbox').is(':checked')) {
    affirmMarker = false;
  }

  var convertTime = $('#leaveTime').val().split(':')
  for (var i = 0; i < convertTime.length; i++) {
    convertTime[i] = parseInt(convertTime[i]);
  };
  workArrivalTime = (convertTime[0] * 60) + convertTime[1];

  // Google Maps geocoding API call to get city name and state
  $.ajax({
    type: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + homeAddress + ' ' + homeZip + '&key=AIzaSyD46wfvOAuJ42fx0lCbeTf0iPQuVqCVrqU',

  }).done(function(data) {

    // Setting city, state, and latitute/longitude based on home address

    state = data.results[0].address_components[data.results[0].address_components.length - 4].short_name;

    city = data.results[0].address_components[3].long_name;
    locationNow = data.results[0].address_components[3].long_name;

    latLong = data.results[0].geometry.location.lat + ',' + data.results[0].geometry.location.lng;

    // Re-formatting city names
    city = city.replace('St.', 'Saint');
    city = city.replace(/[\. ,-]+/g, "_").toLowerCase();

    getWeather();
    getCommuteInfo();

    setInterval(function() {
      getWeather();
      getCommuteInfo();
    }, 600000);
    
  });

  $('.wrapper').fadeOut(2000, function() {
    $('.wrapper').remove();
  });
});
