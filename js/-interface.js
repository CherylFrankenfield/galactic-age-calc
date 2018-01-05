import { Human, Age } from './../js/scripts.js';

$(document).ready(function() {
  $('#inputted-dob').submit(function(event) {
    event.preventDefault();
    let earthMonth = parseInt($('#inputted-birth-month').val());
    let earthDay = parseInt($('#inputted-birth-day').val());
    let earthYear = parseInt($('#inputted-birth-year').val());
    let earthAge = new Age(earthMonth, earthDay, earthYear);

    $('.user-ages').append("<ul> your birthday" + earthMonth + "</ul>");
    // $('.user-ages').append("<p>Your Date of Birth is: " + earthAge.month + " " + earthAge.day + "," + earthAge.year + "</p>");

  });


});
