import { Human } from './../js/-interface.js';

$(document).ready(function() {
  $('#inputted-dob').submit(function(event) {
    event.preventDefault();
    let earthMonth = $('#inputted-birth-month').val();
    let earthDay = $('#inputted-birth-day').val();
    let earthYear = $('#inputted-birth-year').val();
    const Human = new Human()
  });


});
