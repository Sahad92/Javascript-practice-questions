// ## 🚀 **7. Inline `if` Statements**

// **Problem:**  
// Write a program that checks a user's **account balance**:  
// - If the balance is `greater than 1000`, print `"Sufficient Funds"`.  
// - If the balance is `less than 500`, print `"Low Balance"`.  

// Use an **inline `if` statement** (without braces `{}`) for this task.

const prompt = require('prompt-sync')();
let balance = prompt("Enter your account balance: ");
balance = Number(balance)

if (balance > 1000) console.log("Sufficient Funds") 
if(balance < 500) console.log("low balance")