/*### 4. Using Array Iteration Methods

**Goal:** Take an array of numbers and use `forEach()`, `map()`, and `filter()` to produce desired outputs.

**Details:**  
- Initialize an array, e.g. `[2, 5, 3, 7, 8]`.
- Use `forEach()` to log each number multiplied by 2.
- Use `map()` to create a new array that contains each number squared. Log the new array.
- Use `filter()` to create a new array with only numbers greater than 5. Log the new filtered array.

**Expected Learning Points:**  
- Understanding the differences between `forEach()` (no return value), `map()` (creates a new array), and `filter()` (creates a filtered subset array).  
- Reinforcing array method usage in JavaScript.
*/

array = [2, 5, 3, 7, 8]

// array.forEach(element => {
//    new_element  = element * 2 
//    console.log(new_element)
// });

// function myFunction(num){
//     return num * num 
// }
// const map_array = array.map(myFunction)
// console.log(map_array)

let greater_than_num = 5
let sum = 0;
let new_arr = array.filter((value) => value > greater_than_num)
console.log(new_arr)