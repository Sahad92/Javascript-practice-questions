// ## 🚀 **5. Ternary Operator (`? :`)**

// **Problem:**  
// Write a program to check whether a **user's age** makes them eligible to vote. Use the **ternary operator** to print:  
// - `"Eligible to vote"` if the age is `18 or above`  
// - `"Not eligible to vote"` otherwise  

const prompt = require('prompt-sync')();
let age = prompt("Enter your age: ");
age = Number(age)

let eligibilty = (age >= 18) ? "Eligible to vote" : "Not eligible to vote"
console.log(eligibilty)

