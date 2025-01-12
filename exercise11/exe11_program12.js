// **Program 12: Collecting Items Based on a Condition**  
//    - Have an array of strings or objects.  
//    - Use `forEach` to check each element against a condition (e.g., “language names that start with ‘j’”).  
//    - Collect the matching items into a separate array or list and display that list at the end.

let languages = ["javascript", "python", "c", "java"]
let new_languages = []

languages.forEach(element => {
    if(element.charAt(0) == "j"){
        new_languages.push(element)
    }
});

console.log(new_languages)