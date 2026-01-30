//  primarily 2 types ->  data type
// 1. primitive -> string, number, boolean, undefined, null
// 2. non primitive or referencial -> array and object

// Array: An array is a fundamental data structure that stores a collection of elements (like numbers or text) of the same type in a single variable, organized in a sequence and accessed by a numerical index, usually starting from zero

// let number1 = 10;
// let number2 = 20;
// let number3 = 30;
// let number4 = 40;
// let number5 = 50;

// 0 based index
// 0 - > 10, 1 -> 20, 2 -> 30, 3 -> 40, 4 - > 50
let array = [10, 20, 30, 40, 50];


// Access array element
// console.log(array[3]);

// How many elements in array. to find size of an array
// console.log(array.length);

// insert
array.push(60); //insert value at last
array.unshift(5); //insert value at first
array.unshift(2); //insert value at first

console.log(array);

// Remove
array.pop(); //remove value at last
array.pop(); //remove value at last
array.pop(); //remove value at last

array.shift(); // remove value at first
array.shift(); // remove value at first

console.log(array);


let arr2 = [100, 200, 300];

arr2[1] = 2000;
console.log(arr2);
