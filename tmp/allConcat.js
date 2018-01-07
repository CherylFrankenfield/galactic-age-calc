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
    // let earthAgeInYears = newBirthdate.ageCalculation(currentYear, newBirthdate.year);
    // let earthSeconds = newBirthdate.ageInSeconds(newBirthdate.ageCalculation(currentYear,newBirthdate.year));

    $('.earth-birthday').append("<div> Your Earth birthday is: " + newBirthdate.month + "/" + newBirthdate.day + "/" + newBirthdate.year + "</div>");

    $('.current-timestamp').append("<div> The current day is: " + currentDate + "</div>");

    $('.earth-age').append("<div> Your Earth age is: " + newBirthdate.ageCalculation(currentYear, newBirthdate.year) + "</div>");

    $('.age-in-seconds').append("<div> Your age in seconds is: " + newBirthdate.ageInSeconds(newBirthdate.ageCalculation(currentYear,newBirthdate.year)) + "</div>");

    $('.mars-age').append("<div> Your Mars age is: " + newBirthdate.calculateMarsAge(newBirthdate.ageCalculation(currentYear, newBirthdate.year)) + "</div>");

    $('.jupiter-age').append("<div> Your Jupiter age is: " + newBirthdate.calculateJupiterAge(newBirthdate.ageCalculation(currentYear, newBirthdate.year)) + "</div>");

    $('.venus-age').append("<div> Your Venus age is: " + newBirthdate.calculateVenusAge(newBirthdate.ageCalculation(currentYear, newBirthdate.year)) + "</div>");


  });
});
