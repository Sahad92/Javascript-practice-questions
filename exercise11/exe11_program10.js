// **Program 10: Counting the Total Length of Strings**  
//    - Have an array of strings (e.g., programming language names).  
//    - Use `forEach` to iterate over the array, and for each item, add its length to a running total.  
//    - Display or print the final total after the loop completes.

let languages = ["javascript", "python", "c", "java"]
let total = 0;

languages.forEach(element => {
    total += (element.length)
});

console.log(total)