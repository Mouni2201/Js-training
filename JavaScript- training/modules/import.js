//import keyword is used to bring the code that was exported from another file

import {bankName} from "./export.js";

console.log(bankName);


import {multiply, divide} from "./export.js";

console.log(multiply(3,5));
console.log(divide(15,5));

import {FoodItems} from "./export.js";

let food = FoodItems("Veg Biryani");
console.log(food);
//console.log(FoodItems("Veg Biryani", "kalakand"))

// //--------------------------------------------------------

import {employee} from "./employee.js";

import { bank } from "./export.js";

console.log(employee("Mounica"));
console.log(bank(12345667789678));