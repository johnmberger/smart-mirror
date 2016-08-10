function requestFullScreen() {

  var body = document.body;
  var requestMethod = body.requestFullScreen || body.webkitRequestFullScreen || body.mozRequestFullScreen || body.msRequestFullScreen;

  if (requestMethod) {
    // Native full screen.
    requestMethod.call(body);
  }
  // remove button
  $('#fullscreen').remove();

  // check for display of mirror messages
  if (affirmMarker) {
    setTimeout(function() {
      affirm();
    },2500);
  }

}
