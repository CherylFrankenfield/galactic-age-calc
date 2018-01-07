import { Birthdate } from './../js/birthdate.js';

describe('Birthdate', function() {
  it('should display new instance of user inputted Earth Birth Month', function() {
    let birthdate = new Birthdate(5, 10, 1984);
    expect(birthdate.month).toEqual(5);
  });
  it('should display new instance of user inputted Earth Birth Day', function() {
    let birthdate = new Birthdate(5, 10, 1984);
    expect(birthdate.day).toEqual(10);
  });
  it('should display new instance of user inputted Earth Birth Year', function() {
    let birthdate = new Birthdate(5, 10, 1984);
    expect(birthdate.year).toEqual(1984);
  });
  //not passing yet//
  it('should display age of user in years', function() {
    let birthdate = newBirthdate.ageCalculation(2018, 2000);
    expect(newBirthdate.ageCalculation).toEqual(18);
  });

});
