let str = " PROGRAMMING HERO";
let str2 = "Programming hero ";

// size check
// console.log(str.length);

// access specific character by index
// console.log(str[0]);

// compare two string

// convert to capital or small
// console.log(str.toLowerCase() === str2.toLowerCase());
// console.log(str.toUpperCase() === str2.toUpperCase());
// console.log(str2.toLowerCase());

// trim : to remove space from beginning and end
let strSmall = str.toLowerCase();
let str2Small = str2.toLowerCase();
// console.log(str.trim());
// console.log(strSmall.trim() === str2Small.trim());

// slice, to slice a string
// slice(start index, end before)
let bd = "I love Bangladesh";
// console.log(bd.slice(2, 6));

// includes: to check specific portion
// console.log(bd.includes("love Bangladesh"));

// concat
// let newStr = str.concat(str2);
// let newStr = str + str2;
// console.log(newStr);

// replace: to replace specific portion
// console.log(bd.replace("I", "We"));
// console.log(bd.replace("love", "love very much"));

// Split ***
// It's very useful for reverse a string
let str1 = "We love programming and web development";
let strArr = str1.split(" ");
// let reverseArr = strArr.reverse();
// let reverseStr = reverseArr.join(" ");
// Shortcut;
let reverseStr = str1.split(" ").reverse().join(" ");

// console.log(str1);
// console.log(strArr);
// console.log(reverseArr);
// console.log(reverseStr);

// console.log(str1.reverse());

// Count a specific letter
let string = "We love to travel and watch movie";

// how many times the t letter
let count = 0;
// i+=1 , i++
for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  if (letter.toLowerCase() == " ") {
    // count = count + 1;
    // count += 1;
    count++;
  }
}

console.log(count);
