function updateClock() {
	var currentTime = new Date ();
	var currentHours = currentTime.getHours ();
	var currentMinutes = currentTime.getMinutes ();
	var currentSeconds = currentTime.getSeconds ();

	// Pad the minutes and seconds with leading zeros, if required
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

	// Convert an hours component of "0" to "12"
	currentHours = (currentHours == 0) ? 24 : currentHours;

	// Compose the string for display
	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

	// Fill '#clock' div with time
	$("#clock").html(currentTimeString);
}

function updateDate() {
	var currentDate = new Date ();
	var currentDay = currentDate.getDate ();
	var currentMonth = currentDate.getMonth ();
	var currentYear = currentDate.getFullYear ();

	// Month names for displaying
	const monthNames = ["January", "February", "March", "April", "May", "June",	"July", "August", "September", "October", "November", "December"];

	// Compose the string for display
	var currentDateString = currentDay + " " + monthNames[currentMonth] + " " + currentYear;

	// Fill '#date' div with time
	$("#date").html(currentDateString);
}

// Update clock
setInterval('updateClock()', 0);

// Update date
setInterval('updateDate()', 0);