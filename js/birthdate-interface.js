import { Birthdate } from './../js/birthdate.js';

$(document).ready(function() {
  $('#inputted-dob').submit(function(event) {
    event.preventDefault();
    let earthMonth = parseInt($('#inputted-birth-month').val());
    let earthDay = parseInt($('#inputted-birth-day').val());
    let earthYear = parseInt($('#inputted-birth-year').val());
    let newBirthdate = new Birthdate(earthMonth, earthDay, earthYear);
    // let newCurrentTime = new Moment(y,m,d,h,m,s);
    let currentTime = moment();

    $('.earth-birthday').append("<div> Your Earth birthday is: " + newBirthdate.month + "/" + newBirthdate.day + "/" + newBirthdate.year + "</div>");

    // alert(currentTime);
    $('.current-timestamp').append("<div> The current day and time is: " + currentTime + "</div>");

    // $('.earth-age').append("<div> Your Earth age is: " + "</div>");
  });


});
