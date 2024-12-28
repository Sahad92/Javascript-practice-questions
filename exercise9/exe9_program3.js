// ## 🚀 **3. Comparison Operators (`<`, `>`, `<=`, `>=`, `==`, `!=`, `===`, `!==`)**

// **Problem:**  
// Write a program that compares **two numbers** (`a` and `b`) provided by the user. Print:  
// - `"a is greater"` if `a > b`  
// - `"b is greater"` if `b > a`  
// - `"Both are equal"` if `a === b`  
// - Make sure the program differentiates between a **number comparison** and a **string comparison**.


const prompt = require('prompt-sync')();
let a = prompt("Enter a first number: ");
let b = prompt("Enter a second number: ");
a= Number(a)
b= Number(b)

if(a>b){
    console.log("a is greater")
}
else if(b>a){
    console.log("b is greater")
}
else if(a === b){
    console.log("both are equal")
}