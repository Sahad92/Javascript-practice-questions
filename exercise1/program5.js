/*5. Primitive vs Non-Primitive Data Types
Problem: Write a program that demonstrates the behavior of primitive and non-primitive data types in JavaScript (e.g., copying an array and modifying its elements).
Show how arrays and objects are reference types, while primitives (like numbers and strings) are value types.
Modify an array or object and print out the original and modified values to show the effects of reference vs. value assignment.
*/

// let a = "one";
// let b = a;
// b= "two";

// console.log(a);
// console.log(b);

const car = {
    type:"bmw", 
    model:"500", 
    color:"white"
};

const car2 = car;
car2.model = "600";

console.log(car.model);
console.log(car2.model);
