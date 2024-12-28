// ## **4. Simple Calculator**

// **Problem:**  
// Write a program that takes an **operator (+, -, *, /)** and two numbers as input. Based on the operator, perform the corresponding operation and print the result.  
// - `+`: Addition  
// - `-`: Subtraction  
// - `*`: Multiplication  
// - `/`: Division  
// - Any other operator: `"Invalid Operator"`

const prompt = require('prompt-sync')();
let a = prompt("Enter a first number: ");
let b = prompt("Enter a second number: ");
let operator = prompt("Enter a operator: ");
a = Number(a)
b = Number(b)

switch(operator){
    case '+' :
        console.log(a+b)
        break;
    case '-' :
        console.log(a-b)
        break;
    case '*' :
        console.log(a*b)
        break;
    case '/' :
        console.log(a/b)
        break;

    default :
        console.log("Invalid operator")
}