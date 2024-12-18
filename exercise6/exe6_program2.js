/***2. String Manipulation Function**  
**Goal:** Write a function that accepts a string and returns a modified version of that string.  
**Details:**  
- Your function should:
  - Trim any extra spaces at the start and end.
  - Convert the entire string to uppercase.
  - Replace all occurrences of a particular substring (e.g., "JS") with another substring (e.g., "JavaScript").
  - Return the final transformed string.
- Test the function by passing a string like `"   hello js world   "` and logging the result.
*/

const prompt = require('prompt-sync')();
let text = prompt("Enter the string: ")

function str_manipulation(text){
    let result = text.trim().toUpperCase().replaceAll(/\bJS\b/g, "JavaScript")
    return result
}

console.log(str_manipulation(text))