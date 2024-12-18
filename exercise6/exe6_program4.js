/***4. Object Property Extraction Function**  
**Goal:** Write a function that takes an object with properties `name`, `age`, and `city`, and returns a formatted string using these properties.  
**Details:**  
- The function should accept an object like `{name: "Alice", age: 25, city: "Paris"}`
- It should return a string like: `"Alice is 25 years old and lives in Paris."`
- Use template literals (if comfortable) or string concatenation.
- Test the function with a sample object and log the returned string.
*/

function property_extraction(){
    const details = {
        name : "Alice",
        age : 25,
        city : "Paris"

    }
    console.log(`${details.name} is ${details.age} years old and lives in ${details.city}.`)
}

property_extraction()