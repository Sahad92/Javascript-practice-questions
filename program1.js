/* 1. Variable Scope and Assignment
Write a program that demonstrates the use of var, let, and const in different scopes (inside and outside a function).
Show the difference between var (function-scoped) and let/const (block-scoped).
Experiment with declaring variables in different blocks and try to access them outside of those blocks. */

var d = "abc"; 
let e = "xyz";
const f = "def";

// console.table([d,e,f]);

{
    var x = 1;
    let y = 2;
    const z = 3;
}
// console.log(x); 
// console.log(y);   // y is not defined
// console.log(z);   // z is not defined

function myFunction(){
    var a = "abc"; 
    let b = "xyz";
    const c = "def";

    // console.table([a,b,c]);
    // console.table([d,e,f]);

    // console.log(x); 
    // console.log(y);   // y is not defined
    // console.log(z);   // z is not defined
  
}

myFunction();
// console.log(a);  //a is not defined
// console.log(b);  //b is not defined
// console.log(c);  //c is not defined




