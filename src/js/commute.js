var commuteTime;

function updateTravelTime() {
  var timeToWork = document.getElementById('travel-time');
  timeToWork.innerHTML = commuteTime;
}

function getLeaveByTime() {

  if (workArrivalTime > 0) {

    function getGoing() {

      var now = new Date;
      var hour = now.getHours();
      var minutes = now.getMinutes();
      var day = now.getDay();
      var nowTotal = (hour * 60) + minutes;
      var timeRemaining = (workArrivalTime - nowTotal) - parseInt(commuteTime);

      if (timeRemaining <= 180) {
        $('#commute-time').css('visibility', 'visible');
      } else {
        $('#commute-time').css('visibility', 'hidden');
      }

      if (timeRemaining < 60 && timeRemaining > 0 && day !== 0 && day !== 6) {

        var timeToLeave = document.getElementById('time-to-leave');
        var pluralOrSingular = document.getElementById('post-time');

        if (timeRemaining === 1) {
          pluralOrSingular.innerHTML = 'minute to get to work on time';
        } else {
          pluralOrSingular.innerHTML = 'minutes to get to work on time'
        }

        $('.countdown').css('visibility', 'visible');
        timeToLeave.innerHTML = timeRemaining;

      } else {
        $('.countdown').css('visibility', 'hidden');
      }
    }

    getGoing();
    setInterval(function () {
        getGoing();
    }, 1000);
  } else {
    $('.countdown').css('visibility', 'hidden');
  }
}
