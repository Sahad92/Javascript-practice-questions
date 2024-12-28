// ## **9. Program: User Profile Validation**

// **Problem Statement:**  
// Write a program to validate and display user profile information based on the following conditions:
// 1. Check if the **user profile object** is empty.  
// 2. Check if the **user's email array** is empty.  
// 3. Use the **Nullish Coalescing Operator (??)** to handle cases where the **user's age** is `null` or `undefined`.  
// 4. Use a **ternary operator** to determine if the **user has premium membership** (`true` or `false`).  

// **Expected Output Example:**  
// User profile is empty
// User email array is empty
// User age: 25
// User has premium membership: Yes

let profile = {}
let email = []
let premium_membership =false
let age = 10
let check_age = age ?? 25




if(Object.keys(profile).length === 0){
    console.log("User profile is empty")
}
if(email.length == 0){
    console.log("User email array is empty")
    }
    
console.log(`User age: ${check_age}`)

let check_membership = (premium_membership == true) ?
    console.log("User has premium membership: Yes") :
    console.log("User has premium membership: No")
