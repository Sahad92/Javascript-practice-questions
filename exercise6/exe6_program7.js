/* **7. Call By Value and Call By Reference Demonstration**  
**Goal:**  
- Write a function that attempts to modify a primitive data type parameter (like a number) and log the original variable to show that it does not change outside the function.  
- Write another function that takes an object as a parameter and modifies one of its properties, then log the original object outside the function to show that it has changed.  
*/

// let num = 10

// function call_by_value(){
//     let num2 = num
//     num2 = "20"
//     console.log(num)
//     console.log(num2)
// }

// call_by_value()

// console.log(num)


let details1 = {
    name : "Alice",
    age : 25,
    city : "Paris"
} 
function call_by_refrence(){
    let details2 = details1
    details2.name = "sahad"
    console.log(details1.name)
    console.log(details2.name)
}
call_by_refrence()

console.log(details1.name)
