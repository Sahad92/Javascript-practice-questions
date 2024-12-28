// ## **5. Season Finder**

// **Problem:**  
// Write a program that takes a **month name** (`"January"`, `"February"`, etc.) and prints the corresponding **season**:  
// - `"December"`, `"January"`, `"February"` → `"Winter"`  
// - `"March"`, `"April"`, `"May"` → `"Spring"`  
// - `"June"`, `"July"`, `"August"` → `"Summer"`  
// - `"September"`, `"October"`, `"November"` → `"Autumn"`  
// - Any other input: `"Invalid Month"`


const prompt = require('prompt-sync')();
let month1 = prompt("Enter a first month: ");
let month2 = prompt("Enter a second month: ");
let month3 = prompt("Enter a third month: ");


switch(month1,month2,month3){
    case 'december' :
    case 'january' :
    case 'february' :
        console.log("Winter")
        break;
    case 'march' :
    case 'april' :
    case 'may' :
        console.log("spring")
        break;
    case 'september' :
    case 'october' :
    case 'november' :
        console.log("Summer")
        break;
    case 'june' :
    case 'july' :
    case 'august' :
        console.log("Autumn")
        break;

    default :
        console.log("Invalid Month")
}