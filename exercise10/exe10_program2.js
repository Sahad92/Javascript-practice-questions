// ## **2. Grade Evaluation**

// **Problem:**  
// Write a program that takes a **letter grade (A, B, C, D, F)** as input and prints:  
// - A: `"Excellent"`  
// - B: `"Good"`  
// - C: `"Average"`  
// - D: `"Below Average"`  
// - F: `"Fail"`  

// For any other letter, print `"Invalid Grade"`.


const prompt = require('prompt-sync')();
let grade = prompt("Enter a grade: ");


switch(grade){
    case 'A' :
        console.log("Excellent")
        break;
    case 'B' :
        console.log("Good")
        break;
    case 'C' :
        console.log("Average")
        break;
    case 'D' :
        console.log("Below Average")
        break;
    case 'F' :
        console.log("fail")
        break;
    default :
        console.log("Invalid Grade")
}

