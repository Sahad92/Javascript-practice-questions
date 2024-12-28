// ## **3. Traffic Light System**

// **Problem:**  
// Write a program that takes the **color of a traffic light** as input (`"red"`, `"yellow"`, `"green"`) and prints the appropriate action:  
// - Red: `"Stop"`  
// - Yellow: `"Get Ready"`  
// - Green: `"Go"`  
// - Any other color: `"Invalid Color"`

const prompt = require('prompt-sync')();
let color = prompt("Enter a color: ");


switch(color){
    case 'red' :
        console.log("Stop")
        break;
    case 'yellow' :
        console.log("Get Ready")
        break;
    case 'green' :
        console.log("Go")
        break;

    default :
        console.log("Invalid color")
}