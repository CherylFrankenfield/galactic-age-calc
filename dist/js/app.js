(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Global variables//

//function to store user birthdate //
var Birthdate = exports.Birthdate = function () {
  function Birthdate(month, day, year) {
    _classCallCheck(this, Birthdate);

    this.month = month;
    this.day = day;
    this.year = year;
    // this.seconds = seconds;
    // this.ageInYears = ageInYears;
    this.ageCalculation();
    this.ageInSeconds();
  }

  _createClass(Birthdate, [{
    key: "ageCalculation",
    value: function ageCalculation(currentYear, year) {
      var ageInEarthYears = currentYear -= year;
      return ageInEarthYears;
    }
  }, {
    key: "ageInSeconds",
    value: function ageInSeconds(ageInEarthYears) {
      var seconds = ageInEarthYears *= 365 * 24 * 60 * 60;
      return seconds;
    }
  }, {
    key: "calculateMarsAge",
    value: function calculateMarsAge(ageInEarthYears) {
      var marsAge = ageInEarthYears *= 1.88;
      return marsAge;
    }
  }, {
    key: "calculateJupiterAge",
    value: function calculateJupiterAge(ageInEarthYears) {
      var jupiterAge = ageInEarthYears *= 11.86;
      return jupiterAge;
    }
  }, {
    key: "calculateVenusAge",
    value: function calculateVenusAge(ageInEarthYears) {
      var venusAge = ageInEarthYears /= 0.62;
      return venusAge;
    }
  }]);

  return Birthdate;
}();

//function to calculate Mercury Age //


function calculateMercuryAge(earthAge) {
  var mercuryAge = earthAge *= 0.24;
  return mercuryAge;
}

//Add life expectancy functions and additional features //

var Human = exports.Human = function Human(ageYears, ageSeconds, lifeExpectancy, gender, dateOfBirth) {
  _classCallCheck(this, Human);

  this.ageYears = [];
  this.ageSeconds = [];
  this.lifeExpectancy = [];
  this.gender = [];
  this.dateOfBirth = [];
};

},{}],2:[function(require,module,exports){
'use strict';

var _birthdate = require('./../js/birthdate.js');

$(document).ready(function () {
  $('#inputted-dob').submit(function (event) {
    event.preventDefault();
    var earthMonth = parseInt($('#inputted-birth-month').val());
    var earthDay = parseInt($('#inputted-birth-day').val());
    var earthYear = parseInt($('#inputted-birth-year').val());
    var newBirthdate = new _birthdate.Birthdate(earthMonth, earthDay, earthYear);
    var currentDate = moment().format('L');
    var currentYear = moment().format('YYYY');
    // let earthAgeInYears = newBirthdate.ageCalculation(currentYear, newBirthdate.year);
    // let earthSeconds = newBirthdate.ageInSeconds(newBirthdate.ageCalculation(currentYear,newBirthdate.year));

    $('.earth-birthday').append("<div> Your Earth birthday is: " + newBirthdate.month + "/" + newBirthdate.day + "/" + newBirthdate.year + "</div>");

    $('.current-timestamp').append("<div> The current day is: " + currentDate + "</div>");

    $('.earth-age').append("<div> Your Earth age is: " + newBirthdate.ageCalculation(currentYear, newBirthdate.year) + "</div>");

    $('.age-in-seconds').append("<div> Your age in seconds is: " + newBirthdate.ageInSeconds(newBirthdate.ageCalculation(currentYear, newBirthdate.year)) + "</div>");

    $('.mars-age').append("<div> Your Mars age is: " + newBirthdate.calculateMarsAge(newBirthdate.ageCalculation(currentYear, newBirthdate.year)) + "</div>");

    $('.jupiter-age').append("<div> Your Jupiter age is: " + newBirthdate.calculateJupiterAge(newBirthdate.ageCalculation(currentYear, newBirthdate.year)) + "</div>");

    $('.venus-age').append("<div> Your Venus age is: " + newBirthdate.calculateVenusAge(newBirthdate.ageCalculation(currentYear, newBirthdate.year)) + "</div>");
  });
});

},{"./../js/birthdate.js":1}]},{},[2]);
