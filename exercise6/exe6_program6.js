/* **6. Function That Demonstrates Variable Scope**  
**Goal:** Write two functions:  
- One function uses a `var` variable inside a block and logs its value inside and outside the block.  
- Another function does the same with `let` or `const`.  
**Details:**  
- Show how `var` is function-scoped and can “leak” out of a block vs. `let`/`const` which are block-scoped.
- Log the results to understand the differences in behavior.
*/

function first(){
    {
        var text1 = "using var variable"
    }
    console.log(text1);
}
// console.log(text1);             

function second(){
    {
        let text2 = "using let variable"
        const text3 = "using const variable"
        console.log(text2);
        console.log(text3);
    }
    // console.log(text2);
    // console.log(text3);
}       
// console.log(text2);
// console.log(text3);

first();
second();