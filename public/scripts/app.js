'use strict';

// arguments object - no longer bound
// if you try to access arguments is not gonna work


var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

// With ES5 syntax, I can pass more than the named
// arguments (a, b) to the function, and access the 
// third one with the "arguments" object

console.log(add(55, 1, 1001));

var addArrow = function addArrow(a, b) {
    //console.log(arguments); // <-- this doesn't work; not bound
    return a + b;
};

// --------------------------------------------
// "this" keyword is no longer bound
// on arrow functions

var user = {
    name: 'Andrew',
    cities: ['Cali', 'Medellin', 'Bogota'],
    printPlacesLived: function printPlacesLived() {
        // "this" is bound to this instance!
        console.log(this.name);
        console.log(this.cities);

        var that = this;
        this.cities.forEach(function (city) {
            // "this" isn't bound to anything on an anon fx
            console.log(that.name + " has lived in " + city);
            // "this" is undefined

            // arrow functions no longer bind their internal this
            // instead of "undefined", it uses its parent's "this" value
        });

        this.cities.forEach(function (city) {
            console.log(that.name + " has lived in " + city);
        });
    },
    // changing printPlacesLived to an arrow fx
    // use the parent "this": undefined

    newMethodSyntax: function newMethodSyntax(a, b) {
        console.log(this.name + " in a different way");
    },
    printPlacesWithMap: function printPlacesWithMap() {
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + " has lived in " + city + "!";
        });
        return cityMessages;
    }
};

user.printPlacesLived();
user.newMethodSyntax();
console.log(user.printPlacesWithMap());

// Challenge

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 8,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
