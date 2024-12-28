// **Problem:**  
// Write a program that takes an **exam score** as input and evaluates the grade based on the following conditions:  
// - `90 or above`: Grade A  
// - `80-89`: Grade B  
// - `70-79`: Grade C  
// - `60-69`: Grade D  
// - `Below 60`: Grade F  

// Also, print whether the student **"Passed"** (score ≥ 60) or **"Failed"**.



const prompt = require('prompt-sync')();
let score = prompt("Enter your score in number: ");
score = Number(score)
if (score >= 90 && score <= 100) {
    console.log("Grade A")   
} 
else if(score >= 80 && score < 90) {
    console.log("Grade B")
}
else if(score >= 70 && score < 80) {
    console.log("Grade C")
}
else if(score >= 60 && score < 70) {
    console.log("Grade D")
}
else if(score <= 59 && score >= 0) {
    console.log("Grade F")
}
else{
    console.log("Enter a valid number")
}

if(score >= 60 && score <= 100){
    console.log("Passed")
}
else if(score < 60 && score > 0){
    console.log("failed")
}