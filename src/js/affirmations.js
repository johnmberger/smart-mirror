var affirmMarker = true;

function affirm() {

  var affirmations = [
      "Lookin' good!",
      'You look nice today!',
      'I like your style!',
      "You're awesome!",
      'Hey there!',
      'You look great!',
      'Hi!',
    ];

  function printToMirror() {

    var randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];

    $('.fullscreen-wrapper').append('<h1 class="middle-of-screen affirmation">' + randomAffirmation + '</h1>');

    setTimeout(function(){
      $('.affirmation').fadeOut(2500);
    }, 6000);
  };

  printToMirror();

  setInterval(function() {
    printToMirror();
  }, 600000);

}
