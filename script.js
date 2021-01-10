



function update() {
	"use strict";
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	//gets date
	var d = new Date();
	
	var date = d.getDate();
	var month = months[d.getMonth()];
	var day = days[d.getDay()];
	var year = d.getFullYear();
	var hour = d.getHours();
	var minute = d.getMinutes();
	
	//displays Date/time
	document.getElementById("date").innerHTML = day + ", " + month + " " + date + ", " + year;
	document.getElementById("time").innerHTML = (hour === 0 ? 12 : hour > 12 ? hour - 12 : hour) + ":" + (minute < 10 ? "0" + minute : minute) + (hour >= 12 ? " PM" : " AM");
	
//	//left in school
//	var str = "";
//	var minTime = (hour * 60) + minute;
//
//	//Monday Schedule
//	if (day === 1) {
//
//		//4th period
//		if (minTime >= (12 * 60 + 23)) {
//			str+= "School ends in " + ((13 * 60 + 45) - minTime) + " minutes";
//		}
//
//		//3rd period/lunch
//		else if (minTime >= (10 * 60 + 22)) {
//
//			if (minTime >= (10 * 60 + 27) && minTime < (11 * 60 + 48)) {
//				str+= "A Lunch starts " + ((11 * 60 + 48) - minTime) + " minutes<br>";
//			}
//			if (minTime >= (10 * 60 + 57) && minTime < (12 * 60 + 18)) {
//				str+= "B Lunch starts" + ((12 * 60 + 18) - minTime) + " minutes<br>";
//			}
//			if (minTime < (10 * 60 + 52)) {
//				str+= "A Lunch ends in " + ((10 * 60 + 52) - minTime) + " minutes";
//			}
//			else if (minTime >= (11 * 60 + 48)){
//				str+= "B Lunch ends in " + ((12 * 60 + 18) - minTime) + " minutes";
//			}
//
//		}
//
//		//2nd period
//		else if (minTime >= (9 * 60 + 1)) {
//			str+= "2nd Period ends in " + ((10 * 60 + 22) - minTime) + " minutes";
//		}
//
//		//1st period
//		else {
//			str+= "1st Period ends in " + ((8 * 60 + 56) - minTime) + "minutes";
//		}
//
//	}
//
//	//	Friday Schedule
//	else if(day === 5) {}
//	//Regular Schedule
//	else {
//
//		//4th period
//		if (minTime >= (12 * 60 + 51)) {
//			str+= "School ends in " + ((14 * 60 + 25) - minTime) + " minutes";
//		}
//
//		//3rd period/lunch
//		else if (minTime >= (10 * 60 + 48)) {
//
//			if (minTime >= (10 * 60 + 54) && minTime < (12 * 60 + 22)) {
//			}
//				str+= "C Lunch starts in " + ((12 * 60 + 22) - minTime) + " minutes<br>";
//			if (minTime >= (11 * 60 + 23) && minTime < (12 * 60 + 51)) {
//				str+= "3rd Period/C Lunch ends in " + ((12 * 60 + 51) - minTime) + " minutes<br>";
//			}
//			if (minTime < (11 * 60 + 17)) {
//				str+= "A Lunch ends in " + ((11 * 60 + 17) - minTime) + " minutes";
//			}
//			else if (minTime >= (11 * 60 + 35) && minTime < (12 * 60 + 5)) {
//				str+= "B Lunch ends in " + ((12 * 60 + 5) - minTime) + " minutes";
//			}
//			else if (minTime >= (12 * 60 + 22)) {
//				str+= "C Lunch ends in " + ((12 * 60 + 51) - minTime) + " minutes";
//			}
//
//		}
//
//		//2nd period
//		else if (minTime >= (9 * 60 + 9)) {
//			str+= "2nd Period ends in " + ((10 * 60 + 48) - minTime) + " minutes";
//		}
//
//		//1st period
//		else {
//			str+= "1st Period ends in " + ((9 * 60 + 3) - minTime) + "minutes";
//		}
//
//	}
//	document.getElementById("current").innerHTML = str;
}

function search(event) {
	"use strict";
	if (event.keyCode === 13) {

		event.preventDefault();
		var str = document.getElementById("google").value;
		window.location.replace("https://www.google.com/search?q=" + str);

	}

}

function start() {
	"use strict";
	var url = window.location.href;
	if (url.split("?")[1]){
		var params = url.split("?")[1].split("&");
		//other param stuff
	}
	
	var d = new Date();
	
	document.getElementById("bellSchedule").innerHTML = (d.getDay() === 1) ? "1st Period&emsp;7:35 - 8:56<br>2nd Period&emsp;9:01 - 10:22<br>3rd Period&emsp;10:27 - 11:48<br>C Lunch&emsp;11:48 - 12:18<br>4th Period&emsp;12:23 - 1:45" : 
	(d.getDay() === 5) ? "1st Period&emsp;7:35 - 8:30<br>2nd Period&emsp;8:35 - 9:30<br>3rd Period&emsp;9:35 - 10:30<br>4th Period&emsp;10:35 - 11:30<br>Lunch" :
	"1st Period&emsp;7:35 - 9:03<br>2nd Period&emsp;9:09 - 10:48<br>3rd Period&emsp;10:54 - 12:22<br>C Lunch&emsp;12:22 - 12:51<br>4th Period&emsp;12:56 - 2:25";
	
	var rand = Math.floor(Math.random() * 3);
	document.body.style.backgroundImage = (rand === 0) ? "url('background0.jpg')" : (rand === 1) ? "url('background1.jpg')" : "url('background2.jpg')";
	
	update();
	setInterval(
		function () {
			update();
		}, 1000);
}

