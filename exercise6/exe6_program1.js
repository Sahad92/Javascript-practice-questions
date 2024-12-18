/***1. Basic Mathematical Operation Function**  
**Goal:** Create a function that takes two numbers as parameters and returns their product.  
**Details:**  
- Prompt the user (or define variables in your code) for two numbers.  
- Convert the input strings to numbers (if they are taken as strings) before passing them into the function.  
- Use the returned product from the function and log it to the console.  
- Use `Math.round()` on the final result to ensure it’s an integer.
*/

const prompt = require('prompt-sync')();
let a = prompt("Enter the first number: ")
let b = prompt("Enter the second number: ")
a = Number(a)
b = Number(b)

function product(a, b){
    mul = a*b
    return mul
}

console.log(Math.round(product(a, b)))