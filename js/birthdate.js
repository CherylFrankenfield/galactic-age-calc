//Global variables//
let earthAge = 0;
let marsAge = 0;
let venusAge = 0;
let jupiterAge = 0;
let mercuryAge = 0;

//function to calculate age //
export class Birthdate {
  constructor(month,day,year) {
    this.month = month;
    this.day = day;
    this.year = year;
  }
}

//function to calculate current time//
// export class Moment {
//   constructor(year, month, day, hour, minute, second) {
//     this.year = year;
//     this.month = month;
//     this.hour = hour;
//     this.minute = minute;
//     this.second = second;
//   }
// }

//function to calculate Earth Age//


//function to calculate Mars Age //
function calculateMarsAge(earthAge) {
  let marsAge = (earthAge *= 1.88);
  return marsAge
}

//function to calculate Jupiter Age //
function calculateJupiterAge(earthAge) {
  let jupiterAge = (earthAge *= 11.86);
  return jupiterAge
}

//function to calculate Venus Age //
function calculateVenusAge(earthAge) {
  let venusAge = (earthAge /= .62);
  return venusAge
}

//function to calculate Mercury Age //
function calculateMercuryAge(earthAge) {
  let mercuryAge = (earthAge /= .24);
  return mercuryAge
}

//Add life expectancy functions and additional features //
export class Human {
  constructor(ageYears, ageSeconds, lifeExpectancy, gender, dateOfBirth) {
    this.ageYears = [];
    this.ageSeconds = [];
    this.lifeExpectancy = [];
    this.gender = [];
    this.dateOfBirth = [];
  }
}
