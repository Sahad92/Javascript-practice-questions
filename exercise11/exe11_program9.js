// **Program 9: Filter Array Elements**  
//    - Define an array of programming languages or any items.  
//    - Use a `for...in` loop to iterate through the array indices.  
//    - For each element, check if it meets a certain condition (e.g., contains the letter `"j"`).  
//    - If it does, display or collect it; if not, ignore it.


let languages = ["javascript", "python", "c", "java"]

for (const key in languages) {
    
    if(languages[key].includes("j")){
        console.log(languages[key])
    }

}
