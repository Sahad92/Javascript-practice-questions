### Exercises Involving Functions

**1. Basic Mathematical Operation Function**  
**Goal:** Create a function that takes two numbers as parameters and returns their product.  
**Details:**  
- Prompt the user (or define variables in your code) for two numbers.  
- Convert the input strings to numbers (if they are taken as strings) before passing them into the function.  
- Use the returned product from the function and log it to the console.  
- Use `Math.round()` on the final result to ensure it’s an integer.

**2. String Manipulation Function**  
**Goal:** Write a function that accepts a string and returns a modified version of that string.  
**Details:**  
- Your function should:
  - Trim any extra spaces at the start and end.
  - Convert the entire string to uppercase.
  - Replace all occurrences of a particular substring (e.g., "JS") with another substring (e.g., "JavaScript").
  - Return the final transformed string.
- Test the function by passing a string like `"   hello js world   "` and logging the result.

**3. Array Filtering and Summation Function**  
**Goal:** Create a function that filters an array of numbers and returns the sum of all numbers greater than a given threshold.  
**Details:**  
- The function should accept two parameters:
  - An array of numbers.
  - A threshold number.
- Use array methods (like `filter()`) inside the function to determine which values meet the criteria.
- After filtering, sum the resulting values and return the sum.  
- Test with an array like `[10, 5, 20, 3, 15]` and a threshold of `10`.

**4. Object Property Extraction Function**  
**Goal:** Write a function that takes an object with properties `name`, `age`, and `city`, and returns a formatted string using these properties.  
**Details:**  
- The function should accept an object like `{name: "Alice", age: 25, city: "Paris"}`
- It should return a string like: `"Alice is 25 years old and lives in Paris."`
- Use template literals (if comfortable) or string concatenation.
- Test the function with a sample object and log the returned string.

**5. Date Processing Function**  
**Goal:** Create a function that takes a `Date` object and returns a formatted date string.  
**Details:**  
- The function should accept a `Date` object as a parameter.
- Inside the function, extract the month, day, and year using `getMonth()`, `getDate()`, and `getFullYear()`.
- Format the date into a string like `"January 23, 2023"`. (Hint: create an array of month names)
- Test the function by passing a `new Date()` object or a fixed date like `new Date(2023, 0, 23)`.

**6. Function That Demonstrates Variable Scope**  
**Goal:** Write two functions:  
- One function uses a `var` variable inside a block and logs its value inside and outside the block.  
- Another function does the same with `let` or `const`.  
**Details:**  
- Show how `var` is function-scoped and can “leak” out of a block vs. `let`/`const` which are block-scoped.
- Log the results to understand the differences in behavior.

**7. Call By Value and Call By Reference Demonstration**  
**Goal:**  
- Write a function that attempts to modify a primitive data type parameter (like a number) and log the original variable to show that it does not change outside the function.  
- Write another function that takes an object as a parameter and modifies one of its properties, then log the original object outside the function to show that it has changed.  

---