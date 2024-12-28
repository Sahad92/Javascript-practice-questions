// ## **8. Month Days**

// **Problem:**  
// Write a program that takes a **month name** (`"January"`, `"February"`, etc.) and prints the **number of days** in that month:  
// - January, March, May, July, August, October, December → `"31 days"`  
// - April, June, September, November → `"30 days"`  
// - February → `"28 or 29 days"`  
// - Any other input → `"Invalid Month"`

const prompt = require('prompt-sync')();
let month = prompt("Enter a month: ");


switch(month){
    case 'january' :
    case 'march' :
    case 'may' :
    case 'july' :
    case 'august' :
    case 'october' :
    case 'december' :
        console.log("31 days")
        break;
    case 'april' :
    case 'june' :
    case 'september' :
    case 'november' :
        console.log("30 days")
        break;
    case 'february' :
        console.log("28 or 29 days")
        break;
    default :
        console.log("Invalid month")
}