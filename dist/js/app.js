(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Global variables//
var earthAge = 0;
var marsAge = 0;
var venusAge = 0;
var jupiterAge = 0;
var mercuryAge = 0;

//function to calculate age //

var Birthdate = exports.Birthdate = function Birthdate(month, day, year) {
  _classCallCheck(this, Birthdate);

  this.month = month;
  this.day = day;
  this.year = year;
};

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
    // let newCurrentTime = new Moment(y,m,d,h,m,s);
    var currentTime = moment();

    $('.earth-birthday').append("<div> Your Earth birthday is: " + newBirthdate.month + "/" + newBirthdate.day + "/" + newBirthdate.year + "</div>");

    // alert(currentTime);
    $('.current-timestamp').append("<div> The current day and time is: " + currentTime + "</div>");

    // $('.earth-age').append("<div> Your Earth age is: " + "</div>");
  });
});

},{"./../js/birthdate.js":1}]},{},[2]);
