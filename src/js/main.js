var homeAddress;
var homeZip;
var workAddress;
var workZip;
var commuteOption;
var commuteTime;
var latLong;
var locationNow;

const forecast = {
  tomorrow: {
    day: '',
    high: 0,
    low: 0,
    icon: '',
  },
  second: {
    day: '',
    high: 0,
    low: 0,
    icon: '',
  },
  third: {
    day: '',
    high: 0,
    low: 0,
    icon: '',
  },
};
const currentWeather = {
  temp: 0,
  high: 0,
  low: 0,
  stat: '',
  icon: '',
};
const news = {
  article1: '',
  article2: '',
  article3: '',
  article4: '',
}

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
  getWeather();
  getCommuteInfo();
  getNews();

  $('.wrapper').fadeOut(2000, function() { $('.wrapper').remove();
  });
});
