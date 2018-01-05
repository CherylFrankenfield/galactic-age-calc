//Global variables//


//function to calculate age //
export class Birthdate {
  constructor(month,day,year) {
    this.month = month;
    this.day = day;
    this.year = year;
  }
}

//function to calculate current time//
export class Moment {
  constructor(year, month, day, hour, minute, second) {
    this.year = year;
    this.month = month;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }
}


export class Human {
  constructor(ageYears, ageSeconds, lifeExpectancy, gender, dateOfBirth) {
    this.ageYears = [];
    this.ageSeconds = [];
    this.lifeExpectancy = [];
    this.gender = [];
    this.dateOfBirth = [];
  }
}
