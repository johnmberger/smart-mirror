$(document).ready(function() {
  getNews();
})

$('form').on('submit', function(event) {
  event.preventDefault();

  homeAddress = $('#home-address').val();
  homeZip = $('#home-zip-code').val();

  workAddress = $('#work-address').val();
  workZip = $('#work-zip-code').val();

  commuteOption = $('input:radio[name="commuteOptions"]:checked').val();

  if (commuteOption === 'BICYCLING') {
    $('.directions-container').prepend('<i class="fa fa-2x fa-bicycle" aria-hidden="true"></i>');
  } else if (commuteOption === 'WALKING') {
    $('.directions-container').prepend('<i class="fa fa-2x fa-male" aria-hidden="true"></i>');
  } else {
    $('.directions-container').prepend('<i class="fa fa-2x fa-car" aria-hidden="true"></i>');
  }

  if ($('#affirm-checkbox').is(':checked')) {
    affirmMarker = false;
  }

  getWeather();
  getCommuteInfo();

  $('.wrapper').fadeOut(2000, function() {
    $('.wrapper').remove();
  });
});
