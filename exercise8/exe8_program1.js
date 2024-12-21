/*
### 1. Exploring `this` in Object Methods

**Goal:** Create an object with methods defined in two different ways:  
- One method using a standard function definition.  
- Another method defined as an arrow function.  

**Details:**  
- In one method (regular function), log `this` and a property of the object.  
- In the arrow function method, log `this` and attempt to access the same property.  
- Compare the outputs to understand how arrow functions behave differently with `this` in object methods.

**Expected Learning Points:**  
- Understanding that regular functions can access `this` as the object they are called on.  
- Arrow functions do not have their own `this` and instead inherit `this` from the outer scope.
*/

const first = {
    name : "abc",
    id : 1,
    city : "ahmedabad",
    standard_func : function(){
        console.log(this)
    }
}


first.standard_func()

const second = {
    name : "xyz",
    id : 2,
    city : "mumbai",
    arrow_func :() => {console.log(this)}

}

second.arrow_func()
