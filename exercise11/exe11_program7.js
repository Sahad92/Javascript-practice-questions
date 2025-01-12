// **Program 7: Creating an Array of Object Entries**  
//    - Declare an object with key-value pairs representing items or properties (e.g., game names).  
//    - Convert the object into an array of `[key, value]` pairs (using a suitable built-in method).  
//    - Use a `for...of` loop to iterate over these pairs.  
//    - Show or process each key and value (such as printing them or adding them to another data structure).

let games_name = {
    one : "cricket",
    two : "volleyball",
    thrid : "hockey" 
}

let result = Object.entries(games_name)
// console.log(result)

for (const element of result) {
    console.log(element[0], element[1])    
}





