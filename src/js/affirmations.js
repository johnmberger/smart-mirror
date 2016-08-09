function affirm() {

  var affirmationArray = [
      "Lookin' good!",
      'You look nice today!',
      'I like your style!',
      "You're awesome!",
      'Hey there!',
      'You look great!',
      'Hi!',
    ];

  function printToMirror() {
    var randomAffirmation = affirmationArray[Math.floor(Math.random() * affirmationArray.length)];

    $('.fullscreen-wrapper').append('<h2 class="middle-of-screen affirmation">' + randomAffirmation + '</h2>');

    setTimeout(function(){
    $('.affirmation').fadeOut(2500);
  }, 6000);
  };

  printToMirror();

  setInterval(function() {
    printToMirror();
  }, 600000);

}
