import { Birthdate } from './../js/birthdate.js';

$(document).ready(function() {
  $('#inputted-dob').submit(function(event) {
    event.preventDefault();
    let earthMonth = parseInt($('#inputted-birth-month').val());
    let earthDay = parseInt($('#inputted-birth-day').val());
    let earthYear = parseInt($('#inputted-birth-year').val());
    alert("hello");
    let birthdate = new Birthdate(earthMonth, earthDay, earthYear);

    $('.earth-birthday').append("<div> Your Earth birthday is: " + earthMonth + "/" + earthDay + "/" + earthYear + "</div>");
    // $('.user-ages').append("<p>Your Date of Birth is: " + earthAge.month + " " + earthAge.day + "," + earthAge.year + "</p>");

  });


});
