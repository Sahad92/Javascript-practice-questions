// ## 🚀 **2. Logical Operators (`&&`, `||`, `!`)**

// **Problem:**  
// Create a program that checks if a **user is eligible for a discount** on an online purchase.  
// - The user must be **logged in**.  
// - They must have a **valid membership card** or have **made a purchase above $100**.  
// - They must **not** have any **pending payments**.  

// Print `"Eligible for Discount"` if all conditions are met, otherwise print `"Not Eligible"`.



    let is_logged = false
    let valid_membership = false
    let purchase = 10
    let pending_payment = false


if (is_logged === true && 
    pending_payment === false && 
    (valid_membership === true || purchase >=100)){
        console.log("Eligible for Discount")
    }
else{
    console.log("Not Eligible")
}