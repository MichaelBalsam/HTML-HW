"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Michael Balsam 
   Date:   6/26/2020

	
*/
/* Set the date that is shown in the calendar */
var thisDay = new Date("August 30, 2018");

/*HTML code for the event list table */
var tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

/* Set the end date for the event list that is 14 days after the date stored in the thisDay variable */
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

/* Loop through the eventDates array */
for (var i = 0; i < eventDates.length; i++){
	var eventDate = new Date(eventDates[i]);
	var eventDay = eventDate.toDateString();
	var eventTime = eventDate.toLocaleTimeString();
	
	

	
/* If the event date is within the 14 day window, display it on the page */
if(thisDay <= eventDate && eventDate <= endDate){
	tableHTML += "<tr>";
    tableHTML += "<td>" + eventDay + " @ " + eventTime + "</td>";
    tableHTML += "<td>" + eventDescriptions[i] + "</td>";
    tableHTML += "<td>" + eventPrices[i] + "</td>";
    tableHTML += "</tr>";
	}
}

tableHTML += "</table>";

/*HTML code into the eventList box */
document.getElementById("eventList").innerHTML = tableHTML;