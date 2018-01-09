//Global variables//

//function to store user birthdate //
export class Birthdate {
  constructor(month,day,year) {
    this.month = month;
    this.day = day;
    this.year = year;
    this.ageCalculation();
    this.ageInSeconds();
    this.calculateMarsAge();
    this.calculateJupiterAge();
    this.calculateVenusAge();
    this.calculateMercuryAge();
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
    let marsAge = (ageInEarthYears /= 1.88);
    return marsAge;
  }
  calculateJupiterAge(ageInEarthYears) {
    let jupiterAge = (ageInEarthYears /= 11.86);
    return jupiterAge;
  }
  calculateVenusAge(ageInEarthYears) {
    let venusAge = (ageInEarthYears /= 0.62);
    return venusAge;
  }
  calculateMercuryAge(ageInEarthYears) {
    let mercuryAge = (ageInEarthYears /= 0.24);
    return mercuryAge;
  }
}

// function lifeExpectancy(ageInEarthYears) {
//   if (ageInEarthYears => 65.0) {
//     return "Congrats, You will live another 15 years.";
//   } else if () {
//
//   }
// }

//Add life expectancy functions and additional features //
