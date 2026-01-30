// Object - > non primitive or referencial data type

// let bikeColor = "Black";
// let bikeBrand = "Honda";
// let bikeCC = 160;
// let bikePillion = 2;
// let bikeMilage = 35;
// let isMeterDigital = true;
// let bikeAdvantages = ["less milage", "High speed", "Low configuration"];

let bike = {
  // key/property: value
  color: "Black",
  brand: "Honda",
  cc: 160,
  pillion: 2,
  milage: 35,
  isMeterDigital: true,
  advantages: ["less milage", "High speed", "Low configuration"],
  battery: {
    color: "black",
    durability: "strong",
    warranty: "2 year",
  },
};
bike.isMeterDigital = false; // update
bike.cc = 300; // update
delete bike.battery; // delete
console.log(bike);

// console.log(bike);
// Loop iteration over object
console.log(Object.values(bike));
let bikeProperties = Object.keys(bike);

console.log(bikeProperties);
for (let i = 0; i < bikeProperties.length; i++) {
  let key = bikeProperties[i];
  let value = bike[key];
  console.log(i, " -> ", key, " : ", value);
}

// Using for in loop
// for (let key in bike) {
//   console.log(key, " -> ", bike[key]);
// }

// access a specific property or key  ***
//  1. dot notation .
//  2. bracket  notation []

// console.log(bike.color); // dot notation
// console.log(bike.advantages); // dot notation
// console.log(bike.battery); // dot notation

// console.log(bike["milage"]); // bracket notation
// console.log(bike["isMeterDigital"]); // bracket notation
