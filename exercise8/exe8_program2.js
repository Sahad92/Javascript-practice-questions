/*### 3. Returning Objects with Arrow Functions

**Goal:** Create arrow functions that return different data types, including implicit returns. Practice returning an object from an arrow function without using a block and ensuring correct object literal syntax.

**Details:**  
- Define an arrow function `getNumber` that takes no parameters and returns the number `10` implicitly.  
- Define an arrow function `getUser` that returns an object with a `username` and `age` property. Use the parenthesis syntax to return an object implicitly.  
- Log the results of calling both functions.

**Expected Learning Points:**  
- Mastering the syntax for implicit returns in arrow functions.  
- Understanding the difference between `( { ... } )` and `{ ... }` in arrow function returns.*/

const getNumber = () => 10
console.log(getNumber())

const getUser = () => ({username:"abc", age:"21"})
console.log(getUser())