"use strict";

// ES5 function
var square = function square(x) {
    return x * x;
};
console.log(square(8));

// ES6 arrow function
var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log(squareArrow(9));

// Challenge:
// Using arrow functions

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};
console.log(getFirstName("Pedro Perez"));
