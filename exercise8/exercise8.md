---

### 1. Exploring `this` in Object Methods

**Goal:** Create an object with methods defined in two different ways:  
- One method using a standard function definition.  
- Another method defined as an arrow function.  

**Details:**  
- In one method (regular function), log `this` and a property of the object.  
- In the arrow function method, log `this` and attempt to access the same property.  
- Compare the outputs to understand how arrow functions behave differently with `this` in object methods.

**Expected Learning Points:**  
- Understanding that regular functions can access `this` as the object they are called on.  
- Arrow functions do not have their own `this` and instead inherit `this` from the outer scope.

---

### 2. `this` in Regular Functions vs. Arrow Functions

**Goal:** Define two functions—one using a regular function syntax and another using an arrow function—and attempt to log `this` inside them. Call these functions in the global context.

**Details:**  
- Write a regular function `regularFunc()` that logs `this`.
- Write an arrow function `arrowFunc()` that logs `this`.
- Call both in the global scope and observe what `this` refers to.
- (Optional) Attach the functions as event handlers (if running in a browser) or call them as methods of an object to see how `this` changes.

**Expected Learning Points:**  
- Seeing how `this` defaults to the global object in non-strict mode or `undefined` in strict mode for regular functions.  
- Understanding that arrow functions capture `this` from their lexical scope (most often the global or enclosing scope, not the caller).

---

### 3. Returning Objects with Arrow Functions

**Goal:** Create arrow functions that return different data types, including implicit returns. Practice returning an object from an arrow function without using a block and ensuring correct object literal syntax.

**Details:**  
- Define an arrow function `getNumber` that takes no parameters and returns the number `10` implicitly.  
- Define an arrow function `getUser` that returns an object with a `username` and `age` property. Use the parenthesis syntax to return an object implicitly.  
- Log the results of calling both functions.

**Expected Learning Points:**  
- Mastering the syntax for implicit returns in arrow functions.  
- Understanding the difference between `( { ... } )` and `{ ... }` in arrow function returns.

---

### 4. Using Array Iteration Methods

**Goal:** Take an array of numbers and use `forEach()`, `map()`, and `filter()` to produce desired outputs.

**Details:**  
- Initialize an array, e.g. `[2, 5, 3, 7, 8]`.
- Use `forEach()` to log each number multiplied by 2.
- Use `map()` to create a new array that contains each number squared. Log the new array.
- Use `filter()` to create a new array with only numbers greater than 5. Log the new filtered array.

**Expected Learning Points:**  
- Understanding the differences between `forEach()` (no return value), `map()` (creates a new array), and `filter()` (creates a filtered subset array).  
- Reinforcing array method usage in JavaScript.

---

### 5. Rebinding `this` Using `bind()`, `call()`, and `apply()`

**Goal:** Experiment with a regular function that uses `this` and then use `bind()`, `call()`, and `apply()` to change the function’s context.

**Details:**  
- Define a regular function `showPrice()` that logs `this.price`.  
- Define an object `product` with a `price` property.  
- Use `showPrice()` by itself to see what happens (expecting `undefined` or global `this` behavior).  
- Use `showPrice.call(product)`, `showPrice.apply(product)`, and `showPrice.bind(product)` to force `this` to reference `product`.  
- Log the results to confirm that `this` is now pointing to `product`.

**Expected Learning Points:**  
- Understanding how `call()`, `apply()`, and `bind()` manipulate `this` in regular functions.  
- Reinforcing that arrow functions cannot have their `this` context changed this way.

