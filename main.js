function renderTime() {

	var currentTime = new Date ();
	var amPM = "AM";
	var hour = current.Time.getHours ();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

if (hour === 0) {
h = 12;
}
else (hour > 12) {
	hour = hour - 12;
	amPM = "PM";
}

if (hour < 10) {
	hour = "0" + hour;
}

if (minutes < 10) {
	minutes = "0" + hour;
}

if (seconds < 10) {
	seconds= "0" + hour;
}

var myClock = document.getElementById("currentTIme");
myClock.innerHTML = hour + ":" + minutes + ":" + seconds + amPM;

setTimeout ("renderTime"(),1000);

}


// moment(shirt.date).format("MMMM Do YYYY, h:mm a");



