/*### 1. Scope Demonstration with let, const, and var

**Goal:** Write a program that demonstrates variable scope and shadowing using `var`, `let`, and `const` in different blocks (if-conditions and functions).

**Details:**  
- Declare a `let` variable outside of any block and assign it a value.
- Inside an `if` block, redeclare a variable with the same name using `let` and assign it a new value.  
- Inside the same block, declare a `const` variable. Try logging both variables inside and outside of the block to observe scope differences.
- Declare a `var` variable in the global scope and inside a function. Check its availability outside the function.
- Log all values to the console to see which ones are accessible and which are not.

**Expected Learning Points:**  
- Understanding that `let` and `const` are block-scoped, while `var` is function-scoped.
- Recognizing variable shadowing, where inner variables can temporarily override outer variables within the inner scope.
- Seeing what happens when you try to access variables declared inside a block from outside it.
*/

let a = 10;
var var1 = 100;

if(true){
    let a=20
    const b = 1
    console.log(a)
    console.log(b)
}
console.log(a)
// console.log(b)          // b is not defined

function variableScope(){
    var var2 = var1
    var2 = 200
    console.log(var1)
    console.log(var2)
}

variableScope()
console.log(var1)