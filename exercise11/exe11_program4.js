// ## **Program 4: User Input Simulation Using `do...while`**

// ### **Description**
// - Use a `do...while` loop to simulate repeatedly asking a user for input until they type `"stop"`.
// - Since we’re simulating, you can store inputs in an array (e.g., `["hello", "test", "stop"]`) to mimic user responses.
// - Print each input as it’s “entered,” and once you detect `"stop"`, exit the loop.

let user_input;
let my_arr = [];

do {
    const prompt = require('prompt-sync')();
    user_input = prompt("Enter a word: ");   
    my_arr.push(user_input)
    
    if(user_input == "stop"){
        break
    }

} while (true);

console.log(my_arr) 