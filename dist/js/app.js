(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Global variables//
var earthAge = 0;
var marsAge = 0;
var venusAge = 0;
var jupiterAge = 0;
var mercuryAge = 0;

//function to store user birthdate //

var Birthdate = exports.Birthdate = function () {
  function Birthdate(month, day, year) {
    _classCallCheck(this, Birthdate);

    this.month = month;
    this.day = day;
    this.year = year;
    this.ageCalculation();
  }

  _createClass(Birthdate, [{
    key: "ageCalculation",
    value: function ageCalculation(currentYear, year) {
      return currentYear -= year;
    }
  }]);

  return Birthdate;
}();

//take date format and convert to seconds

//function to calculate Earth Age in Seconds//

//function to calculate Mars Age //


function calculateMarsAge(earthAge) {
  var marsAge = earthAge *= 1.88;
  return marsAge;
}

//function to calculate Jupiter Age //
function calculateJupiterAge(earthAge) {
  var jupiterAge = earthAge *= 11.86;
  return jupiterAge;
}

//function to calculate Venus Age //
function calculateVenusAge(earthAge) {
  var venusAge = earthAge /= .62;
  return venusAge;
}

//function to calculate Mercury Age //
function calculateMercuryAge(earthAge) {
  var mercuryAge = earthAge /= .24;
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

    $('.earth-birthday').append("<div> Your Earth birthday is: " + newBirthdate.month + "/" + newBirthdate.day + "/" + newBirthdate.year + "</div>");

    $('.current-timestamp').append("<div> The current day is: " + currentDate + "</div>");
    // $('.age-in-seconds').append("<div> Your age in seconds is: " + ageInSeconds + "</div>");

    $('.earth-age').append("<div> Your Earth age is: " + newBirthdate.ageCalculation(currentYear, newBirthdate.year) + "</div>");
  });
});

},{"./../js/birthdate.js":1}]},{},[2]);
