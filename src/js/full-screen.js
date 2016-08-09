function requestFullScreen() {

  var body = document.body;
  var requestMethod = body.requestFullScreen || body.webkitRequestFullScreen || body.mozRequestFullScreen || body.msRequestFullScreen;

  if (requestMethod) {
    // Native full screen.
    requestMethod.call(body);
  }
  $('#fullscreen').remove();

  if (affirmMarker) {
    setTimeout(function() {
      affirm();
    },2500);
  }

}
