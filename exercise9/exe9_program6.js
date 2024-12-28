// ## 🚀 **6. Multiple Conditions with Logical Operators**

// **Problem:**  
// Write a program to validate a **user login system** with the following conditions:  
// - The **username** must be `"admin"`.  
// - The **password** must be `"password123"`.  
// - The **user must have 2FA enabled** (`twoFactorAuthEnabled = true`).  

// Print `"Login Successful"` if all conditions are met, otherwise print `"Login Failed"`.

const prompt = require('prompt-sync')();
let username = prompt("Enter your username: ");
let password = prompt("Enter your password: ");
let twoFactorAuthEnabled = prompt("is 2FA enabled: ");

if(username == 'admin' && password == 'password123' && twoFactorAuthEnabled == 'true'){
    console.log("Login successful")
}
else{
    console.log("Login Failed")
}