/*### 5. Rebinding `this` Using `bind()`, `call()`, and `apply()`

**Goal:** Experiment with a regular function that uses `this` and then use `bind()`, `call()`, and `apply()` to change the function’s context.

**Details:**  
- Define a regular function `showPrice()` that logs `this.price`.  
- Define an object `product` with a `price` property.  
- Use `showPrice()` by itself to see what happens (expecting `undefined` or global `this` behavior).  
- Use `showPrice.call(product)`, `showPrice.apply(product)`, and `showPrice.bind(product)` to force `this` to reference `product`.  
- Log the results to confirm that `this` is now pointing to `product`.

**Expected Learning Points:**  
- Understanding how `call()`, `apply()`, and `bind()` manipulate `this` in regular functions.  
- Reinforcing that arrow functions cannot have their `this` context changed this way.
*/

const product = {
    price : 100,
}
function showPrice(){
    console.log(this.price)
}

showPrice(product)
showPrice()
showPrice.call(product)
showPrice.apply(product)
showPrice.bind(product)
