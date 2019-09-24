// ES5 function
const square = function (x) {
    return x * x;
}
console.log(square(8));

// ES6 arrow function
const squareArrow = (x) => x * x;
console.log(squareArrow(9));

// Challenge:
// Using arrow functions

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log( getFirstName("Pedro Perez"));