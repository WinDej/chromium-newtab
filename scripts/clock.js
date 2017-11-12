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

// Update clock
setInterval('updateClock()', 0);
