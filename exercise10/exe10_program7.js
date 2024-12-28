// ## **7. Menu Selection**

// **Problem:**  
// Write a program that displays a **menu** with options:  
// 1. `"Start Game"`  
// 2. `"Load Game"`  
// 3. `"Settings"`  
// 4. `"Exit"`  
// Based on the user's input (1, 2, 3, or 4), print the corresponding action. If the input doesn’t match any option, print `"Invalid Choice"`.

const prompt = require('prompt-sync')();
let option = prompt("Enter a menu option: ");
option = Number(option)

switch(option){
    case 1 :
        console.log("Start Game")
        break;
    case 2 :
        console.log("Load Game")
        break;
    case 3 :
        console.log("Settings")
        break;
    case 4 :
        console.log("Exit")
        break;
    default :
        console.log("Invalid choice")
}