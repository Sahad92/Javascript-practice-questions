/*### 2. Function Declarations vs. Function Expressions and Hoisting

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
*/

greet()

function greet(){
    console.log("hello")
}


// greetAgain()           //ReferenceError: Cannot access 'greetAgain' before initialization
const greetAgain = function() {
    console.log("hello again")
}
greetAgain()
