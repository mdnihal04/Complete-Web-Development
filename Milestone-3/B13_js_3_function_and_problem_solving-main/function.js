function blenderMachine(fruit) {
  // Your logic
  console.log("I received ", fruit, " to make " + fruit + " juice");
}

// blenderMachine("Orange");

let num1 = 100;
let num2 = 100;

function checkEvenSumThenDoSomething(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
  if (sum % 2 == 0) {
    console.log("Yes this is even number");
    console.log("I do something");
  } else {
    console.log("No this is odd number");
    console.log("I do something");
  }
}

// checkEvenSumThenDoSomething(num1, num2);

function withoutParameter() {
  console.log("I am function without parameter");
}
// withoutParameter()

// Return
function sumTwoNumAndMultiplyByFive(num1, num2) {
  let sum = num1 + num2;
  let result = sum * 5;
  //   console.log(result);
  if (result % 2 === 0) {
    return result;
  } else {
    return "Sorry! The output is not a even number. Please try again.";
  }
}

// let result = sumTwoNumAndMultiplyByFive(2, 2);
// let result2 = sumTwoNumAndMultiplyByFive(10, 5);
// let result3 = sumTwoNumAndMultiplyByFive(10, 6);
// console.log(result, result2, result3);

// param arr and obj

function sumArray(arr) {
  console.log(arr);
  let sum = 0;

  for (let number of arr) {
    // sum = sum + number;
    sum += number;
  }

  //   console.log(sum);
  return sum;
}

// let sumOfArr = sumArray([10, 20, 30, 40, 50]);
// console.log(sumOfArr);

function countObjectProperty(obj) {
  console.log(obj);
  let count = Object.keys(obj).length;
//   console.log(count);
  return count;
}

let person = { name: "Utsho", age: 25, roll: 29, location: "Badda, Dhaka" };
let count = countObjectProperty(person);
console.log(count);
