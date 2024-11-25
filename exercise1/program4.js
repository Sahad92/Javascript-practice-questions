/* 4. Postfix and Prefix Increment Operators
Problem: Write a program to demonstrate the difference between x++ (postfix) and ++x (prefix) in a loop.
Use both types of increment operators in a simple loop, and print the result of each iteration to see how the values are affected.*/

for (let i=0; i<5; i++) {
    console.log(i);
}

console.log("-------------")

for (let i=0; i<5; ++i) {
    console.log(i);
}

// let x = 3;
// const y = x++;
// console.log(x)
// console.log(y)

// let a = 3;
// const b = ++a;
// console.log(a)
// console.log(b)
