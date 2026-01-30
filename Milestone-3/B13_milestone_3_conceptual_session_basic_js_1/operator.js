/**
 * 3 types of operators
 * 1. Arithmetic operator: addition: + , substitution: -, multiplication: * , division: / ,modulus operator: %
 * 2. Comparison operator: ==, ===, > , < , >=, <=, !=, !==
 * 3. Logical operator: &&, ||, !
 */

// Arithmetic operator
// let bangla = 85;
// let english = 65;

// console.log(bangla + english);
// console.log(bangla - english);
// console.log(bangla * english);
// console.log((bangla / english).toFixed(2));
// console.log(13 % 2);

// Comparison operator  *******: always get boolean output
let physics = 50;
let math = "50";
// == checks only value
// console.log(physics == math);

// === checks value and data type both
// console.log(physics === math);

// > , < , >=, <=, !=, !==
let biology = 65;
let ict = 55;
// console.log(biology > ict);
// console.log(biology>=ict);
// console.log(biology < ict);
// console.log(biology <= ict);

// console.log(biology != ict);
// console.log(biology !== ict);

// Logical operator ****

// && operator
// let isMatured = true;
// let isInterested = true;
// let isRich = false;

// let isMarried = isMatured && isInterested && isRich;
// console.log(isMarried);

// || operator
let isMatured = true;
let isInterested = false;
let isRich = false;

let isMarried = isMatured || isInterested || isRich;
console.log(isMarried);

// ! operator
console.log(!isMatured);