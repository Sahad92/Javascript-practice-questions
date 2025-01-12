// ## **Program 2: Filtering Array Values and Breaking**

// ### **Description**
// - You have an array of numbers (e.g., `[2, 3, 5, 7, 10, 15, 20, 25, 30]`).
// - You want to loop through each number in the array and:
//   1. **Skip** printing the number if it’s divisible by `3` (use `continue`).
//   2. **Stop** the entire loop if the number is greater than `20` (use `break`).
//   3. Otherwise, just print the number.


const myarr = [2, 3, 5, 7, 10, 15, 20, 25, 30]

for(let a of myarr){
    if(a%3 == 0){
        continue
    }
    if(a > 20){
        break
    }
    console.log(a)
}