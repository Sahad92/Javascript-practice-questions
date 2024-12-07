/*
Program 3:
Create a simple calculator that:
	•	Takes two numbers as input.
	•	Performs addition, subtraction, multiplication, and division.
	•	Rounds the results to two decimal places.
	•	Displays the results in a localized string format.

Topics covered: arithmetic operations, toFixed(), toLocaleString()
*/

const prompt = require('prompt-sync')();

let num1 = prompt("Enter a first number:");
// // console.log(num1);
let num2 = prompt("Enter a second number:");
// // console.log(num2);

num1 = Number(num1)
num2 = Number(num2)

let add = num1 + num2
add.toFixed(2);
console.log(`Additon: ${add.toLocaleString('en-IN')}`);

let sub = num1 - num2
sub.toFixed(2);
console.log(`Subraction: ${sub.toLocaleString('en-IN')}`);

let mul = num1 * num2
mul.toFixed(2);
console.log(`Multiplication: ${mul.toLocaleString('en-IN')}`);

let div = num1 / num2
div.toFixed(2);
console.log(`Division: ${div.toLocaleString('en-IN')}`);



