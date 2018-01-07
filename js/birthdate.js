//Global variables//

//function to store user birthdate //
export class Birthdate {
  constructor(month,day,year) {
    this.month = month;
    this.day = day;
    this.year = year;
    // this.seconds = seconds;
    // this.ageInYears = ageInYears;
    this.ageCalculation();
    this.ageInSeconds();
  }
  ageCalculation(currentYear, year) {
    let ageInEarthYears = currentYear -= year;
    return ageInEarthYears;
  }
  ageInSeconds(ageInEarthYears) {
    let seconds = ageInEarthYears *= (365*24*60*60);
    return seconds;
  }
  calculateMarsAge(ageInEarthYears) {
    let marsAge = (ageInEarthYears *= 1.88);
    return marsAge;
  }
  calculateJupiterAge(ageInEarthYears) {
    let jupiterAge = (ageInEarthYears *= 11.86);
    return jupiterAge;
  }
}


//
// //function to calculate Jupiter Age //
// function calculateJupiterAge(earthAge) {
//   let jupiterAge = (earthAge *= 11.86);
//   return jupiterAge;
// }

//function to calculate Venus Age //
function calculateVenusAge(earthAge) {
  let venusAge = (earthAge /= 0.62);
  return venusAge;
}

//function to calculate Mercury Age //
function calculateMercuryAge(earthAge) {
  let mercuryAge = (earthAge /= 0.24);
  return mercuryAge;
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
