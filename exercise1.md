### 1. **Variable Scope and Assignment**
   - **Problem**: Write a program that demonstrates the use of `var`, `let`, and `const` in different scopes (inside and outside a function).
     - Show the difference between `var` (function-scoped) and `let`/`const` (block-scoped).
     - Experiment with declaring variables in different blocks and try to access them outside of those blocks.

### 2. **Data Type Conversion**
   - **Problem**: Write a program that converts various types (e.g., string, number, boolean) to other types. Include cases where conversion may fail or be ambiguous (e.g., converting `null`, `undefined`, or objects).
     - Convert a string to a number, a boolean to a string, and use explicit conversion methods like `Number()`, `String()`, etc.

### 3. **Comparison Operators**
   - **Problem**: Write a program that compares different datatypes using the equality operators (`==`, `===`) and explains their differences.
     - Compare primitive values and explain why `null == undefined` but `null === undefined` is false.
     - Compare arrays or objects and show why `[] == []` is false but `[] == ![]` can be true.

### 4. **Postfix and Prefix Increment Operators**
   - **Problem**: Write a program to demonstrate the difference between `x++` (postfix) and `++x` (prefix) in a loop.
     - Use both types of increment operators in a simple loop, and print the result of each iteration to see how the values are affected.

### 5. **Primitive vs Non-Primitive Data Types**
   - **Problem**: Write a program that demonstrates the behavior of primitive and non-primitive data types in JavaScript (e.g., copying an array and modifying its elements).
     - Show how arrays and objects are reference types, while primitives (like numbers and strings) are value types.
     - Modify an array or object and print out the original and modified values to show the effects of reference vs. value assignment.

### 6. **Object and Array Manipulation (Review)**
   - **Problem**: Create an array of numbers and a string variable. Write code that demonstrates:
     - Changing elements in an array.
     - Manipulating the string (e.g., string concatenation or conversion).
     - Adding new elements to the array and then removing them.
   - **Key Points**: Focus on manipulating arrays and strings without delving into object manipulation at this stage.

### 7. **Memory Allocation (Stack and Heap)**
   - **Problem**: Write a simple program that demonstrates the distinction between primitive and reference data types.
     - Create a primitive value (e.g., `let a = 10`) and a reference type (e.g., `let b = {key: "value"}`), and show how each is handled differently in memory.
     - Test the behavior of copying and modifying both types.