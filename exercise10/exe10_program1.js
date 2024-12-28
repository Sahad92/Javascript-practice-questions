// ## **1. Day of the Week**
// **Problem:**  
// Write a program that takes a **number (1-7)** as input and prints the corresponding **day of the week**:  
// - 1: `"Monday"`  
// - 2: `"Tuesday"`  
// - 3: `"Wednesday"`  
// - 4: `"Thursday"`  
// - 5: `"Friday"`  
// - 6: `"Saturday"`  
// - 7: `"Sunday"`  
// If the number is outside this range, print `"Invalid Day"`.

const prompt = require('prompt-sync')();
let number = prompt("Enter a number: ");
number = Number(number)

switch(number){
    case 1 :
        console.log("monday")
        break;
    case 2 :
        console.log("tuesday")
        break;
    case 3 :
        console.log("wednesday")
        break;
    case 4 :
        console.log("thursday")
        break;
    case 5 :
        console.log("friday")
        break;
    case 6 :
        console.log("saturday")
        break;
    case 7 :
        console.log("sunday")
        break;
    default :
        console.log("Invalid Day")
}
