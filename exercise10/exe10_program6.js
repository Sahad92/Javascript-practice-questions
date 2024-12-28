// ## **6. Movie Rating**

// **Problem:**  
// Write a program that takes a **movie rating (G, PG, PG-13, R)** and prints its description:  
// - G: `"General Audience"`  
// - PG: `"Parental Guidance Suggested"`  
// - PG-13: `"Parents Strongly Cautioned"`  
// - R: `"Restricted"`  
// - Any other rating: `"Invalid Rating"`

const prompt = require('prompt-sync')();
let rating = prompt("Enter a movie rating: ");


switch(rating){
    case 'G' :
        console.log("General Audience")
        break;
    case 'PG' :
        console.log("Parental Guidance Suggested")
        break;
    case 'PG-13' :
        console.log("Parents Strongly Cautioned")
        break;
    case 'R' :
        console.log("Restricted")
        break;

    default :
        console.log("Invalid Rating")
}