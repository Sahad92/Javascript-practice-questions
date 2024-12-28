// ## 🚀 **8. Nested Conditions**

// **Problem:**  
// Write a program that evaluates whether a **person can board an international flight** based on the following conditions:  
// 1. The person must have a **valid passport**.  
// 2. If the passport is valid, check if the **visa is valid**.  
// 3. If the visa is valid, check if the person has a **boarding pass**.  

// If all conditions are satisfied, print `"Allowed to Board"`, otherwise print `"Not Allowed to Board"`.


valid_passport = true
visa_is_valid = true
boarding_pass = false

if(valid_passport == true){
    if(visa_is_valid == true){
        if(boarding_pass == true){
            console.log("Allowed to Board")
        }
        else{
            console.log("Not Allowed to Board")
        }
    }
    else{
        console.log("Not Allowed to Board")
    }
}
else{
    console.log("Not Allowed to Board")
}