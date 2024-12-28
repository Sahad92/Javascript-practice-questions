// ## 🚀 **4. Scope (`let`, `const`, `var`)**

// **Problem:**  
// Write a program that declares a variable using `let` inside an `if` block and another variable using `var` inside the same `if` block. Try to access both variables **inside and outside** the `if` block.  
// Explain in comments why one works and the other throws an error (or doesn't behave as expected).

if(true){
    let a = "one"
    var b = "two"

    console.log(a)
    console.log(b)
}

// console.log(a)          // a is not defined because let is block scope 
console.log(b)