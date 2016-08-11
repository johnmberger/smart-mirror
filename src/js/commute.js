var commuteTime;

function updateTravelTime() {
  var timeToWork = document.getElementById('travel-time');
  timeToWork.innerHTML = commuteTime;
}

function getLeaveByTime() {

  if (workArrivalTime > 0) {

    function getGoing() {

      // Calculate time now and leave time
      var now = new Date;
      var hour = now.getHours();
      var minutes = now.getMinutes();
      var day = now.getDay();
      var nowTotal = (hour * 60) + minutes;
      var timeRemaining = (workArrivalTime - nowTotal) - parseInt(commuteTime);

      // Show time to leave when timeReamining is less than 60 minutes
      if (timeRemaining < 60 && timeRemaining > 0 && day !== 0 && day !== 6) {

        var timeToLeave = document.getElementById('time-to-leave');
        var pluralOrSingular = document.getElementById('post-time');

        // accounting for 1 minute remaining
        if (timeRemaining === 1) {
          pluralOrSingular.innerHTML = 'minute to get to work on time';
        } else {
          pluralOrSingular.innerHTML = 'minutes to get to work on time'
        }

        // update timeReamining
        $('.countdown').css('visibility', 'visible');
        timeToLeave.innerHTML = timeRemaining;

      } else {
        $('.countdown').css('visibility', 'hidden');
      }
    }
    // invoke function now
    getGoing();
    
    // set 1 second repeat
    setInterval(function () {
        getGoing();
    }, 1000);

  // hide leave-by time if no time was entered
  } else {
    $('.countdown').css('visibility', 'hidden');
  }
}
