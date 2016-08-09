(function () {
	'use strict';

	function getDate() {
		var currentDate = new Date(),
		weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayOfWeek = weekday[currentDate.getDay()],
		domEnder = function() {
	    var a = currentDate; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
		}(),
		dayOfMonth = currentDate.getDate() + domEnder,
		months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		curMonth = months[currentDate.getMonth()],
		curYear = currentDate.getFullYear();
		var today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ", " + curYear;
		return today;
	}

	var timeElement = document.getElementById('time');
	function updateClock(time) {
	  time.innerHTML = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}).toLowerCase();
	}

	var dateElement = document.getElementById('date');
	function updateDate(date) {
		date.innerHTML = getDate();
	}

	setInterval(function () {
	    updateClock(timeElement);
			updateDate(dateElement);
	}, 1000);

}());
