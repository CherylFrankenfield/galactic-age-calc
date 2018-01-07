import { Birthdate } from './../js/birthdate.js';

$(document).ready(function() {
  $('#inputted-dob').submit(function(event) {
    event.preventDefault();
    let earthMonth = parseInt($('#inputted-birth-month').val());
    let earthDay = parseInt($('#inputted-birth-day').val());
    let earthYear = parseInt($('#inputted-birth-year').val());
    let newBirthdate = new Birthdate(earthMonth, earthDay, earthYear);
    let currentDate = moment().format('L');
    let currentYear = moment().format('YYYY');

    $('.earth-birthday').append("<div> Your Earth birthday is: " + newBirthdate.month + "/" + newBirthdate.day + "/" + newBirthdate.year + "</div>");

    $('.current-timestamp').append("<div> The current day is: " + currentDate + "</div>");
    // $('.age-in-seconds').append("<div> Your age in seconds is: " + ageInSeconds + "</div>");

    $('.earth-age').append("<div> Your Earth age is: " + newBirthdate.ageCalculation(currentYear, newBirthdate.year) + "</div>");
  });


});
