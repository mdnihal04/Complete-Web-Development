/** 
যদি(শর্ত){
    // কিছু একটা হবে
} {
    // নাহলে এটা হবে
}
 */

let result = 3.4;

if (result == 5.0) {
  console.log("Baba computer kine dibe");
} else if (result >= 4.5) {
  console.log("Baba laptop kine dibe");
} else if (result >= 4.0) {
  console.log("Baba tab kine dibe");
} else if (result >= 3.5) {
  console.log("Baba mobile kine dibe");
} else {
  console.log("Baba kichui kine dibe na. Basha gele marbe.");
}

// Problem 1. Delivery Charge: Order amount যদি amount ≥ 1000 হয় → “Free Delivery”, না হলে → “Delivery Charge = 80”
let orderAmount = 900;
if (orderAmount >= 1000) {
  console.log("Free Delivery");
} else {
  console.log("Delivery charge 80");
}

// // Problem 2. ATM Withdraw: যদি withdraw amount ≤ balance amount হয়
//                     যদি withdraw amount % 500 == 0 হয় → “Withdraw Successful”
//                     না হলে → “Enter amount multiple of 500”
//                  না হলে → “Insufficient Balance”

let balance = 2000;
let withdrawAmount = 1600;

// If else ladder
if (withdrawAmount <= balance) {
  if (withdrawAmount % 500 === 0) {
    console.log("Withdraw Successful");
  } else {
    console.log("Enter amount multiple of 500");
  }
} else {
  console.log("Insufficient Balance");
}

// If else ladder
// if(5>6){

// } else if(7>8){

// } else{

// }

// Ternary operator
let isMatured = true;

// কন্ডিশন ? সত্যি ঃ মিথ্যা
let isMarried = isMatured
  ? console.log("biye korbe")
  : console.log("biye korbe na");
