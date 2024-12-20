### 1. Scope Demonstration with let, const, and var

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

---

### 2. Function Declarations vs. Function Expressions and Hoisting

**Goal:** Create a small program that highlights the difference between function declarations and function expressions, as well as their hoisting behavior.

**Details:**  
- Write a function declaration (e.g., `function greet() { ... }`) and call it before it is defined in your code.  
- Write a function expression (e.g., `const greetAgain = function() { ... }`) and attempt to call it before it is defined.  
- Observe and log the results to the console.
- Inside each function (the declaration and the expression), just log a message to confirm that the function has run.
- Investigate the behavior and difference in the console output to understand how JavaScript hoists function declarations and function expressions differently.

**Expected Learning Points:**  
- Understanding that function declarations are hoisted, allowing calls before definitions.  
- Learning that function expressions are not hoisted in the same way, leading to `ReferenceError` or `TypeError` if you call them before they are assigned.  
- Reinforcing the concept of hoisting and how it applies to variables and functions.