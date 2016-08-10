$(document).ready(function() {
  getNews();
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

  getWeather();
  getCommuteInfo();

  $('.wrapper').fadeOut(2000, function() {
    $('.wrapper').remove();
  });
});
