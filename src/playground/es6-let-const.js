var nameVar = 'Andrew';
var nameVar = 'Michael';
// With "var", vars can be reinitialized which can be problematic
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
// With "let", vars can't be redeclared
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//nameConst = 'Juan';
// Const doesn't even let you reassign variables :)
console.log('nameConst', nameConst);

function getPetName () {
    // This is a separate scope
    const petName = 'Hal';
    return petName;
}
getPetName();
//console.log(petName);

const fullName = 'Andrew Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);