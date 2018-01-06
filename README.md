# Galactic Age Calculator

##### Determine your galactic age and life expectancy in space!

#### By Cheryl Frankenfield, 1/5/18

## Description

_Create an app to determine user's age based on planets' solar years. Additionally, find out how your life expectancy on Earth compares to other planets in the galaxy._

## Setup/Installation Requirements

* Navigate to your terminal.
* Perform Git clone command on the repo [here.](https://github.com/CherylFrankenfield/galactic-age-calc.git)
* Perform Git atom . command to open all files in repo.
* View index.html in browser.

## Planning

1. Configuration/dependencies
  * This app uses Bootstrap and jQuery.
  * This app will use momentjs and time functionality.

2. Specs
_The app will take a person's age in years and convert into seconds._
* _Input: Any age (number): 1 year._
* _Output: Returns a number in seconds: 31,556,952_

_The app will allow user to enter a birthdate and return age based on current time (for Earth)._
* _Input: User is born on 5/10/1984 (Numbers or Text input)._
* _Output: App returns user's age is a number: 33 yrs, 7 m, & 26 d_

_The app will display person's age in Mercury years._
* _Input: User is born on 5/10/1984 (Numbers or Text input)._
* _Output: App returns user's age is a number: _

_The app will display person's age in Venus years._
* _Input: User is born on 5/10/1984 (Numbers or Text input)._
* _Output: App returns user's age is a number: _

_The app will display person's age in Mars years._
* _Input: User is born on 5/10/1984 (Numbers or Text input)._
* _Output: App returns user's age is a number: _

_The app will display person's age in Jupiter years._
* _Input: User is born on 5/10/1984 (Numbers or Text input)._
* _Output: App returns user's age is a number: _

_The app will return life expectancy on Earth and take additional user input based on gender._
* _Input: User selects gender from dropdown (male/female)._
* _Output: App returns user's life expectancy in years (number)._

_The app will return life expectancy on Earth and take additional user input based on country._
* _Input: User selects country living in (string input)._
* _Output: App returns user's life expectancy in years (number)._

3. Integration
  * Display user input (w/ blank numbers fields for day,month,year) a submit button, and reset button.
  * Integrate feature that takes life expectancy input from user, including: gender dropdown, country dropdown, and earlier determined current age.
  * Future user stories may include more features to determine life expectancy based on health, exercise, weight, and if person reaches X age (65), they are more likely to live til X age (85).

4. UX/UI
    * Include and modify Bootstrap/Sass etc.
    * Develop custom style, Display planet cards with info. on them.

## Known Bugs

_Currently unable to use moment() as described in documentation and w/ ES6. Displays formatted moment() function in alert but not in appended div class. Bootstrap loads originally with browersync and then after a second it disappears and no style is displayed. Spent some time trying to figure out communication issue and unable at this time._

## Support and contact details

_If you have any issues, questions, ideas or concerns, please contact us._

## Technologies Used

* HTML
* CSS
* SASS
* Javascript
* jQuery
* Gulp
* Node.js
* Jasmine
* Karma

### License

*This is open source so feel free to grab and use.*

Copyright (c) 2018 **_Cheryl Frankenfield_**
