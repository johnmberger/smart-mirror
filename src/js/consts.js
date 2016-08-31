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
  chanceOfRain: '',
};

const news = {
  article1: '',
  article2: '',
  article3: '',
  article4: '',
};

// Weather Icon Map

const weatherIcons = {
  clear: '<i class="wi wi-wu-clear"></i>',
  cloudy: '<i class="wi wi-wu-cloudy"></i>',
  flurries: '<i class="wi wi-wu-flurries"></i>',
  fog: '<i class="wi wi-wu-hazy"></i>',
  hazy: '<i class="wi wi-wu-hazy"></i>',
  sleet: '<i class="wi wi-wu-sleat"></i>',
  rain: '<i class="wi wi-wu-rain"></i>',
  snow: '<i class="wi wi-wu-snow"></i>',
  sunny: '<i class="wi wi-wu-sunny"></i>',
  tstorms: '<i class="wi wi-wu-tstorms"></i>',
  chanceflurries: '<i class="wi wi-wu-chancesnow"></i>',
  chancerain: '<i class="wi wi-wu-chancerain"></i>',
  chancesleet: '<i class="wi wi-wu-chancesleat"></i>',
  chancesnow: '<i class="wi wi-wu-chancesnow"></i>',
  chancetstorms: '<i class="wi wi-wu-chancetstorms"></i>',
  partlysunny: '<i class="wi wi-wu-partlysunny"></i>',
  partlycloudy: '<i class="wi wi-wu-partlycloudy"></i>',
  mostlycloudy: '<i class="wi wi-wu-mostlycloudy"></i>',
  mostlysunny: '<i class="wi wi-wu-mostlysunny"></i>',
};
