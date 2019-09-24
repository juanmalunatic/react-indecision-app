// arguments object - no longer bound
// if you try to access arguments is not gonna work


const add = function (a, b) {
    console.log(arguments);
    return a + b;
}

// With ES5 syntax, I can pass more than the named
// arguments (a, b) to the function, and access the 
// third one with the "arguments" object

console.log(add(55, 1, 1001));

const addArrow = (a, b) => {
    //console.log(arguments); // <-- this doesn't work; not bound
    return a + b;
}

// --------------------------------------------
// "this" keyword is no longer bound
// on arrow functions

const user = {
    name: 'Andrew',
    cities: ['Cali', 'Medellin', 'Bogota'],
    printPlacesLived: function () {
        // "this" is bound to this instance!
        console.log(this.name);
        console.log(this.cities);

        const that = this;
        this.cities.forEach(function (city) {
            // "this" isn't bound to anything on an anon fx
            console.log(that.name + " has lived in " + city)
            // "this" is undefined

            // arrow functions no longer bind their internal this
            // instead of "undefined", it uses its parent's "this" value
        })

        this.cities.forEach((city) => {
            console.log(that.name + " has lived in " + city)
        });

    },
    // changing printPlacesLived to an arrow fx
    // use the parent "this": undefined

    newMethodSyntax(a, b) {
        console.log(this.name + " in a different way");
    },

    printPlacesWithMap() {
        const cityMessages = this.cities.map(
            (city) => this.name + " has lived in " + city + "!"
        );
        return cityMessages;
    }
}

user.printPlacesLived();
user.newMethodSyntax();
console.log(user.printPlacesWithMap());

// Challenge

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map(
            (number) => number * this.multiplyBy
        )
    }
}

console.log(multiplier.multiply());